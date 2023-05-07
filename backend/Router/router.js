const express = require("express");
const router = express.Router();
require("../Database/databaseConnect");

const userDetails = require("../Model/testScheema");

router.post("/post-user", async (req, res) => {
  const {
    name,
    dateOfBirthOrAge,
    sex,
    mobile,
    govtIssueId,
    adhar,
    pan,
    occupation,
    religion,
    maritalStatus,
    bloodGroup,
    nationlity,
    guardianDetails,
    email,
    emergencyContactNo,
    address,
    state,
    city,
    country,
    pincode,
  } = req.body;

  if (!name || !dateOfBirthOrAge || !sex)
    return res.status(422).json({ error: `Input Field Required` });

  const newUser = new userDetails({
    name,
    dateOfBirthOrAge,
    sex,
    mobile,
    govtIssueId,
    adhar,
    pan,
    occupation,
    religion,
    maritalStatus,
    bloodGroup,
    nationlity,
    guardianDetails,
    email,
    emergencyContactNo,
    address,
    state,
    city,
    country,
    pincode,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: `user Added SucessFully` });
  } catch (err) {
    res.status(400).json({ message: `Failed To Add user` });
    console.log(err);
  }
});

router.get("/get/user", (req, res) => {
  userDetails
    .find()
    .then((user) => res.send(user))
    .catch((err) =>
      res
        .status(500)
        .send({ message: err.message || "Error occur in get Method" })
    );
});
module.exports = router;
