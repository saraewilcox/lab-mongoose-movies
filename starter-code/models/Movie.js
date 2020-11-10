const mongoose = require ('mongoose');
const { Schema, model } = mongoose;
const movieSchema = new Schema (
  {
    title: String, 
    genre: String, 
    plot: String
  }, {
    timestamps: true // to record created at & updated at 
  }
)
module.exports = model('Movie', movieSchema);