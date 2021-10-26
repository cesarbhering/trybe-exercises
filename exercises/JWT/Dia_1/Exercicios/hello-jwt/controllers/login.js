module.exports = async (req, res) => {
  const Joi = require('joi');
  const jwt = require("jsonwebtoken");
  const secret = "seusecretdetoken";

    const { username, password } = req.body;

    const schema = Joi.object().keys({
      username: Joi.string().min(5).required(),
      password: Joi.string().min(5).required(),
    });
   
    const joiValidate = schema.validate(req.body);
    if (joiValidate.error) {
      return res.status(422).json(joiValidate.error.details[0].message);
     }

    const jwtConfig = {
      expiresIn: "1h",
      algorithm: "HS256",
    };
    let token = {};
    if (username === "admin" && password === "s3nh4S3gur4???") {
      token = jwt.sign({ username, admin: true }, secret, jwtConfig);
    } else {
      token = jwt.sign({ username, admin: false }, secret, jwtConfig);
    };
    

    return res.status(200).json({ token });
  
};
