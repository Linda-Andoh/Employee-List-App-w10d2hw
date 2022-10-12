import React from "react";

export default function EmployeePage (props) {
    return (
      <>
        <div id="empPageHeader"><button id="backBtn">Back</button>
        <h1>Employee</h1>
        </div>
        <div  className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <img src={props.images}></img>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                        <td>{props.birthday}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </>
    )
  }