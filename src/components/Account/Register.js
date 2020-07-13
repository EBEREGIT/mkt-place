import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

export default function Register() {
  return (
    <Fragment>
      <h3 className="text-center">Register</h3>
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

        {/* Shop Name */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Shop Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Shop Name" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}
