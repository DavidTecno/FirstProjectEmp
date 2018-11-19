var Module = require("../models/module");
//var Subject = require("../models/subject");

//Post
exports.postModules = function (req, res) {
  // Create a new instance of the Module model
  var module = new Module();

  // Set the module properties that came from the POST data
  module.name = req.body.name;
  module.info = req.body.info;
  module.subjects = [];

  // Save the module and check for errors
  module.save(function (err) {
    if (err) {

      res.send(err);

    }

    res.json({ message: 'Module added to the Service!', data: module });
  });
};

//Gets
//Get All
exports.allModules = function (req, res) {
  // Use the Module model to find all modules
  Module.find(function (err, module) {
    if (err) {

      res.send(err);

    }

    res.json(module);
  });
};

//Get One
exports.getModule = function (req, res) {
  // Use the Module model to find a specific module
  Module.findById(req.params.id, function (err, module) {
    if (err)
      res.send(err);

    res.json(module);
  });
};

//Put
exports.putModules = function (req, res) {
  // Use the Module model to find a specific module
  Module.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (err, module) => {
      if (err)
        res.send(err);



      res.json(module);
    });
};

//Delete
exports.deleteModules = function (req, res) {
  // Use the Module model to find a specific module and remove it
  Module.findByIdAndRemove(req.params.id, function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'Module removed!' });
  });
};