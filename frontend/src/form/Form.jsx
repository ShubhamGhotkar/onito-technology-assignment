import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import AdressDetails from "./AdressDetails";
import OtherDetails from "./OtherDetails";
import { userScheema } from "./userScheema";
import "./style.css";
import { useState } from "react";

function Form() {
  const [cancleBtn, setCancleBtn] = useState(false);

  if (cancleBtn) {
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [
      name,
      dateOfBirthOrAge,
      sex,
      mobile,
      govtIssueIdtype,
      govtId,
      guardianDetailsLable,
      guardianName,
      email,
      emergencyContactNo,
      address,
      state,
      city,
      country,
      pincode,
      occupation,
      religion,
      maritalStatus,
      bloodGroup,
      nationlity,
    ] = e.target;

    const userValueObj = {
      name: name.value,
      dateOfBirthOrAge: dateOfBirthOrAge.value,
      sex: sex.value,
      mobile: mobile.value,
      govtIssueIdtype: govtIssueIdtype.value,
      govtId: govtId.value,
      occupation: occupation.value,
      religion: religion.value,
      maritalStatus: maritalStatus.value,
      bloodGroup: bloodGroup.value,
      nationlity: nationlity.value,
      guardianDetailsLable: guardianDetailsLable.value,
      guardianName: guardianName.value,
      email: email.value,
      emergencyContactNo: emergencyContactNo.value,
      address: address.value,
      state: state.value,
      city: city.value,
      country: country.value,
      pincode: pincode.value,
    };

    if (name.value === "") window.alert("Name field required");
    else if (dateOfBirthOrAge.value === "")
      window.alert("Date or Age field required");
    else if (sex.value === "select sex" || sex.value === "")
      window.alert("Sex field required");

    const obj = {
      name: name.value,
      dateOfBirthOrAge: dateOfBirthOrAge.value,
      sex: sex.value,
    };

    try {
      const isFormValid = await userScheema.isValid(obj);

      if (isFormValid) {
        const res = await fetch(`/post-user`, {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userValueObj),
        });

        const data = await res.json();

        if (data || cancleBtn) {
          window.alert("User Added Sucessfully");
          name.value = "";
          dateOfBirthOrAge.value = "";
          sex.value = "";
          mobile.value = "";
          govtIssueIdtype.value = "";
          govtId.value = "";
          guardianDetailsLable.value = "";
          guardianName.value = "";
          email.value = "";
          emergencyContactNo.value = "";
          address.value = "";
          state.value = "";
          city.value = "";
          country.value = "";
          pincode.value = "";
          occupation.value = "";
          religion.value = "";
          maritalStatus.value = "";
          bloodGroup.value = "";
          nationlity.value = "";
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <PersonalDetails />
        <ContactDetails />
        <AdressDetails />
        <OtherDetails setCancleBtn={setCancleBtn} handleSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default Form;
