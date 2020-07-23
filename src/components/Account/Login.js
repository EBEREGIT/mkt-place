import React, { Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Cookies from "universal-cookie";
import axios from "axios";
const cookies = new Cookies();

// validation schema
const schema = yup.object().shape({
  phoneNumber: yup
    .number("Phone Number must be an number")
    .required("Phone Number must be filled")
    .positive("Phone Number must be a positive number"),
  password: yup.string().required("Password must be filled"),
});

function Login(props) {
  // setup form fields
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  // get needed variables from useForm
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // function called when form is submitted
  const onSubmit = ({ phoneNumber, password }) => {
    const url = "https://afia.sjcmsportal.com/api/login",
      method = "post",
      data = {
        phone: phoneNumber,
        password: password,
      },
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

    // create office 
    axios({ url, method, headers, data })
      .then((result) => {
        // create cookie with the token returned
        cookies.set("AUTH-TOKEN", result.data.response.token, { path: "/" });
        // redirect user to the feeds page
        props.history.push("/dashboard");
      })
      .catch((error) => console.log(error));
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
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default withRouter(Login);
