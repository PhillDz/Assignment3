let express = require('express');
let router = express.Router();
let indexController = require("../controller/index")

// GET home page
router.get('/home', indexController.displayHomePage);

// Get record page
//router.get('/records', indexController.displayRecordsPage);

module.exports = router;
