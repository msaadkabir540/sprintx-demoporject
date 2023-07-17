import React from "react";
import InputField from "./InputField";
import Table from "./Table";
import { Link } from "react-router-dom";
import "./index.css";

const Index = () => {
  return (
    <>
      <div className="button-container">
        <button className="btn-test">
          <Link to="/">Click to Back</Link>
        </button>
        <button className="btn-export">Export</button>
      </div>
      <InputField />
      <Table />
    </>
  );
};

export default Index;
