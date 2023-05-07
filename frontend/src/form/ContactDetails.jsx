import React, { useState } from "react";
import { emergencyScheema } from "./userScheema";
import "./style.css";

const genderPrefix = ["Mr", "Ms", "Mx"];

function ContactDetails() {
  const [error, setError] = useState(false);

  const handleInput = async (e) => {
    e.preventDefault();
    setError(true);
    const mobileValidate = {
      mobile: e.target.value,
    };
    const isNumberValid = await emergencyScheema.isValid(mobileValidate);
    if (isNumberValid) {
      setError(false);
    }
  };

  return (
    <>
      <h2 className="h2-ele">Contact Details</h2>
      <div className="contact-details">
        <div className="contact-details-itm ">
          <label for="guardian-id">Guardian Details</label>
          <select name="guardian-id" id="guardian-id">
            <option value="">Enter Label</option>
            {genderPrefix.map((pref, i) => (
              <option key={i} value={pref}>
                {pref}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Guardian Name"
            id="guardian-id"
          />
        </div>
        <div className="contact-details-itm">
          <label for="emial">Email</label>
          <input type="email" placeholder="Enter Email" id="email" />
        </div>
        <div className="contact-details-itm">
          <label for="em-no">Emergency Contact Number</label>
          <input
            type="number"
            placeholder="Enter Emergency No"
            id="em-no"
            onInput={handleInput}
          />
          {error && (
            <>
              <div className="error-span">
                please enter Valid Emergency Mobile Number
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
