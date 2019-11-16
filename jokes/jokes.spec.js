const jokes = require("./jokes-router.js");
const request = require("supertest");
//these are my jokes tests

describe("jokes", function() {
  describe("GET /", function() {
    it("returns 200 OK", () => {
      return request(jokes)
        .get("/")
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.body.api).toBe(response.data.results);
        });
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
// });
