const pg = require('pg');
const express = require('express');
const Q = require('q');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// TODO: use react.min.js in production
app.use('/react', express.static(__dirname + '/node_modules/react/dist/react.js'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/buzsi', (request, response) => {
  const sampleCards = [
    { card_id: 9, value: 1 },
    { card_id: 7, value: -1 },
    { card_id: 5, value: 0 },
    { card_id: 1, value: 1 },
    { card_id: 2, value: 1 },
    { card_id: 3, value: -1 },
    { card_id: 4, value: 1 },
    { card_id: 8, value: 1 },
    { card_id: 6, value: 0 },
    { card_id: 0, value: 1 },
  ];

  pg.defaults.ssl = true;
  const insertUserQuery = 'INSERT INTO users(email) VALUES($1) RETURNING id';

  const client = new pg.Client(process.env.URL);

  client.connect((err) => {
    if (err) return;
    client.query(insertUserQuery, ['marton.papp@lensa.com'], (userInsertError, result) => {
      if (userInsertError) return console.log('Insert error!', userInsertError);
      const newlyCreatedUserId = result.rows[0].id;
      const promises = [];

      for (var index = 0; index < 10; index++) {
        promises.push(runQuery(client, sampleCards[index], index, newlyCreatedUserId));
      }

      return Q.all(promises).then(() => {
        client.end()
        console.log('Connection closed!');
      });
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function runQuery(client, card, index, userId) {
  const deferred = Q.defer();
  const insertCardQuery = 'INSERT INTO user_cards(card_id, user_id, value, idx) VALUES($1, $2, $3, $4)';
  client.query(insertCardQuery, [card.card_id, userId, card.value, index], (cardInsertError, result) => {
    if (cardInsertError) deferred.reject(new Error(cardInsertError));
    deferred.resolve(result);
  });
  return deferred.promise;
}
