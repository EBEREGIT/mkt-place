import React from "react";
import { Image, Row, Col, ListGroup } from "react-bootstrap";

export default function MenuDashboard() {
  return (
    <Row className="text-center">
      <Col>
      {/* profile image or office logo */}
        <Image
          src="https://svgsilh.com/svg/659651.svg"
          width="100px"
          height="100px"
          roundedCircle
        />
        <h4>Njoku, S E</h4>
        <h4>08031904145</h4>

        {/* list of dashboard menu */}
        <ListGroup variant="flush">
          <ListGroup.Item>Add Product</ListGroup.Item>
          <ListGroup.Item>Add Service</ListGroup.Item>
          <ListGroup.Item>Settings</ListGroup.Item>
          <ListGroup.Item>Signout</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}
