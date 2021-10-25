module.exports = async (req, res) => {
  const jwt = require('jsonwebtoken');
  const secret = "seusecretdetoken";
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({
      message: 'No token provided.'
    });
  }

  try { 
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    res.status(200).json({"username": decoded.username, "admin": decoded.admin});
  } catch (err) {
    res.status(500).json({
      message: 'Invalid token.'
    });
  }
};
