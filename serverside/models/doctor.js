
const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const doctorSchema = new mongoose.Schema({
    firstName1:  { type: String},
    lastName1:  { type: String},
    email1: {type: String}
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Doctor', doctorSchema,'Doctors');
//note capital S in the collection name