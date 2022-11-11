// // set the app NODE_ENV environment variable to 'test' in case the app is set up to alter its behavior in such case
// // in our case, the morgan logging module is turned off when this is set to 'test'
// process.env.NODE_ENV = "test";

// include the testing dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp); // use the chai-http middleware to simplify testing routes
const expect = chai.expect; // the assertion library in the style using the word 'expect'
const should = chai.should(); // the same assertion library in the style using the word 'should'

// import the server
const server = require("../app");

// a group of tests related to the /resources/getResources route
describe("/resource", () => {
  /**
   * test the GET / route
   */
  describe("GET /resource request", () => {
    // test a protected route when not logged in... passport auth should send back a 401 HTTP error
    it("A good request + response should have a status code of 200", done => {
        chai
          .request(server)
          .get("/resource/2")
          .end((err, res) => {
              expect(res.status, 200);
            // res.json.should.be.a("object") // our route sends back an object
            // res.json.should.have.keys("id", "name", "address", "printer", "wifi", "study", "description", "rating", "comments") 
            // expect(res.body).to.have.deep.property("user.id", 1) // check for exact value of a nested value
            // expect(res.body).to.have.deep.property("user.username") // check for existence of a nested value
  
            done(); // resolve the Promise that these tests create so mocha can move on
        });
    });

    it("A bad request should have a response status code of 400 ", done => {
        chai
          .request(server)
          .get("/resource")
          .end((err, res) => {
              expect(res.status, 400);
            done(); // resolve the Promise that these tests create so mocha can move on
        });
    });

    it("A request for non-existent data should have a response status code of 404 ", done => {
      chai
        .request(server)
        .get("/resource/1209")
        .end((err, res) => {
            expect(res.status, 404);
          done(); // resolve the Promise that these tests create so mocha can move on
      });
  });
  });
});