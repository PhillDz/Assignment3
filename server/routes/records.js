let express = require("express")
let router = express.Router();
let mongoose = require("mongoose");
const videoRecord = require("../models/videoRecord");

// connect with videoRecord model
let records = require("../models/videoRecord")

// CRUD Operations

// Read Operation
router.get("/",(req,res,next)=>{
    records.find((err, videoRecord)=>{
        if(err)
        {
            return console.error(err);
        }
        else{
            res.render("records/records",{title:"videoRecords", records: videoRecord});
        }
    })
})

module.exports = router;

// Add Operation, get route for displaying the Add-page, post route for processing -- Create operation

router.get("/add",(req,res,next)=>{
    res.render("records/add", {title:"Add Record"})
});
router.post("/add",(req,res,next)=>{
    let newRecord = records ({
        "videoName":req.body.videoName,
        "date":req.body.date,
        "duration":req.body.duration
    });
    records.create(newRecord,(err,record) => {
        if(err)
        {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect("/records");
        }
    })
});

// Edit Operation, Get route for displaying on add-page, post route for displaying -- Update operation

router.get("/edit/:id",(req,res,next)=>{
    let id = req.params.id;
    records.findById(id,(err,recordEdit)=>{
        if(err)
        {
            console.log(err)
            res.end(err)
        } else
        {
            res.render("records/edit",{title:"Edit Record", record:recordEdit});
        }
    });
});
router.post("/edit/:id",(req,res,next)=>{
    let id=req.params.id;
    let updateRecord = records ({
        "_id":id,
        "videoName":req.body.videoName,
        "date":req.body.date,
        "duration":req.body.duration
    });
    records.updateOne({_id:id},updateRecord,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect("/records");
        }
    });
});

// Delete Operation, perform deletion -- Delete Operation

router.get("/delete/:id",(req,res,next)=>{
    let id = req.params.id;
    records.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect("/records");
        }
    })
});

