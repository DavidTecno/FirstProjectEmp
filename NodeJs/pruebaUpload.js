//prueba de subida de imagenes

/*var express = require("express");
var fileUpload = require('express-fileupload');
var app = express();

var router = express.router();

app.use(fileUpload());

app.post('/upload', (req,res) => {
    let EDFile = req.files.file
    EDFile.mv(`./files/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
});

var port = 3000;

app.listen(port);*/