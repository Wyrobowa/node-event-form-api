const assert = require('assert');
const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

describe('Check server', () => {
  it('should be callable', () => {
    assert.equal(typeof app, 'function');
  });

  it('should 404 without routes', (done) => {
    request
      .get('/')
      .expect(404, done);
  });

  it('should listen on port 9999', (done) => {
    const server = app.listen(9999, () => {
      server.close();
      done();
    });
  });
});
