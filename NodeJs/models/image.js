var mongoose = require("mongoose");

var ImageSchema = new mongoose.Schema({
    filename: String,
    created: {
        type: Date,
        default: Date.now
    },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
});

module.exports = mongoose.model("Image", ImageSchema);