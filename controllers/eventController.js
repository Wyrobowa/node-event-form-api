const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

// Models
const Event = mongoose.model('Event');

// Private
const checkValidationResults = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  }
};

// Public
const getEvents = async (req, res) => {
  const events = await Event.find().select('-_id -__v');

  res.json({
    title: 'Events list',
    data: events,
  });
};

const getEvent = async (req, res) => {
  const event = await Event.findOne({ slug: req.params.id }).select('-_id -__v');

  res.json({
    title: 'Event',
    data: event.toJSON(),
  });
};

const createEvent = async (req, res) => {
  checkValidationResults(req, res);

  const event = new Event(req.body);
  await event.save();

  res.json({
    title: 'Event',
    data: event,
  });
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
};
