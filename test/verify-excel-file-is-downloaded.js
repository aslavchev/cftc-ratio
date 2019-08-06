import {downloadFile} from '../lib/index.js';
import fs from 'fs';

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
    
    it('should check if cftc page return 200', done => {
        chai.request('https://www.cftc.gov/').get('dea/newcot/deafut.txt')
        .then(function (res) {
            expect(res).to.have.status(200);
            done();
        })
        .catch(function (err) {
            throw err;
        });
    });

    it('should download .csv file from cftc page', done => {
        const url = "https://www.cftc.gov/dea/newcot/deafut.txt";
        const destination = "cftcTest1.txt";
        
        downloadFile(url,destination)
        .then(function (res) {
            const fileExists = fs.existsSync(destination);
            expect(fileExists).to.be.true;
            done();
        })
        .catch(function (err) {
            throw err;
        });
    
    // TODO: Verify if file.size > 1 bites
    // TODO: Verify fs documentation how to read the downloaded file and manipulate its

    });
  });