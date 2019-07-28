var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('CFTC repors tests', () => {
    const expect = chai.expect;
    it('should check if application is working', done => {
        chai.request('http://127.0.0.1:1337').get('/')
        .then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
        .catch(function (err) {
            throw err;
        });
    });
    it.only('should check if cftc page return 200', done => {
        chai.request('https://www.cftc.gov/dea/newcot/deafut.txt').get('/')
        .then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
        .catch(function (err) {
            throw err;
        });
    });
  });