const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Configs
dotenv.config();

// Models

// Routes

// DB Connection
const mongoConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(process.env.DATABASE, mongoConnectOptions)
  .then(() => console.log('DB connected!'))
  .catch((error) => console.log(error));

mongoose.connection.on('error', (err) => console.log(err));

// Start server
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
