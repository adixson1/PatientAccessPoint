const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
//specify where to find the schema
const Patient = require('./models/patient')
const Appointment= require('./models/appointment')
const Doctor= require('./models/doctor')
const Disease=require('./models/disease')

//connect and display the status 
mongoose.connect('mongodb+srv://ayara:it6203@cluster0.jgduy0z.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connected"); })
    .catch(() => { console.log("error connecting"); });

//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); //allowable methods
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

//find a patient based on the id
app.get('/patients/:id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.patients.findOne())
    Patient.findOne({_id: req.params.id}) 
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
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

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/patients/:id", (req, res, next) => {
    Patient.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

//serve incoming put requests to /appointments 
app.put('/appointments/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        //find a document and set new first and last names 
        Appointment.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                firstName : req.body.firstName, 
                lastName : req.body.lastName 
            }}, 
            {new:true} 
        ) 
        .then((appointment) => { 
            if (appointment) { //what was updated 
                console.log(appointment); 
            } else { 
                console.log("no data exist for this id"); 
            } 
        }) 
        .catch((err) => { 
            console.log(err); 
        }); 
    } else { 
        console.log("please provide correct id"); 
    } 
});


//in the app.get() method below we add a path for the patients API 
//by adding /patients, we tell the server that this method will be called every time http://localhost:8000/patients is requested. 
app.get('/appointments', (req, res, next) => {

    //call mongoose method find (MongoDB db.Patients.find())
    Appointment.find()
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });
//find a appointment based on the id
app.get('/appointments/:id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.appointments.findOne())
    Appointment.findOne({_id: req.params.id}) 
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
});

});
app.post('/appointments', (req, res, next) => {
    // create a new appointment variable and save request’s fields 
    const appointment = new Appointment({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        appointmentDate: req.body.appointmentDate,
        selectDepartment: req.body.selectDepartment,
        selectDoctor: req.body.selectDoctor,
        messageOptional: req.body.messageOptional

    });
    //send the document to the database 
    appointment.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error: ' + err); });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/appointments/:id", (req, res, next) => {
    Appointment.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});
//serve incoming put requests to /appointments 
app.put('/appointments/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        //find a document and set new first and last names 
        Appointment.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                firstName : req.body.firstName, 
                lastName : req.body.lastName 
            }}, 
            {new:true} 
        ) 
        .then((appointment) => { 
            if (appointment) { //what was updated 
                console.log(appointment); 
            } else { 
                console.log("no data exist for this id"); 
            } 
        }) 
        .catch((err) => { 
            console.log(err); 
        }); 
    } else { 
        console.log("please provide correct id"); 
    } 
});

//in the app.get() method below we add a path for the patients API 
//by adding /patients, we tell the server that this method will be called every time http://localhost:8000/patients is requested. 
app.get('/doctors', (req, res, next) => {

    //call mongoose method find (MongoDB db.Patients.find())
    Doctor.find()
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });


});

app.get('/doctors/:id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.doctors.findOne())
    Doctor.findOne({_id: req.params.id}) 
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
});
app.post('/doctors', (req, res, next) => {
    // create a new patient variable and save request’s fields 
    const doctor = new Doctor({
        firstName1: req.body.firstName1,
        lastName1: req.body.lastName1,
        email1: req.body.email1,
        phoneNumber1: req.body.phoneNumber1,
        symptoms: req.body.symptoms,
        reasonForVisit: req.body.reasonForVisit,
        doctor: req.body.doctor
    });
    //send the document to the database 
    doctor.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error: ' + err); });
});

app.delete("/doctors/:id", (req, res, next) => {
    Doctor.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

app.put('/doctors/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        //find a document and set new first and last names 
        Doctor.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                firstName : req.body.firstName, 
                lastName : req.body.lastName 
            }}, 
            {new:true} 
        ) 
        .then((doctor) => { 
            if (doctor) { //what was updated 
                console.log(doctor); 
            } else { 
                console.log("no data exist for this id"); 
            } 
        }) 
        .catch((err) => { 
            console.log(err); 
        }); 
    } else { 
        console.log("please provide correct id"); 
    } 
});

//in the app.get() method below we add a path for the patients API 
//by adding /patients, we tell the server that this method will be called every time http://localhost:8000/patients is requested. 
app.get('/diseases', (req, res, next) => {

    //call mongoose method find (MongoDB db.Patients.find())
    Disease.find()
        //if data is returned, send data as a response 
        .then(data => res.status(200).json(data))
        //if error, send internal server error
        .catch(err => {
            console.log('Error: ${err}');
            res.status(500).json(err);
        });


});

//find a disease based on the id
app.get('/diseases/:id', (req, res, next) => {
    //call mongoose method findOne (MongoDB db.diseases.findOne())
    Disease.findOne({_id: req.params.id}) 
        //if data is returned, send data as a response 
        .then(data => {
            res.status(200).json(data)
            console.log(data);
        })
        //if error, send internal server error
        .catch(err => {
        console.log('Error: ${err}');
        res.status(500).json(err);
    });
});

app.post('/diseases', (req, res, next) => {
    // create a new patient variable and save request’s fields 
    const disease = new Disease({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dob: req.body.dob,
        Asthma: req.body.Asthma,
        Migrane: req.body.Migrane,
        Pregnancy: req.body.Pregnancy,
        HeartDisease: req.body.HeartDisease,
        BloodPressure: req.body.BloodPressure
    });
    //send the document to the database 
    disease.save()
        //in case of success
        .then(() => { console.log('Success'); })
        //if error
        .catch(err => { console.log('Error: ' + err); });
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/diseases/:id", (req, res, next) => {
    Disease.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json("Deleted!");
    });
});

//serve incoming put requests to /diseases 
app.put('/diseases/:id', (req, res, next) => { 
    console.log("id: " + req.params.id) 
    // check that the parameter id is valid 
    if (mongoose.Types.ObjectId.isValid(req.params.id)) { 
        //find a document and set new first and last names 
        Disease.findOneAndUpdate( 
            {_id: req.params.id}, 
            {$set:{ 
                firstName : req.body.firstName, 
                lastName : req.body.lastName 
            }}, 
            {new:true} 
        ) 
        .then((disease) => { 
            if (disease) { //what was updated 
                console.log(disease); 
            } else { 
                console.log("no data exist for this id"); 
            } 
        }) 
        .catch((err) => { 
            console.log(err); 
        }); 
    } else { 
        console.log("please provide correct id"); 
    } 
});


//to use this middleware in other parts of the application
module.exports = app;
