import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

// validation schema
const schema = yup.object().shape({
  phoneNumber: yup
    .number("Phone Number must be an number")
    .required("Phone Number must be filled")
    .positive("Phone Number must be a positive number"),
  password: yup.string().required("Password must be filled"),
});

export default function Login() {
  // get needed variables from useForm
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // function called when form is submitted
  const onSubmit = ({ phoneNumber, password }) => {
    alert(`Phone Number: ${phoneNumber}, Password: ${password}`);
  };

  return (
    <Fragment>
      <h3 className="headings">Login Office</h3>
      {/* when form is submitted, execute the onSubmit funtion using the handleSubmit */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* phone number */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            ref={register}
            placeholder="Enter Phone Number"
          />
          {<p className="text-danger">{errors.phoneNumber?.message}</p>}
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            ref={register}
            placeholder=" Enter Password"
          />
          {<p className="text-danger">{errors.password?.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Fragment>
  );
}
