var Subject = require("../models/subject");

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

  Module.findByIdAndUpdate(req.params.id, req.body, {new: true}, 
    
    (err, module) => {
      if (err)
        res.send(err);
  
      
  
        res.json(module);
      });
    
};



//Gets
//Get All
exports.allSubjects = function (req, res) {
    // Use the Subject model to find all subjects
    Subject.find(function (err, subject) {
        if (err){

            res.send(err);

        }

        res.json(subject);
    });
};

//Get One
exports.getSubject = function(req, res) {
    // Use the Subject model to find a specific subject
    Subject.findById(req.params.subject_id, function(err, subject) {
      if (err)
        res.send(err);
  
      res.json(subject);
    });
  };

//Put
exports.putSubjects = function(req, res) {
    // Use the Subject model to find a specific subject
    Subject.findById(req.params.subject_id, function(err, subject) {
      if (err)
        res.send(err);
  
      // Update the existing subject quantity
      subject.name = req.body.name;
  
      // Save the subject and check for errors
      subject.save(function(err) {
        if (err)
          res.send(err);
  
        res.json(subject);
      });
    });
  };

  //Delete
  exports.deleteSubjects = function(req, res) {
    // Use the Subject model to find a specific subject and remove it
    Subject.findByIdAndRemove(req.params.subject_id, function(err) {
      if (err)
        res.send(err);
  
      res.json({ message: 'Subject removed!' });
    });
  };