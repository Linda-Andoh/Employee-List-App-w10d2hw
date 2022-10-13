import React from "react";
import data from "../data";
import EmployeeListItems from "./EmployeeListItems";
import EmployeePage from "./EmployeePage"

console.log(data);

const employees = data.map((employee, index) => {
  return (
    <div> 
     <div className="list">
      <EmployeeListItems
         key={index}
          image={employee.image}
         name={employee.name}
         dept={employee.department}
     />
     <EmployeePage />
     </div>
    </div>
  )
  });

  
export default function EmployeeList() {
  return (
    <div>
      {employees}
    </div>
  )
}
