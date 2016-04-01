var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// TODO: use react.min.js in production
app.use('/react', express.static(__dirname + '/node_modules/react/dist/react.js'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/buzsi', function(request, response) {
  var pg = require('pg');

  pg.defaults.ssl = true;
  pg.connect(process.env.URL, function(err, client) {
    console.log(process.env);
    if (err) throw err;
    console.log('Connected to postgres! Getting schemas...');

    client
      .query('SELECT table_schema,table_name FROM information_schema.tables;')
      .on('row', function(row) {
        console.log(JSON.stringify(row));
      });
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
