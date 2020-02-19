const express = require('express');

const {
  getEvents,
  getEvent,
  createEvent,
} = require('../controllers/eventController');

const router = express.Router();

/**
 * Get Events list
 *
 * @name getEvents
 * @route {GET} /events
 * is asynchronous
 */
router.get('/events', getEvents);

/**
 * Get Event by id
 *
 * @name getEvent
 * @route {GET} /event/:id
 * is asynchronous
 */
router.get('/event/:id', getEvent);

/**
 * Create new Event
 *
 * @name createEvent
 * @route {POST} /event
 * is asynchronous
 */
router.post('/event', createEvent);

module.exports = router;
