const mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    info:  String, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subjects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Subject'}]
});

module.exports = mongoose.model("Module", ModuleSchema);