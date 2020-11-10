const mongoose = require ('mongoose');
const { Schema, model } = mongoose;
const celebritySchema = new Schema (
  {
    name: String, 
    occupation: String, 
    catchPhrase: String
  }, {
    timestamps: true // to record created at & updated at 
  }
)
module.exports = model('Celebrity', celebritySchema);