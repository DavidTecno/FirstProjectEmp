var Subject = require("../models/subject");
var Module = require("../models/module");
var User = require('../models/user');

exports.postSubjects = function (req, res) {

  var subject = new Subject();

  // Set the subject properties that came from the POST data
  subject.name = req.body.name;
  subject.info = req.body.info;

  Module.findById(req.body.moduleId, (err, module) => {

    if (subject.modules == null) {
      subject.modules = [module_id];
    } else {
      console.log(module._id);
      subject.modules.push(module._id);

    }

    subject.save(function (err) {
      if (err) {
        res.send(err);
      }
    
    });

  });

  User.findById(req.body.userId, (err, user) => {

    if (subject.user == null) {
      subject.user = [user_id];
    } else {
    subject.user.push(user._id);

    }

    subject.save(function (err) {
      if (err) {
        res.send(err);
      }
    
    });

  });

  // // Save the subject and check for errors
  // subject.save(function (err) {
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.json({ message: 'Subject added to the Service!', data: subject });

  // });
};

//Gets
//Get All
exports.allSubjects = function (req, res) {
  // Use the Subject model to find all subjects
  Subject.find(function (err, subject) {
    if (err) {

      res.send(err);

    }

    res.json(subject);
  });
};

//Get One
exports.getSubject = function (req, res) {
  // Use the Subject model to find a specific subject
  Subject.findById(req.params.id, function (err, subject) {
    if (err)
      res.send(err);

    res.json(subject);
  });
};

//Put
exports.putSubjects = function (req, res) {
  // Use the Subject model to find a specific subject
  Subject.findByIdAndUpdate(req.params.id, req.body, { new: true },

    (err, subject) => {
      if (err)
        res.send(err);

      res.json(subject);
    });

};

//Delete
exports.deleteSubjects = function (req, res) {
  // Use the Subject model to find a specific subject and remove it
  Subject.findByIdAndRemove(req.params.id, function (err) {
    if (err)
      res.send(err);


    res.json({ message: 'Subject removed!' });
  });
};