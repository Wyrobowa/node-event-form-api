const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Configs
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Models
require('./models/Event');

// DB Connection
const mongoConnectOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(process.env.DATABASE, mongoConnectOptions)
  .then(() => console.log('DB connected!'))
  .catch((error) => console.log(error));

mongoose.connection.on('error', (err) => console.log(err));

// Routes
const eventRoute = require('./routes/eventRoute');
app.use('/', eventRoute);

// Start server
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
