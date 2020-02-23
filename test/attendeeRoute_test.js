// eslint-disable-next-line no-unused-vars
const should = require('should');
const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

describe('GET /list', () => {
  it('return json response', (done) => {
    request
      .get('/list')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe('POST /add', () => {
  it('add data to db and return json response', (done) => {
    const data = {
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      eventDate: '2099-01-01',
      slug: 'testtestcom',
    };

    request
      .post('/add')
      .send(data)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.have.property('title', 'Attendee');
        res.body.data.should.have.property('firstName', 'test');
        res.body.data.should.have.property('lastName', 'test');
        res.body.data.should.have.property('email', 'test@test.com');
        res.body.data.should.have.property('eventDate', '2099-01-01T00:00:00.000Z');
        res.body.data.should.have.property('slug', 'testtestcom');
        res.body.data.should.have.property('_id');
        res.body.data.should.have.property('__v');

        return done();
      });
  });
});
