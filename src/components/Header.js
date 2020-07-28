import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <header className="text-center d-flex align-items-center">
      <Container className="">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p>Welcome to</p>
            <h1>Smart Market</h1>
            <p>...Connecting you to Enugu market...</p>
          </Col>


        </Row>
      </Container>
    </header>
  );
}
