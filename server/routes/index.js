let express = require('express');
let router = express.Router();
let indexController = require("../controller/index")

// GET home page => traverse there
router.get('/home', indexController.displayHomePage);

// Get record page => ruined my site so i commented it out
//router.get('/records', indexController.displayRecordsPage);

module.exports = router;
