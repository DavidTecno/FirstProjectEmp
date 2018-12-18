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

  subject.save(function (err) {
    if (err) {
      res.send(err);
      return;
    }
   res.json({ message: 'Subject added to the Service!', data: subject });
    
  });

};

//Gets
//Get All
exports.allSubjects = function (req, res) {
  // Use the Subject model to find all subjects
  Subject.find(function (err, subject) {
    if (err) {

      res.send(err);
        return;

    }

    res.json(subject);
  });
};

//Get Subjects to one Module
exports.getSubjectModule = function (req, res) {
  // Use the Subject model to find all subjects in a module
  console.log("entra en subject module");
  Subject.find({module: req.params.moduleId}, function (err, subject) {
    if (err) {

      res.send(err);
        return;
    }

    res.json(subject)
  });
};


//Get Subjects to one user in module
exports.getSubjectUser = function (req, res) {
  // Use the Subject model to find all subjects of a user
  console.log("entra en subject user");
  Subject.find({module: req.params.moduleId, user: req.params.userId}, function (err, subject) {
    if (err) {

      res.send(err);
        return;

    }

    res.json(subject);
  });
};

exports.getSubject = function (req, res) {
  // Use the Subject model to find a specific subject
  Subject.findById(req.params.id, (err, subject) => {
      if (err){
        res.send(err);
        return;
      }
      res.json(subject);
    });

}

//Put
exports.putSubjects = function (req, res) {
  // Use the Subject model to find a specific subject
  Subject.findByIdAndUpdate(req.params.id, req.body, { new: true },

    (err, subject) => {
      if (err){
        res.send(err);
        return;
      }

      res.json(subject);
    });

};

//Delete
exports.deleteSubjects = function (req, res) {
  // Use the Subject model to find a specific subject and remove it
  Subject.findByIdAndRemove(req.params.id, function (err) {
    if (err){
      res.send(err);
        return;
    }

    res.json({ message: 'Subject removed!' });
  });
};