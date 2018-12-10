var Subject = require("../models/subject");
var Module = require("../models/module");
var User = require('../models/user');

exports.postSubjects = function (req, res) {

  var subject = new Subject();

  // Set the subject properties that came from the POST data
  subject.name = req.body.name;
  subject.info = req.body.info;
  subject.user = req.body.userId;
  subject.module = req.body.moduleId;

  Module.findById(req.body.moduleId, (err, module) => {

    if (module.subjects == null) {
      
    } else {
      module.subjects.push(subject._id);

    }

    module.save(function (err) {
      if (err) {
        res.send(err);
      }
    
    });

  });

  User.findById(req.body.userId, (err, user) => {

    if (user.subjects == null) {

    } else {
      user.subjects.push(subject._id);

    }

    user.save(function (err) {
      if (err) {
        res.send(err);
      }
    
    });

    subject.save(function (err) {
      if (err) {
        res.send(err);
      }
     res.json({ message: 'Subject added to the Service!', data: subject });
      
    });
    

  });

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