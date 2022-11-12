const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//specify where to find the schema
const Patient = require('./models/patient')
//connect and display the status 
mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

//in the app.get() method below we add a path for the patients API 
//by adding /patients, we tell the server that this method will be called every time http://localhost:8000/patients is requested. 
app.get('/patients', (req, res, next) => {

    //call mongoose method find (MongoDB db.Patients.find())
    Patient.find()
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });


});
app.post('/patients', (req, res, next) => {
    // create a new patient variable and save request’s fields 
    const patient = new Patient({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        phoneNumber: req.body.phoneNumber,
        maritalStatus: req.body.maritalStatus,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        primaryInsurance: req.body.primaryInsurance,
        groupNumber: req.body.groupNumber,
        idNumber: req.body.idNumber,
        socialSecurityNumber: req.body.socialSecurityNumber,
        relationship: req.body.relationship
    });
    //send the document to the database 
    patient.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error: ' + err); });
});

//to use this middleware in other parts of the application
module.exports = app;
