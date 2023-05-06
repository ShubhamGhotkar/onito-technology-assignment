import React, { useState } from "react";
import { mobileScheema, adharScheema, panScheema } from "./userScheema";
import "./style.css";

function PersonalDetails() {
  const [error, setError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState({
    name: "",
    dateOrBbirth: "",
    sex: "",
    mobile: "",
    idtype: "",
    govtId: "",
  });

  const handleInput = async (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });

    const mobileValidate = {
      mobile: data.mobile,
    };
    if (e.target.name === "mobile" && e.target.value !== "") {
      setError(true);
      const isNumberValid = await mobileScheema.isValid(mobileValidate);
      if (isNumberValid) {
        setError(false);
      }
    } else if (e.target.name === "govtId" && e.target.value !== "") {
      if (id === "Aadhar") {
        setIdError(true);
        const obj = {
          govtIssueIdtype: id,
          govtId: data.govtId,
        };
        const isIdValid = await adharScheema.isValid(obj);

        console.log(isIdValid);
        if (isIdValid) {
          setIdError(false);
        }
      } else {
        setIdError(true);
        const obj = {
          govtIssueIdtype: id,
          govtId: data.govtId,
        };
        const isIdValid = await panScheema.isValid(obj);

        if (isIdValid) {
          setIdError(false);
        }
      }
    }
  };

  return (
    <>
      <h2 className="h2-ele">Personal Details</h2>
      <div className="personal-details">
        <div className="personal-details-itm">
          <label for="name">
            Name<span className="start-style">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            value={data.name}
            onInput={handleInput}
          />
        </div>
        <div className="personal-details-itm">
          <label for="date-or-birth">
            Date of Birth or Age<span className="start-style">*</span>
          </label>
          <input
            type="text"
            placeholder="DD/MM/YYYY or Age in Years"
            id="date-or-birth"
            name="dateOrBbirth"
          />
        </div>
        <div className="personal-details-itm ">
          <label for="sex">
            sex<span className="start-style">*</span>
          </label>
          <select name="sex" id="sex" onInput={handleInput}>
            <option value="select sex">Select Sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="personal-details-itm">
          <label for="mobile">Mobile</label>
          <input
            type="number"
            placeholder="Enter Mobile"
            id="mobile"
            name="mobile"
            onInput={handleInput}
          />
          <br />
          {error && (
            <div className="error-span">please enter Valid Mobile Number</div>
          )}
        </div>
        <div className="personal-details-itm grid-class-item">
          <label for="idType">Govt Issued ID</label>
          <select
            name="idtype"
            id="govt-id"
            onChange={(e) => setId(e.target.value)}
          >
            <option value="">ID Type</option>
            <option value="Aadhar">Adhar</option>
            <option value="pan">Pan</option>
          </select>
          <input
            type="text"
            placeholder="Enter Govt ID"
            id="govt-id-input"
            name="govtId"
            onInput={handleInput}
          />
          {idError && (
            <div className="error-span">please enter Valid ID Number</div>
          )}
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
