const express = require('express');

// Controllers
const {
  getEvents,
  getEvent,
  createEvent,
} = require('../controllers/eventController');

// Middlewares
const { catchErrors } = require('../middlewares/errorHandler');

const router = express.Router();

/**
 * Get Events list
 *
 * @name getEvents
 * @route {GET} /events
 * is asynchronous
 */
router.get('/events', catchErrors(getEvents));

/**
 * Get Event by id
 *
 * @name getEvent
 * @route {GET} /event/:id
 * is asynchronous
 */
router.get('/event/:id', catchErrors(getEvent));

/**
 * Create new Event
 *
 * @name createEvent
 * @route {POST} /event
 * is asynchronous
 */
router.post('/event', catchErrors(createEvent));

module.exports = router;
