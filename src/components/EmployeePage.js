 import React from "react";
 import { Link } from "react-router-dom";
 import Employee from "./Employee";

 export default function EmployeePage (props) {
  return (
    <>
      <div id="empPageHeader">
        <Link to="/"><button id="backBtn">Back</button></Link>
      <h2>Employee Page</h2>
      </div>
      <Employee />
    </>
  )
}