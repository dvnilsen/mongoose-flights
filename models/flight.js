const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
      type: String,
      required: true,
      enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
      type: Number,
      // Required Between 10 and 9999
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    departs: {
      type: Date,
      // default: // one year from date created
    }

  });
  
  module.exports = mongoose.model('Flight', flightSchema);