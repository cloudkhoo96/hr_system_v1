import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const DUMMY_EMPLOYEE = [
  {
    "id": 1,
    "name": "Bob",
    "dob": "01/01/1990",
    "email": "bob@bob.com"
  },
  {
    "id": 2,
    "name": "Mike",
    "dob": "02/02/1990",
    "email": "mike@mike.com"
  },
  {
    "id": 3,
    "name": "Chad",
    "dob": "03/03/1990",
    "email": "chad@chad.com"
  },
  {
    "id": 4,
    "name": "Karen",
    "dob": "04/04/1990",
    "email": "karen@karen.com"
  },
]

const EmployeesList = () => {
  const [employeelist, setEmployeelist] = useState(DUMMY_EMPLOYEE);

  return (
    <>
      <h2>Employees List</h2>
      <Link to="/newemployeeform">
        <Button variant="primary">Add</Button>
      </Link>
      <br />

      <Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Date of birth:</th>
              <th>Email:</th>
            </tr>
          </thead>
          <tbody>
            {employeelist.map((employee) => (
              <tr>
                <td>{employee.name}</td>
                <td>{employee.dob}</td>
                <td>{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default EmployeesList;
