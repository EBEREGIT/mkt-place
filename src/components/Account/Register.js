import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import axios from "axios";

// validation schema
const schema = yup.object().shape({
  phoneNumber: yup
    .number("Phone Number must be an number")
    .required("Phone Number must be filled")
    .positive("Phone Number must be a positive number"),
    shop: yup.string().required("Shop Name must be entered"),
  password: yup.string().required("Password must be entered"),
  comfirmPassword: yup.string().required("Password must be entered"),
  
});

export default function Register() {
  // setup form fields
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shop, setShop] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");

  // get needed variables from useForm
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // function called when form is submitted
  const onSubmit = ({ phoneNumber, password, comfirmPassword, shop }) => {
    const url  = "https://afia.sjcmsportal.com/api/register",
    method = "post",
    data = {
      name: shop,
      phone: phoneNumber,
      password: password,
      password_comfirm: comfirmPassword
    },
    headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // create office
    axios({ url, method, headers, data })
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
  };

  return (
    <Fragment>
      <h3 className="headings">Create Office</h3>
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

        {/* Shop Name */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Shop Name</Form.Label>
          <Form.Control
            type="text"
            name="shop"
            ref={register}
            placeholder="Enter Shop Name"
            value={shop}
            onChange={(e) => setShop(e.target.value)}
          />
          {<p className="text-danger">{errors.shop?.message}</p>}
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

        {/* Comfirm Password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Comfirm Password</Form.Label>
          <Form.Control
            type="password"
            name="comfirmPassword"
            ref={register}
            placeholder=" comfirm Password"
            value={comfirmPassword}
            onChange={(e) => setComfirmPassword(e.target.value)}
          />
          {<p className="text-danger">{errors.password?.message}</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </Fragment>
  );
}
