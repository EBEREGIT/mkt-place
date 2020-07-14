import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainProducts from "./Main/MainProducts";
import MainServices from "./Main/MainServices";

export default function Main() {
  return (
    <Container>
      {/* Products */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Products</h2>
        </Col>
        <MainProducts />
      </Row>

      {/* Services */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Services</h2>
        </Col>
        <MainServices />
      </Row>

      {/* Offices */}
      <Row></Row>
    </Container>
  );
}
