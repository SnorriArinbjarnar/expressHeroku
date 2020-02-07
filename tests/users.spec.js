process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('get users', () => {
    it('should return something', (done) => {
        chai.request(server)
        .get('/users')
        .end((err, res) => {
            res.should.have.status(200);
            done();
            
        });
    });
});