const mongoose = require("mongoose");

const userDetailsSchema = mongoose.Schema({
  personalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "personal-detail",
  },
  contactDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "contact-detail",
  },
  addressDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "address-detail",
  },
  otherDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "other-detail",
  },
});

const userDetails = mongoose.model("form-detail", userDetailsSchema);

module.exports = userDetails;
