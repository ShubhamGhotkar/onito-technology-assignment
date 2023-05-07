// name: 'Shubham Ghotkar',
//   dateOfBirthOrAge: '23',
//   sex: 'male',
//   mobile: '9325061820',
//   govtIssueIdtype: 'adhar',
//   govtId: '301357167275',

// govtId: '301357167275',
// occupation: 'Vegetable Seller',
// religion: 'Hinduism',
// maritalStatus: 'unmaried',
// bloodGroup: 'A+',
// nationlity: 'indian',
// guardianDetailsLable: 'Mr',
// guardianName: 'vishnu',
// email: 'pghotkar931@gmail.com',
// emergencyContactNo: '',
// address: 'near Madankar Layout',
// state: 'Maharashtra ',
// city: 'Mumbai',
// country: 'India',
// pincode: '442202'

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
  // govtId: {
  //   type: String,
  // },
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

const test = mongoose.model("test-scheema-1", testSchema);

module.exports = test;
