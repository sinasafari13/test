// test/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
   it('responds with Hello, world!', async () => {
request(app).get('/');
	   expect(response.text).toBE('Hello, world!');
   });
});
