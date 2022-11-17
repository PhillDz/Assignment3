let express = require("express") // express keyword is requires express
let router = express.Router(); // router keyword is express
let mongoose = require("mongoose"); // variable mongoose requires mongoose
const videoRecord = require("../models/videoRecord"); // construct videorecord 

// connect with videoRecord model
let records = require("../models/videoRecord")

// CRUD Operations

// Read Operation
router.get("/",(req,res,next)=>{
    records.find((err, videoRecord)=>{ // find videoRecords
        if(err)
        {
            return console.error(err); // if an error occurs go to error page
        }
        else{
            res.render("records/records",{title:"videoRecords", records: videoRecord}); // else => renders records webpage
        }
    })
})

module.exports = router;

// Add Operation, get route for displaying the Add-page, post route for processing -- Create operation

router.get("/add",(req,res,next)=>{
    res.render("records/add", {title:"Add Record"}) // render add.ejs when user goes to /add
});
router.post("/add",(req,res,next)=>{
    let newRecord = records ({
        "videoName":req.body.videoName, // requires videoName
        "date":req.body.date, // requires date
        "duration":req.body.duration // requires duration
    });
    records.create(newRecord,(err,record) => { // create a new record in the add page
        if(err) // if error occurs then log in console the error and response
        {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect("/records"); // if no error, redirect back to records webpage
        }
    })
});

// Edit Operation, Get route for displaying on add-page, post route for displaying -- Update operation

router.get("/edit/:id",(req,res,next)=>{ // to edit page with id after /edit/
    let id = req.params.id;
    records.findById(id,(err,recordEdit)=>{
        if(err) // if error occurs, post error on console and response
        {
            console.log(err)
            res.end(err)
        } else
        {
            res.render("records/edit",{title:"Edit Record", record:recordEdit}); // if no error render the edit webpage
        }
    });
});
router.post("/edit/:id",(req,res,next)=>{ // post new data in form from edit page
    let id=req.params.id;
    let updateRecord = records ({ //update record needs an id, videoName, date, duration
        "_id":id,
        "videoName":req.body.videoName,
        "date":req.body.date,
        "duration":req.body.duration
    });
    records.updateOne({_id:id},updateRecord,(err)=>{
        if(err) // if error occurs write error into console, response
        {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect("/records"); // if no error then go back to records webpage
        }
    });
});

// Delete Operation, perform deletion -- Delete Operation

router.get("/delete/:id",(req,res,next)=>{ // delete webpage and add id after 
    let id = req.params.id;
    records.deleteOne({_id:id},(err)=>{ // deleteOne from mongodb to delete the 
        if(err)
        {
            console.log(err); // write error into console
            res.end(err); //response
        }
        else {
            res.redirect("/records"); // if no errors redirect to records webpage
        }
    })
});

