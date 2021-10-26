module.exports = (req, res) => {
  const multer = require("multer");
  const fs = require("fs");

  const fileExists = (fileName) => {
    const files = fs.readdirSync(`${__dirname}/../uploads`);
    return files.some((file) => file === fileName);
  };

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + "/../uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
      if (file.mimetype !== "image/png") {
        return cb(new Error("Extension must be `png`"), false);
      }
      if (fileExists(file.originalname)) {
        req.fileDuplicated = true;
        return cb(new Error("File already exists"), false);
      }
      cb(null, true);
    },
  });

  upload.single("file")(req, res, function (err) {
    if (err) {
      return res.status(500).json(err.message);
    }
    return res.status(200).send(req.file);
  });
};
