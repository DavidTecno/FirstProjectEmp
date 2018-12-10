var mongoose = require("mongoose");

var SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true},
    info: String,
    module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Subject", SubjectSchema);