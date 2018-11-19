var mongoose = require("mongoose");

var RoleSchema = new mongoose.Schema({
    role:  {type: String, required: true} 
})

module.exports = mongoose.model("Role", RoleSchema);