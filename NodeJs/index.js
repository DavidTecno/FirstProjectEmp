var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());

//Controllers
var moduleController = require('./controllers/modules')
var subjectController = require('./controllers/subjects')
var userController = require('./controllers/users')
var authController = require('./controllers/auth')

//Create a news routes with the prefix /...
var router = express.Router();

//..modules
router.route('/modules')
    .post(moduleController.postModules)
    .get(moduleController.allModules);

router.route('/modules/:id')
    .get(moduleController.allModules)
    .put(moduleController.putModules)
    .delete(moduleController.deleteModules);

//..subjects
//post subjects is put in modules 
router.route('/subjects')
    .get(subjectController.allSubjects);

router.route('/subjects/:id')
    .post(subjectController.postSubjects)
    .put(subjectController.putSubjects)
    .delete(subjectController.deleteSubjects);

//..users
router.route('/users/:id')
    .get(moduleController.allModules)
    .put(moduleController.putModules)
    .delete(moduleController.deleteModules);

router.route('/users')
    .post(authController.isAuthenticated, userController.postUsers)
    .get(authController.isAuthenticated, userController.allUsers);

mongoose.connect("mongodb://127.0.0.1:27017/ServiciosPedidos", {
    // usar para evitar problemas con el node
    useCreateIndex: true,
    useNewUrlParser: true
}).then(() => {
    console.log("acces confirm");

});

router.get('/', function (res) {
    res.json({ message: 'This is the base of nodeJS' });
});

app.use("/api", router);

var port = 3000;

app.listen(port);

console.log('Insert module on port ' + port);