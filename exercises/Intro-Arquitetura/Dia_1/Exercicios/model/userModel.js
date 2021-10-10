const connection = require("./connection");
const { ObjectId } = require("mongodb");
const rescue = require("express-rescue"); // Tentar entender mais como funciona o rescue!

const validateUserInfo = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName) {
    return res.status(201).json({
      error: true,
      message: "O campo 'firstName' deve ser preenchido",
    });
  }
  if (!lastName) {
    return res.status(201).json({
      error: true,
      message: "O campo 'firstName' deve ser preenchido",
    });
  }
  if (!email) {
    return res.status(201).json({
      error: true,
      message: "O campo 'firstName' deve ser preenchido",
    });
  }
  if (!password || password.length < 6) {
    return res.status(201).json({
      error: true,
      message:
        "O campo 'password' deve ser preenchido e ter ao menos 3 caracteres",
    });
  }
  next();
};

const createNewUser = async (firstName, lastName, email, password) => {
  return connection().then((db) =>
    db
      .collection("users")
      .insertOne({ firstName, lastName, email, password })
      .then((result) => ({ id: result.insertedId, firstName, lastName, email }))
  );
};

const getAllUsers = async () => {
  return connection().then((db) => db.collection("users").find().toArray());
};

const getUserById = (id) => {
  const user = connection()
    .then((db) => db.collection("users").findOne({ _id: ObjectId(id) }))
    .catch((err) => null);
  return user;
};

const updateUserById = (id, updatedData) => {
  const userId = ObjectId(id);
  return connection()
    .then((db) =>
      db
        .collection("users")
        .findOneAndUpdate(
          { _id: userId },
          { $set: updatedData },
          { returnOriginal: false }
        )
    )
    .then((result) => result.value);
};

module.exports = {
  validateUserInfo,
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
};
