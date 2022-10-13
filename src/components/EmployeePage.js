 import React from "react";

export default function EmployeePage (props) {
    return (
      <>
       
        <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                    <th scope="column">{props.id}</th>
                        <img src={props.image}></img>
                        <td>{props.name}</td>
                        <td>{props.department}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </>
    )
  }