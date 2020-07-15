import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SingleOffice from "../components/Main/SingleOffice";

let offices = [];

for (let office = 0; office < 40; office++) {
  offices.push(<SingleOffice />);
}

export default function Offices() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Offices</h2>
        </Col>
        {offices}
      </Row>
    </Container>
  );
}
