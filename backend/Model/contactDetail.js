const mongoose = require("mongoose");

const contactDetailSchema = mongoose.Schema({
  guardianDetailsLable: {
    type: String,
  },
  guardianName: {
    type: String,
  },
  email: {
    type: String,
  },
  emergencyContactNo: {
    type: String,
  },
});

const contactDetail = mongoose.model("contact-detail", contactDetailSchema);

module.exports = contactDetail;
