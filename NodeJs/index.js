var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var app = express();

//App
app.use("/api", router);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

var port = 3000;

app.listen(port);

console.log('Insert module on port ' + port);

//models
var Subject = require("./models/subject");
//var Permits = require("./models/permit"); 
//var Users = require("./models/user"); 
var Module = require("./models/module");

//Create a news routes with the prefix /...
var router = express.Router();
var modulesRoute = router.route('/modules');
var subjectRoute = router.route('/subjects');

mongoose.connect("mongodb://127.0.0.1:27017/ServiciosPedidos", {
    // usar para evitar problemas con el node
    useNewUrlParser: true
}).then(() => {
    console.log("hey");

});

router.get('/', function (req, res) {
    res.json({ message: 'This is the base of nodeJS' });
});

//Modules

    //Post
    modulesRoute.post(function (req, res) {
        // Create a new instance of the Module model
        console.log("asd");
        var module = new Module();

        console.log(req.body.name);

        // Set the module properties that came from the POST data
        module.name = req.body.name;
        module.info = req.body.info;

        console.log(module.name);

        // Save the module and check for errors
        module.save(function (err) {
            if (err){

                res.send(err);

            }

            res.json({ message: 'Module added to the Service!', data: module });
        });
    });

    //Gets
    //Get All
    modulesRoute.get(function (req, res) {
        // Use the Module model to find all modules
        Module.find(function (err, module) {
            if (err)
                res.send(err);

            res.json(module);
        });
    });

    //Get One

    //Put
    modulesRoute.put(function(req, res) {
        // Use the Module model to find a specific module
        Module.findById(req.params.module_id, function(err, module) {
          if (err)
            res.send(err);
      
          // Update the existing module quantity
          module.name = req.body.name;
      
          // Save the module and check for errors
          module.save(function(err) {
            if (err)
              res.send(err);
      
            res.json(module);
          });
        });
      });

    //Subjects

    //Post
    subjectRoute.post(function (req, res) {
        // Create a new instance of the Subject model
        var subject = new Subject();

        // Set the subject properties that came from the POST data
        subject.name = req.body.name;
        subject.info = req.body.info;

        // Save the subject and check for errors
        subject.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Module added to the Service!', data: subject });
        });
    });   

    //Gets
    //Get All
    subjectRoute.get(function (req, res) {
        // Use the Subject model to find all subject
        Subject.find(function (err, subject) {
            if (err)
                res.send(err);


            res.json(subject);

        });
    });

    //Get One

    //Put
    subjectRoute.put(function(req, res) {
        // Use the Module model to find a specific module
        Subject.findById(req.params.module_id, function(err, subject) {
          if (err)
            res.send(err);
      
          // Update the existing module quantity
          subject.name = req.body.name;
      
          // Save the module and check for errors
          subject.save(function(err) {
            if (err)
              res.send(err);
      
            res.json(subject);
          });
        });
      });
