import React, { useState } from "react";
import { bloodGroups, religions } from "./data";

import "./style.css";

function OtherDetails({ setCancleBtn, handleSubmit }) {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // setCancleBtn(true);
    // handleSubmit();
  };
  return (
    <>
      <h2 className="h2-ele">Other Details</h2>
      <div className="other-details">
        <div className="other-details-itm">
          <label for="occupation">Occupation</label>
          <input
            type="text"
            placeholder="Enter Occupation"
            id="occupation"
            onChange={handleChange}
          />
        </div>
        <div className="other-details-itm ">
          <label for="religion">Religion</label>
          <select name="religion" id="religion" onChange={handleChange}>
            <option value="">Enter Religion</option>
            {religions.map((rel, i) => (
              <option key={i} value={rel}>
                {rel}
              </option>
            ))}
          </select>
        </div>
        <div className="other-details-itm maritial-status">
          <label for="maritial-status">Maritial Status</label>
          <select
            name="maritial-status"
            id="maritial-status"
            onChange={handleChange}
          >
            <option value="">Enter Maritial Status</option>
            <option value="maried">Maried</option>
            <option value="unmaried">UnMaried</option>
          </select>
        </div>
        <div className="other-details-itm ">
          <label for="blood-group">Blood Group</label>
          <select name="blood-group" id="blood-group" onChange={handleChange}>
            <option value="">Enter Blood Group</option>
            {bloodGroups.map((group, i) => (
              <option key={i} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
        <div className="other-details-itm ">
          <label for="nationlity">Nationlity</label>
          <select name="nationlity" id="nationlity" onChange={handleChange}>
            <option value="">Enter Nationlity</option>
            <option value="indian">Indian</option>
          </select>
        </div>
      </div>
      <div className="button">
        <button className="cancle btn" onClick={handleClick}>
          Cancle(ESC)
        </button>
        <button type="submit" className="submit btn">
          Submit(.. S)
        </button>
      </div>
    </>
  );
}

export default OtherDetails;
