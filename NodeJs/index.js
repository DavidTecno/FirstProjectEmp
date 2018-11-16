var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

//Controllers
var moduleController = require('./controllers/modules')
var subjectController = require('./controllers/subjects')

//Create a news routes with the prefix /...
var router = express.Router();

router.route('/modules')
  .post(moduleController.postModules)
  .get(moduleController.allModules);

  router.route('/modules/:id')
  .get(moduleController.allModules)
  .put(moduleController.putModules)
  .delete(moduleController.deleteModules);  

  //post subjects is put in modules 
  router.route('/subjects/:id')
  .post(subjectController.postSubjects);

mongoose.connect("mongodb://127.0.0.1:27017/ServiciosPedidos", {
    // usar para evitar problemas con el node
    useNewUrlParser: true
}).then(() => {
    console.log("hey");

});

router.get('/', function (res) {
    res.json({ message: 'This is the base of nodeJS' });
});

app.use("/api", router);

var port = 3000;

app.listen(port);

console.log('Insert module on port ' + port);