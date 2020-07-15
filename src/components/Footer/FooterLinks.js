import React from "react";
import { Col, ListGroup } from "react-bootstrap";

export default function FooterLinks() {
  return (
    <Col xs={12} sm={12} md={4} lg={4}>
        <h4 className="footer-headings">Shortcuts</h4>
      <ListGroup variant="flush">
        <ListGroup.Item><a href="/products">Products</a></ListGroup.Item>
        <ListGroup.Item><a href="/services">Services</a></ListGroup.Item>
        <ListGroup.Item><a href="/offices">Offices</a></ListGroup.Item>
        <ListGroup.Item><a href="/Account">Create Shop</a></ListGroup.Item>
        <ListGroup.Item><a href="/Account">Login Shop</a></ListGroup.Item>
      </ListGroup>
    </Col>
  );
}
