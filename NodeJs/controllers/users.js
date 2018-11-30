var User = require("../models/user");

//Post
exports.postUsers = function (req, res) {
  // Create a new instance of the User model
  var user = new User();

  // Set the user properties that came from the POST data
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;
  user.roles = ['5c0048994d6ba830675c8d22'];

  // Save the user and check for errors
  user.save(function (err) {
    if (err) {

      res.send(err);

    }
    res.json(user);
  });
};

//Gets
//Get All
exports.allUsers = function (req, res) {
  // Use the User model to find all users
  User.find(function (err, user) {
    if (err) {

      res.send(err);

    }

    res.json(user);
  });
};

//Get One
exports.getUser = function (req, res) {
  // Use the User model to find a specific user
  User.findById(req.params.id, function (err, user) {
    if (err)
      res.send(err);

    res.json(user);
  });
};

//Put
exports.putUsers = function (req, res) {
  // Use the User model to find a specific user
  User.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (err, user) => {
      if (err)
        res.send(err);



      res.json(user);
    });
};

//Delete
exports.deleteUsers = function (req, res) {
  // Use the User model to find a specific user and remove it
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'User removed!' });
  });
};