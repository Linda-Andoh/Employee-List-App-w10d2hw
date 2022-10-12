import React from "react";
import EmployeeListItem from "./EmployeeListItems"
import data from "../data";



const EmployeeList = data.map((employee) => {
  return (
    <div className="list">
     <EmployeeListItem
         key={employee.id}
         image={employee.image}
         name={employee.name}
         dept={employee.department}
         email={employee.email}
         phone={employee.phone}
     />
    </div>
  )
});


    return <div className="employeeList">{employees}</div>
  