const express = require('express');

// Controllers
const {
  getAttendies,
  getAttendee,
  createAttendee,
} = require('../controllers/AttendeeController');

// Middlewares
const { catchErrors } = require('../middlewares/errorHandlers');

// Validators
const { emailValidation, eventDateValidation } = require('../validators/validator');

const router = express.Router();

/**
 * Get Attendies list
 *
 * @name getAttendies
 * @route {GET} /list
 * is asynchronous
 */
router.get('/list', catchErrors(getAttendies));

/**
 * Get Attendee by id
 *
 * @name getAttendee
 * @route {GET} /attendee/:id
 * is asynchronous
 */
router.get('/Attendee/:id', catchErrors(getAttendee));

/**
 * Create new Attendee
 *
 * @name createAttendee
 * @route {POST} /add
 * is asynchronous
 */
router.post('/add', [emailValidation, eventDateValidation], catchErrors(createAttendee));

module.exports = router;
