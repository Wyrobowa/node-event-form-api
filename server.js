const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Configs
dotenv.config();

const { errorHandler, error404Handler } = require('./middlewares/errorHandlers');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

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

app.use('/', eventRoute);

// Set up Error Handlers on App
app.use(error404Handler);
app.use(errorHandler);

// Start server
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
