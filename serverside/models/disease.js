
const mongoose = require('mongoose');

//define a schema/ blueprint NOTE: id is not a part of the schema 
const diseaseSchema = new mongoose.Schema({
    firstName:  { type: String},
    lastName:  { type: String},
    dateOfBirth: {type: Date}
});

//use the blueprint to create the model 
//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Disease', diseaseSchema,'Diseases');
//note capital S in the collection name