/*======================
        DEPENDENCIES 
========================*/
const mongoose = require("mongoose");

/*======================
         SCHEMA 
========================*/

const rentalSchema = mongoose.Schema({
  owner: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, default: "" },
  country: { type: String, required: true },
  price: { type: Number, required: true },
  contactInfo: { type: String, required: true },
  occupancy: { type: String },
  like: { type: Number },
  description: { type: String, required: true },
  image: { type: String },
  available: { type: Boolean }
});

/*======================
         EXPORT 
========================*/

module.exports = mongoose.model("Availablerentals", rentalSchema);
