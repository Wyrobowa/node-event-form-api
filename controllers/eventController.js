const mongoose = require('mongoose');

// Models
const Event = mongoose.model('Event');

const getEvents = async (req, res) => {
  const events = await Event.find();

  res.json({
    title: 'Events list',
    data: events,
  });
};

const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);

  res.json({
    title: 'Event',
    data: event,
  });
};

const createEvent = async (req, res) => {
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
