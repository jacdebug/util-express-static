process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

chai.should();
chai.use(chaiHttp);

describe('Scenario: It should serve static files', () => {
  const setup = chai.request(server).get('/index.html');

  const successResponseTest = done => (err, res) => {
    res.should.have.status(200);
    res.body.should.be.a('object');
    if (done) done();
  };

  it('Should retrun index html file', done => {
    setup.end(successResponseTest(done));
  });
});
