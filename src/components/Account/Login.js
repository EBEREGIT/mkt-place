import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <Form>
      {/* phone number */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" />
      </Form.Group>

      {/* password */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder=" Enter Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
