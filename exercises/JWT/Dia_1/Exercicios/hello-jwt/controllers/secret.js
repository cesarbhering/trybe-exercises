module.exports = async (req, res) => {
  const jwt = require('jsonwebtoken');
  const secret = "seusecretdetoken";
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({
      message: 'No token provided.'
    });
  }
  try { 
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    if (decoded.admin === true) {
      return res.status(200).send({
        "secretInfo": "Peter Parker é o Homem-Arannha"
      });
    } else {
      return res.status(401).send({
        message: 'Not authorized.'
      });
    };
  } catch (err) {
    res.status(401).json({
      message: 'Invalid token.'
    });
  }

};
