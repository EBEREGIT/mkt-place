import React from "react";
import SingleService from "../components/Main/SingleService";
import { Row, Col, Container } from "react-bootstrap";

let services = [];

for (let service = 0; service < 40; service++) {
  services.push(<SingleService />);
}

export default function Services() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Services</h2>
        </Col>
        {services}
      </Row>
    </Container>
  );
}
