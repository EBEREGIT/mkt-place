import React from "react";
import { Col, ListGroup } from "react-bootstrap";

export default function FooterContact() {
  return (
    <Col xs={12} sm={12} md={4} lg={4}>
        <h4 className="footer-headings">Contact</h4>
      <ListGroup variant="flush">
        <ListGroup.Item>info@market.com</ListGroup.Item>
        <ListGroup.Item>08012345678</ListGroup.Item>
        <ListGroup.Item>Enugu, Enugu State</ListGroup.Item>
      </ListGroup>
    </Col>
  );
}
