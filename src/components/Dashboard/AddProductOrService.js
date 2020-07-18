import React, { useState, Fragment } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

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
});

function AddForm() {
  // get needed variables from useForm
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // function called when form is submitted
  const onSubmit = ({ name, type, description }) => {
    alert(`name: ${name}, type: ${type}, description: ${description}`);
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
        />
        {<p className="text-danger">{errors.name?.message}</p>}
      </Form.Group>

      {/* Select Product or Service */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" name="type" ref={register}>
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
        />
        {<p className="text-danger">{errors.description?.message}</p>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}
