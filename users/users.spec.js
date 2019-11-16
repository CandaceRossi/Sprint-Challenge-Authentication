const users = require("./users-router.js");

const db = require("../database/dbConfig.js");

const { add } = require("./users-model.js");

describe("users model", function() {
  describe("add()", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should add a users", async function() {
      await add({ username: "clyde" });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });

    it("should insert the provided user", async function() {
      await add({ username: "clyde" });
      const users = await db("users");
      expect(users).toHaveLength(1);
      expect(users[0]).username.toBe("clyde");
    });

    it("should return the inserted user", async function() {
      let users = await add({ username: "clyde" });
      expect(users.username).toBe("clyde");
      expect(users.id).toBeDefined();
    });
  });
});
