
const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const appointmentSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    dateOfBirth: {type: Date},
    appointmentDate: { type: Date },
    selectDepartment: {type: String},
    selectDoctor: {type: String},
    messageOptional: {type: String}
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Appointment', appointmentSchema, 'Appointments');
//note capital S in the collection name