import React from "react";
import { Button, Form, Stack, FormGroup } from "react-bootstrap";

const EmployeeForm = () => {
  return (
    <div>
      <Form>
        <Stack gap={4}>

        <FormGroup className="mb-3" controlId="formName">
          <Form.Label>Name: </Form.Label>
          <Form.Control type="text" placeholder="Enter Name Here..." />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formDOB">
          <Form.Label>Date of Birth: </Form.Label>
          <Form.Control type="date" />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formEmail">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" placeholder="Enter Email Here..." />
        </FormGroup>

        <Button variant="primary" type="submit">Submit</Button>
  

        </Stack>
      </Form>
    </div>
  );
};

export default EmployeeForm;
