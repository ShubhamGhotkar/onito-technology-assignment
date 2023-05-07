const mongoose = require("mongoose");

const addressDetailsSchema = mongoose.Schema({
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  pincode: {
    type: String,
  },
});

const addressDetails = mongoose.model("address-detail", addressDetailsSchema);

module.exports = addressDetails;
