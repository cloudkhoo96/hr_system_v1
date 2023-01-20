import React from "react";
import { Button, Form, FormGroup, Stack } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Form>
        <Stack gap={4}>
          <FormGroup className="mb-3" controlId="account">
            <Form.Label>ID: </Form.Label>
            <Form.Control type="text" placeholder="Enter ID Here..." />
          </FormGroup>
          <FormGroup className="mb-3" controlId="password">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Password Here..."
            />
          </FormGroup>
        </Stack>
        <Button variant="primary" type="submit">Login</Button><Button variant="secondary" type="button">Cancel</Button>
      </Form>
    </div>
  );
};

export default Login;
