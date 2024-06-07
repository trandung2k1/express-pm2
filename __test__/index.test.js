const request = require('supertest');
const app = require('..');

describe('GET /', () => {
    it('Response with Hello World!', (done) => {
        request(app).get('/').expect('Hello World!', done);
    });
});
