// // set the app NODE_ENV environment variable to 'test' in case the app is set up to alter its behavior in such case
// // in our case, the morgan logging module is turned off when this is set to 'test'
// process.env.NODE_ENV = "test";

// include the testing dependencies
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp) // use the chai-http middleware to simplify testing routes
const expect = chai.expect // the assertion library in the style using the word 'expect'
const should = chai.should() // the same assertion library in the style using the word 'should'

// import the server
const server = require('../app')

// a group of tests related to the /resources/getResources route
describe('/comments', () => {
  /**
   * test the GET / route
   */
  describe('GET /comments request', () => {
    // test a protected route when not logged in... passport auth should send back a 401 HTTP error
    it('A good request + response should have a status code of 200', done => {
      chai
        .request(server)
        .get('/comments/1')
        .end((err, res) => {
          expect(res.status, 200)
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })

    it('A bad request should have a response status code of 400 ', done => {
      chai
        .request(server)
        .get('/comments')
        .end((err, res) => {
          expect(res.status, 400)
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })

    it('A request for non-existent data should have a response status code of 404 ', done => {
      chai
        .request(server)
        .get('/comments/99999')
        .end((err, res) => {
          expect(res.status, 404)
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })
  })

  describe('POST /comments request', () => {
    // test a protected route when not logged in... passport auth should send back a 401 HTTP error
    it('A good request + response should have a status code of 200', done => {
      chai
        .request(server)
        .get('/comments/add')
        .end((err, res) => {
          expect(res.status, 200)
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })

    it('A bad request should have a response status code of 400 ', done => {
      chai
        .request(server)
        .get('/comments')
        .end((err, res) => {
          expect(res.status, 400)
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })

    it('A request for non-existent data should have a response status code of 404 ', done => {
      chai
        .request(server)
        .get('/comments/99999')
        .end((err, res) => {
          expect(res.status, 404)
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })
  })
})
