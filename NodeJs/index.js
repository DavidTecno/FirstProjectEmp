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

//Create a news routes with the prefix /...
var router = express.Router();

router.route('/modules')
  .post(moduleController.postModules)
  .get(moduleController.allModules)
  .put(moduleController.putModules)
  .delete(moduleController.deleteModules);  

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