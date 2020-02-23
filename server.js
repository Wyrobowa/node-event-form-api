const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middlewares
const { errorHandler, error404Handler } = require('./middlewares/errorHandlers');

// Configs
const app = express();
app.disable('x-powered-by');
app.use(cors());

dotenv.config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Models
require('./models/Attendee');

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
const attendeeRoute = require('./routes/attendeeRoute');

app.use('/', attendeeRoute);

// Set up Error Handlers on App
app.use(error404Handler);
app.use(errorHandler);

// Start server
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});

module.exports = app;
