const mongoose = require("mongoose");

const personalDetailsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  dateOfBirthOrAge: {
    type: String,
  },
  sex: {
    type: String,
  },
  mobile: {
    type: String,
  },
  govtIssueIdtype: {
    type: String,
  },
  govtId: {
    type: String,
  },
  govtId: {
    type: String,
  },
});

const personalDetail = mongoose.model("personal-detail", personalDetailsSchema);

module.exports = personalDetail;
