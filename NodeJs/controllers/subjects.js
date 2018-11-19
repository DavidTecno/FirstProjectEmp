var Subject = require("../models/subject");
var Module = require("../models/module");

//Post
// exports.postSubjects = function (req, res) {
//     // Create a new instance of the Subject model
//     var subject = new Subject();

//     // Set the subject properties that came from the POST data
//     subject.name = req.body.name;
//     subject.info = req.body.info;

//     // Save the subject and check for errors
//     subject.save(function (err) {
//         if (err){

//             res.send(err);

//         }

//         res.json({ message: 'Subject added to the Service!', data: subject });
//     });
// };

exports.postSubjects = function (req, res) {

  var subject = new Subject();

  // Set the subject properties that came from the POST data
  subject.name = req.body.name;
  subject.info = req.body.info;

  // Save the subject and check for errors

  subject.save(function (err) {
    if (err) {
      res.send(err);
    }

    Module.findById(req.params.id, (err, module) => {

      if (module.subjects == null) {
        module.subjects = [subject_id];
      } else {
        module.subjects.push(subject._id);
      }

      module.save((err) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Subject added to the Service!', data: subject });
      });

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