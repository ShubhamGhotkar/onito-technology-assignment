import React, { useEffect, useState } from "react";
import { column } from "./column";
import { row } from "./row";
import DataTable from "react-data-table-component";

import "./user-style-css.css";

function UserList() {
  const [records, setRecord] = useState(row);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/get/user")
      .then((res) => res.json())
      .then((data) => setRecord([...data]));
    console.log(records);
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const newUser = records.filter((row) =>
      row.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );

    setRecord(newUser);
  };

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        fontSize: "14px",
        paddingTop: "2rem",
      },
      table: {
        maxWidth: 350,
        maxHeight: "auto",
        color: "red",
      },
    },
  };

  return (
    <div className="user-container">
      <div className="user-header ">
        <div className="select-entry">UserList</div>
        <div className="user-header-input">
          <label for="search">Search</label>
          <input
            type="text"
            placeholder="Search Here"
            id="search"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="user-list ">
        <DataTable
          columns={column}
          data={records}
          fixedHeader
          pagination
          responsive
          dense
          noHeader={false}
          customStyles={customStyles}
          highlightOnHover
          progressPending={loading}
          search
          paginationRowsPerPageOptions={[1, 5, 10, 15, 20, 25, 30, 50, 100]}
        />
      </div>
    </div>
  );
}

export default UserList;
