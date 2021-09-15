const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    username:String,
    password:String
});

var staffModel = mongoose.model("StaffData" , staffSchema);

module.exports = staffModel;