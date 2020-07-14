import React, { useState, Fragment } from "react";
import { Button, Modal, Form } from "react-bootstrap";

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

function AddForm() {
  return (
    <Form>
      {/* Name of product or Service */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter Name of product or Service"
        />
      </Form.Group>

      {/* Select Product or Service */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Type</Form.Label>
        <Form.Control as="select">
          <option>Product</option>
          <option>Service</option>
        </Form.Control>
      </Form.Group>

      {/* Description */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Enter Other Details"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}
