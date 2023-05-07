const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
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

const test = mongoose.model("onito-tech-data", testSchema);

module.exports = test;
