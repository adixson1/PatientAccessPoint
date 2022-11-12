
const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const patientSchema = new mongoose.Schema({
    firstName:  { type: String, required: true},
    lastName:  { type: String, required: true},
    dob:  { type: Date, required: true},
    phoneNumber:  { type: Number, required: true},
    maritalStatus:  { type: String, required: true},
    street: { type: String, required: true},
    city:  { type: String, required: true},
    zip:  { type: Number, required: true},
    primaryInsurance:  { type: String, required: true},
    groupNumber:  { type: String, required: true},
    idNumber:  { type: Number, required: true},
    socialSecurityNumber:  { type: Number, required: true},
    relationship:  { type: String, required: false}
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Patient', patientSchema,'Patients');
//note capital S in the collection name