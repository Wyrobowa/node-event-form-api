const express = require('express');
const { check, validationResult } = require('express-validator');

// Controllers
const {
  getEvents,
  getEvent,
  createEvent,
} = require('../controllers/eventController');

// Middlewares
const { catchErrors } = require('../middlewares/errorHandlers');

// Validators
const { emailValidation, eventDateValidation } = require('../validators/validator');

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
router.post('/event', [emailValidation], catchErrors(createEvent));

module.exports = router;
