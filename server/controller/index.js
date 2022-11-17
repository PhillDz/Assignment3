let express = require('express');
let router = express.Router();
let mongoose = require("mongoose");
const videoRecord = require("../models/videoRecord");

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { 
      title: 'Home'
    });
};

/*module.exports.displayRecordsPage = (req, res, next) => {
    res.render('records/records', { 
      title: 'records',
    });*/
//}
