var mongoose = require("mongoose");

var SubjectSchema = new mongoose.Schema({
    name:  {type: String, required: true},
    username:  {type: String, required: true},
    info: String,
    img: [{
        type: String
    }],
    video: [{
        type: String
    }]
});

module.exports = mongoose.model("Subject", SubjectSchema);