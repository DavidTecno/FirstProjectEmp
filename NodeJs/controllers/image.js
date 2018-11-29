var Subject = require("../models/subject");

exports.postImages = function (req, res) {

  var subject = new Subject();

  subject.images = [{filename: req.file.filename}];

  subject.videos = [{filename: req.file.filename}];

  // Save the subject and check for errors

  subject.save(function (err) {
    if (err) {
      res.send(err);
    }

    Subject.findById(req.body.subjectId, (err, subject) => {

        subject.images.push({filename: req.file.filename});
      

      subject.save((err) => {
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