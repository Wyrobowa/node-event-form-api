const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  eventDate: {
    type: Date,
    required: true,
    min: new Date(),
  },
});

module.exports = mongoose.model('Event', EventSchema);
