import React, { useState } from "react";
import "./Table.css";
import TableData from "./TableData";

function Table() {
  const [isChecked, setIsChecked] = useState(false);

  const handelCheckde = () => {
    setIsChecked(!isChecked);
  };

  const renderedTableHeaading = (
    <tr>
      <th className="checkbox">
        <input
          type="checkbox"
          id="scales"
          name="scales"
          checked={isChecked}
          onChange={handelCheckde}
          // onClick={handelCheckde}
        />
      </th>
      <th>Bug #</th>
      <th>Project</th>
      <th>Milestone</th>
      <th>Feature</th>
      <th>Testing Type</th>
      <th>Issue Type</th>
      <th>Ticket ID</th>
      <th>Developer Name</th>
      <th>Bug Type</th>
      <th>Bug Sub Type</th>
      <th>Bug Feedback</th>
      <th>Step to Reproduce</th>
      <th>Ideal Behavior</th>
    </tr>
  );
  const renderedTableData = TableData.map((tableData) => {
    return (
      <tr key={tableData.id}>
        <td className="checkbox">
          <input
            type="checkbox"
            id="scales"
            name="scales"
            checked={isChecked}
          />
        </td>
        <td>{tableData.Bug}</td>
        <td>{tableData.Project}</td>
        <td>{tableData.Milestone}</td>
        <td>{tableData.Feature}</td>
        <td>{tableData.Testing_Type}</td>
        <td>{tableData.Issue_Type}</td>
        <td>{tableData.Ticket_ID}</td>
        <td>{tableData.Developer_Name}</td>
        <td>{tableData.Bug_Type}</td>
        <td>{tableData.Bug_Sub_Type}</td>
        <td>{tableData.Bug_Feedback}</td>
        <td>{tableData.Step_to_Reproduce}</td>
        <td>{tableData.Ideal_Behavior}</td>
      </tr>
    );
  });
  return (
    <>
      <div className="tablemain">
          <table className="innerTableClass">
            <thead>{renderedTableHeaading}</thead>

            <tbody>{renderedTableData}</tbody>
          </table>
        </div>
    </>
  );
}

export default Table;
