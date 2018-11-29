var mongoose = require("mongoose");

var SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
    info: String,
    images: [{
        filename: String,
        created: {
            type: Date,
            default: Date.now
        }

    }],
    videos: [{
        name: String,
        created: {
            type: Date,
            default: Date.now
        }

    }]
});

module.exports = mongoose.model("Subject", SubjectSchema);