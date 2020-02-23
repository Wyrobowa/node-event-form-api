const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.Promise = global.Promise;

const mongoConnectOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.TEST_DATABASE, mongoConnectOptions);
mongoose.connection
  .once('open', () => console.log('Connected!'))
  .on('error', (error) => {
    console.warn('Error : ', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.attendees.drop(() => {
    done();
  });
});
