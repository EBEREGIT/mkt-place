import React, { useState, Fragment } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function AddProductOrService() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Add New
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* modal header */}
        <Modal.Header closeButton>
          <Modal.Title>Add Product or Service</Modal.Title>
        </Modal.Header>

        {/* modal body */}
        <Modal.Body>
          <AddForm />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

// validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name must be entered"),
  description: yup.string().required("Description must be entered"),
  itemImage: yup.string().required("Image must be entered"),
});

function AddForm() {
  // set form fields
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [description, setDescription] = useState("");

  // get needed variables from useForm
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // function called when form is submitted
  const onSubmit = () => {
    // get cookie from browser if logged in
    const token = cookies.get("AUTH-TOKEN"),
      method = "post",
      url = "https://afia.sjcmsportal.com/api/products",
      headers = {
        Authorization: `Bearer ${token}`,
      };

      console.log(token)

    // instantiate new FIleReader Class
    let imageData = new FileReader();

    // set the path of the image
    imageData.readAsDataURL(itemImage);

    // when the path is set, make the API call
    imageData.onload = (e) => {
      const data = {
        type,
        name,
        desc: description,
        photo: e.target.result
      };

      console.log(data)
      // make API call
        axios({
          method,
          url,
          data,
          headers
        })
          .then((result) => {
            console.log(result);
          })
          .catch((e) => console.log(e));
    };
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Name of product or Service */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          ref={register}
          placeholder="Enter Name of product or Service"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {<p className="text-danger">{errors.name?.message}</p>}
      </Form.Group>

      {/* Image of product or Service */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="file"
          name="itemImage"
          ref={register}
          defaultValue={itemImage}
          placeholder="Enter Name of product or Service"
          onChange={(e) => setItemImage(e.target.files[0])}
        />
        {<p className="text-danger">{errors.itemImage?.message}</p>}
      </Form.Group>

      {/* Select Product or Service */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Type</Form.Label>
        <Form.Control
          as="select"
          name="type"
          ref={register}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Select Type</option>
          <option>Product</option>
          <option>Service</option>
        </Form.Control>
      </Form.Group>

      {/* Description */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="description"
          ref={register}
          placeholder="Enter Other Details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {<p className="text-danger">{errors.description?.message}</p>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}
