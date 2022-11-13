
const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const patientSchema = new mongoose.Schema({
    firstName:  { type: String},
    lastName:  { type: String},
    dob:  { type: Date},
    phoneNumber:  { type: Number},
    maritalStatus:  { type: String},
    street: { type: String},
    city:  { type: String},
    zip:  { type: Number},
    primaryInsurance:  { type: String},
    groupNumber:  { type: String},
    idNumber:  { type: Number},
    socialSecurityNumber:  { type: Number},
    relationship:  { type: String}
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Patient', patientSchema,'Patients');
//note capital S in the collection name