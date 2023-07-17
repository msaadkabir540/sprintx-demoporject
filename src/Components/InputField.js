import React, { useState } from "react";
import bugLength from "./TableData";

const InputField = () => {
  const bugsLen = bugLength.length;
  const [selectedValues, setSelectedValues] = useState({});
  const selectionOptionData = [
    {
      id: 1,
      label: "Project",
      options: ["Project 1", "Project 2", "Project 3", "Project 4"],
    },
    {
      id: 2,
      label: "LI Status",
      options: ["LI Status 1", "LI Status 2", "LI Status 3", "LI Status 4"],
    },
    {
      id: 3,
      label: "Bug Types",
      options: ["Bug Types 1", "Bug Types 2", "Bug Types 3", "Bug Types 4"],
    },
  ];
  const handleChangeValue = (id, value) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [id]: value,
    }));
  };
  const handelResetClick = () => {
    setSelectedValues({});
  };
  const handelApplyClick = () => {
    console.log(`Successfully Submitted the options `, selectedValues);
  };
  const renderedSelection = selectionOptionData.map(
    ({ id, label, options }) => {
      const isDefault = selectedValues[id] || "default";
      return (
        <div className="inputField" key={id}>
          <label>{label}</label>
          <select
            value={isDefault}
            onChange={(e) => handleChangeValue(id, e.target.value)}
          >
            <option value={"default"} disabled>
              Choose a {label} ...
            </option>
            {options.map((options) => (
              <option value={options}>{options}</option>
            ))}
          </select>
        </div>
      );
    }
  );
  return (
    <>
      <div className="main-input-field">
        <div className="inputDiv">
          {renderedSelection}
          <div className="inputField">
            <label>Issue Date</label>
            <input
              type="date"
              className="form-control"
              id="lname"
              name="lname"
            />
          </div>
        </div>

        <div className="btn-form">
          <button className="btn-reset" onClick={handelResetClick}>
            Reset
          </button>

          <button className="btn-apply" onClick={handelApplyClick}>
            Apply
          </button>
        </div>
      </div>

      <div className="ticketSection">
        <div className="ticketHeading">
          <h1>Total Bugs ({bugsLen})</h1>
        </div>
        <div>
          <div className="ticket">
            <button className="btn-ticket" onClick={()=> alert("Ticket is Generate")}>Ticket</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputField;
