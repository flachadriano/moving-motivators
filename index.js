const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const Q = require('q');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/react', express.static(`${__dirname}/node_modules/react/dist/react.js`));
app.use('/bootstrap', express.static(`${__dirname}/node_modules/bootstrap/dist/css/bootstrap.min.css`));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index');
});

app.get(`/${process.env.SECRET_URL}`, (request, response) => {
  pg.defaults.ssl = true;
  const client = new pg.Client(process.env.URL);
  const getResultsQuery = 'select users.email, cards.id, user_cards.value, user_cards.idx, cards.name from users, user_cards, cards where users.id=user_cards.user_id and user_cards.card_id=cards.id order by users.id, user_cards.idx;';

  client.connect((err) => {
    if (err) return console.log('Get Error', err);
    client.query(getResultsQuery, (getResultQueryError, result) => {
      if (getResultQueryError) return console.log('Get error!', getResultQueryError);

      const resultsGroupedByEmail = _.groupBy(result.rows, item => item.email);

      _.forEach(resultsGroupedByEmail, (value, key) => {
        resultsGroupedByEmail[key] = _.keyBy(resultsGroupedByEmail[key], 'id');
      });

      client.end();

      return response.render('results', {
        rows: result.rows,
        r: resultsGroupedByEmail,
      });
    });
  });
});

app.post('/save', (request, response) => {
  const cardsToSave = request.body.result;
  const emailToSave = request.body.email;

  console.log(`Saving: ${emailToSave} ${JSON.stringify(cardsToSave)}`);

  pg.defaults.ssl = true;
  const insertUserQuery = 'INSERT INTO users(email) VALUES($1) RETURNING id';

  const client = new pg.Client(process.env.URL);

  client.connect((err) => {
    if (err) return;
    client.query(insertUserQuery, [emailToSave], (userInsertError, result) => {
      if (userInsertError) return console.log('Insert error!', userInsertError);
      const newlyCreatedUserId = result.rows[0].id;
      const promises = [];

      for (var index = 0; index < 10; index++) {
        promises.push(runQuery(client, cardsToSave[index], index, newlyCreatedUserId));
      }

      return Q.all(promises).then(() => {
        client.end();
        response.json({ success: true, data: request.body });
        console.log('Connection closed!');
      });
    });
  });
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

function runQuery(client, card, index, userId) {
  const deferred = Q.defer();
  const insertCardQuery = 'INSERT INTO user_cards(card_id, user_id, value, idx) VALUES($1, $2, $3, $4)';
  client.query(insertCardQuery, [card.id, userId, card.priority, index], (cardInsertError, result) => {
    if (cardInsertError) deferred.reject(new Error(cardInsertError));
    deferred.resolve(result);
  });
  return deferred.promise;
}
