let chai = require("chai");
let chaiHttp = require("chai-http");
var should = chai.should();
chai.use(chaiHttp);
let server = require("../index");

describe("Podcast", () => {
    describe("/GET health check", () => {
        it("it should GET API health check", (done) => {
        chai.request(server)
          .get("/healthcheck")
          .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a("string");
                done();
             });
          });
     });

     describe("/GET detail", () => {
        it("it should GET API details", (done) => {
        chai.request(server)
          .get("/detail")
          .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a("string");
                done();
             });
          });
     });
});