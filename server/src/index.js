const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: '4546tgrrfhfgh567567ghjghj',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, maxAge: 6 * 60 * 60 * 1000 },
}));

app.set('view engine', 'html');

const routes = require('./routes');

app.use(routes);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
