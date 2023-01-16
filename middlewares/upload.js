const multer = require('multer');

const multerConfig = multer.diskStorage({});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
