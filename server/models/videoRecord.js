let mongoose = require("mongoose");
// creates model for database on website
let videoRecord = mongoose.Schema({
    videoName: String,
    date: String,
    duration: String
},
{
    collection: "videoRecord"
})
module.exports = mongoose.model("videoRecord", videoRecord)

