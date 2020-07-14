import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <Fragment>
      <h3 className="headings">Login Office</h3>
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
          Login
        </Button>
      </Form>
    </Fragment>
  );
}
