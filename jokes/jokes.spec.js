const request = require("supertest");

const jokes = require("./jokes-router.js");

//these are my jokes tests

describe("jokes", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(jokes)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON formatted response", function() {
      return request(jokes)
        .get("/")
        .then(res => {
          expect(res.type).toBe("https://icanhazdadjoke.com/search");
        });
    });
  });
});
