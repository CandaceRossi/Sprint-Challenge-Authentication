/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

module.exports = function restricted(req, res, next) {
  let { username, password } = req.headers;

  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ you: "shall not pass!" });
  }
};
