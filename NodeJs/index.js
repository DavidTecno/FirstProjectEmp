var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var passport = require('passport');
var multer = require('multer');
var cors = require('cors');

var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());

//Uploads Images
var Upload_Path = "uploads";

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, Upload_Path);
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now());
    }
});

let upload = multer({ storage: storage});

app.use(cors());

//Controllers
var moduleController = require('./controllers/modules')
var subjectController = require('./controllers/subjects')
var userController = require('./controllers/users')
var authController = require('./controllers/auth')
var imageController = require('./controllers/images')


//Create a news routes with the prefix /...
var router = express.Router();

//..modules
router.route('/modules')
    .post(authController.isAuthenticated, moduleController.postModules)
    .get(authController.isAuthenticated, moduleController.allModules);

router.route('/modules/:id')
    .get(authController.isAuthenticated, moduleController.allModules)
    .put(authController.isAuthenticated, moduleController.putModules)
    .delete(authController.isAuthenticated, moduleController.deleteModules);

//..subjects
//post subjects is put in modules 
router.route('/subjects')
    .get(authController.isAuthenticated, subjectController.allSubjects)
    .post(authController.isAuthenticated, subjectController.postSubjects);

router.route('/subjects/:id')
    .put(authController.isAuthenticated, subjectController.putSubjects)
    .delete(authController.isAuthenticated, subjectController.deleteSubjects);

//..users
router.route('/users/:id')
    .get(authController.isAuthenticated, moduleController.allModules)
    .put(authController.isAuthenticated, moduleController.putModules)
    .delete(authController.isAuthenticated, moduleController.deleteModules);

router.route('/users')
    .post(authController.isAuthenticated, userController.postUsers)
    .get(authController.isAuthenticated, userController.allUsers);

//image
router.route('/images')
    .post(authController.isAuthenticated, upload.single('image'), imageController.postImages)
    .get(authController.isAuthenticated, imageController.allImages);

router.route('/images/:id')
    .get(authController.isAuthenticated, imageController.getImage)
    .delete(authController.isAuthenticated, imageController.deleteImage);

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