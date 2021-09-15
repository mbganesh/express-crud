var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const staffModel = require("../models/staff.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Staff Router works");
});

router.get("/add-one", function (req, res, next) {
   
  let newStaff = new staffModel({
    username: "durai",
    password: "dd123",
  });
  newStaff.save(function(err , newStaff ){
       console.log(req.body)
      if(err){
          res.send(err)
      }else{
          res.json({status:200,message:"Staff Added" , staffObject:newStaff});
      }
  })
});



router.post("/add", function (req, res, next) {
    let newStaff = new staffModel({
      username: req.body.username,
      password: req.body.password,
    });
    newStaff.save(function(err , newStaff ){
        if(err){
            res.send(err)
        }else{
            res.json({status:200,message:"Staff Added" , staffObject:newStaff});
        }
    })
  });

module.exports = router;
