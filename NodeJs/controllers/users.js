var User = require("../models/user");
var Subject = require("../models/subject");
var Module = require("../models/module");

//Post
exports.postUsers = function (req, res) {
  // Create a new instance of the User model
  var user = new User();

  // Set the user properties that came from the POST data
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;
  user.roles = ['5bf2f02ce06b0b4183c6bee4'];

  // Save the user and check for errors
  user.save(function (err) {
    if (err) {

      res.send(err);

    }

    Module.findById(req.body.moduleId, (err, module) => {

      if (module.user == null) {
        module.user = [user_id];
      } else {
        module.user.push(user._id);
      }

      module.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'User added to the Service!', data: user });
      });

    });

    Subject.findById(req.body.subjectId, (err, subject) => {

      if (subject.user == null) {
        subject.user = [user_id];
      } else {
        subject.user.push(user._id);
      }

      subject.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'User added to the Service!', data: user });
      });

    });

    
  });
};

//Gets
//Get All
exports.allUsers = function (req, res) {
  // Use the User model to find all users
  User.find(function (err, user) {
    if (err) {

      res.send(err);

    }

    res.json(user);
  });
};

//Get One
exports.getUser = function (req, res) {
  // Use the User model to find a specific user
  User.findById(req.params.id, function (err, user) {
    if (err)
      res.send(err);

    res.json(user);
  });
};

//Put
exports.putUsers = function (req, res) {
  // Use the User model to find a specific user
  User.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (err, user) => {
      if (err)
        res.send(err);



      res.json(user);
    });
};

//Delete
exports.deleteUsers = function (req, res) {
  // Use the User model to find a specific user and remove it
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'User removed!' });
  });
};