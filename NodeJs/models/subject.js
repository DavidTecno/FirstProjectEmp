var mongoose = require("mongoose");

var SubjectSchema = new mongoose.Schema({
    name: String,
    username: String,
    info: String,
    img: [{
        type: String
    }],
    video: [{
        type: String
    }]
    //schema[{collections: ...}]
});

module.exports = mongoose.model("Subject", SubjectSchema);