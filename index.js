const config = require('config');
const bodyParser = require('body-parser');
const express = require('express');
const axios = require('axios');
const port = 8071;
const app = express();

app.use(bodyParser.json()); // Parse body input from the requests
axios.defaults.headers.post['Content-Type'] = 'application/json';

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => console.log('Listening on port '.concat(port)));
