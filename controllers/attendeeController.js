const mongoose = require('mongoose');
const { validationResult } = require('express-validator');

// Models
const Attendee = mongoose.model('Attendee');

// Private
const checkValidationResults = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
  }
};

// Public
const getAttendies = async (req, res) => {
  const events = await Attendee.find().select('-_id -__v');

  res.json({
    title: 'Attendies list',
    data: events,
  });
};

const getAttendee = async (req, res) => {
  const event = await Attendee.findOne({ slug: req.params.id }).select('-_id -__v');

  res.json({
    title: 'Attendee',
    data: event.toJSON(),
  });
};

const createAttendee = async (req, res) => {
  checkValidationResults(req, res);

  console.log(req.body);

  const event = new Attendee(req.body);
  await event.save();

  res.json({
    title: 'Attendee',
    data: event,
  });
};

module.exports = {
  getAttendies,
  getAttendee,
  createAttendee,
};
