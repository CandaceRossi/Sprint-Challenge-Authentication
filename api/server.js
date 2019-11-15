const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const jokesRouter = require("../jokes/jokes-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

const sessionConfig = {
  name: "monkey",
  secret: "keep it secret",
  cookie: {
    maxAge: 1000 * 30,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/auth", authRouter);
server.use("/api/jokes", authenticate, jokesRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).json("Sprint for the WIN!");
});

server.post("/hash", (req, res) => {
  const password = req.body.password;

  const hash = bcrypt.hashSync(password, 8);

  res.status(200).json({ password, hash });
});

module.exports = server;
