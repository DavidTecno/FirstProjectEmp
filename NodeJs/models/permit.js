var mongoose = require("mongoose");

var PermitSchema = new mongoose.Schema({
    role: String
})

module.exports = mongoose.model("Permits", PermitSchema);