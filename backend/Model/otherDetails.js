const mongoose = require("mongoose");

const otherDetailsSchema = mongoose.Schema({
  occupation: {
    type: String,
  },
  religion: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  nationlity: {
    type: String,
  },
});

const otherDetails = mongoose.model("other-detail", otherDetailsSchema);

module.exports = otherDetails;
