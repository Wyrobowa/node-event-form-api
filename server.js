const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {
  get, listen, set, use,
} = express();

// Configs
dotenv.config();

use(bodyParser.urlencoded({ extended: false }));
use(bodyParser.json());

// Models
require('./models/Event');

// DB Connection
const mongoConnectOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DATABASE, mongoConnectOptions)
  .then(() => console.log('DB connected!'))
  .catch((error) => console.log(error));

mongoose.connection.on('error', (err) => console.log(err));

// Routes
const eventRoute = require('./routes/eventRoute');

use('/', eventRoute);

// Start server
set('port', process.env.PORT);
listen(get('port'), () => {
  console.log(`Listening on port ${get('port')}`);
});
