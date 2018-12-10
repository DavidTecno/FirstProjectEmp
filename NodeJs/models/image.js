var mongoose = require("mongoose");

var ImageSchema = new mongoose.Schema({
    filename: String,
    created: {
        type: Date,
        default: Date.now
    },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }
});

module.exports = mongoose.model("Image", ImageSchema);