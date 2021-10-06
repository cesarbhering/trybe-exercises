function validateUsername(req, res, next) {
  const { username } = req.body;
  if (!username || username.length <= 3)
    return res.status(400).json({ message: "invalid data" });
  next();
}

function validateEmail(req, res, next) {
  const { email } = req.body;
  if (!email || !email.includes("@") || !email.includes(".com"))
    return res.status(400).json({ message: "invalid data" });
  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;
  if (
    password.length < 4 ||
    password.length > 8 ||
    !String(password).match(passwordRegex)
  )
    return res.status(400).json({ message: "invalid data" });
  next();
}

module.exports = { validateUsername, validateEmail, validatePassword };
