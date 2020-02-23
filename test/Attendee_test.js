const assert = require('assert');
const Attendee = require('../models/Attendee');

describe('Attendee', () => {
  describe('Validation before save()', () => {
    it('Should pass validation without error just before saving in db', (done) => {
      const attendee = new Attendee({
        firstName: 'test',
        lastName: 'test',
        email: 'test@test.com',
        eventDate: '2099-01-01',
        slug: 'testtest.com',
      });
      attendee.validate((err) => {
        if (err) done(err);
        else done();
      });
    });
  });

  describe('save()', () => {
    it('Should be saved in db', (done) => {
      const attendee = new Attendee({
        firstName: 'test',
        lastName: 'test',
        email: 'test@test.com',
        eventDate: '2099-01-01',
        slug: 'testtest.com',
      });
      attendee
        .save()
        .then(() => {
          assert(!attendee.isNew);
          done();
        })
        .catch((error) => {
          done(error);
        });
    });
  });
});
