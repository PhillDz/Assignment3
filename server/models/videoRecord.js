let mongoose = require("mongoose");
// creates model for database on website
let videoRecord = mongoose.Schema({
    videoName: String, // Name of video is string
    date: String, // Date is a string
    duration: String // duration left as a string
},
{
    collection: "videoRecord" // db name
})
module.exports = mongoose.model("videoRecord", videoRecord)

