
const mongoose = require('mongoose');
//const Subject = require('../models/subject.js');

var ModuleSchema = new mongoose.Schema({
    name: String,
    info: String,
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
});

// var SubjectSchema = new mongoose.Schema({
//     name: String,
//     username: String,
//     info: String,
//     img: [{
//         type: String
//     }],
//     video: [{
//         type: String
//     }]
// })

module.exports = mongoose.model("Module", ModuleSchema);
// module.exports = mongoose.model("Subject", SubjectSchema);