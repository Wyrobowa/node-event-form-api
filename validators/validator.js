const { body } = require('express-validator/check');

const emailValidation = body('email')
  .isEmail()
  .withMessage('Email is not valid!');

const eventDateValidation = body('eventDate')
  .isISO8601()
  .withMessage('Event Date is in wrong date format!');

module.exports = {
  emailValidation,
  eventDateValidation,
};
