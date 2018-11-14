var mongoose = require("mongoose");
const Permits = require('../models/permit.js');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    permits: [{ type: Schema.Types.ObjectId, ref: 'Permits' }]
});

module.exports = mongoose.model("Users", UserSchema);