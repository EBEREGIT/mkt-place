import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import MainProducts from "./Main/MainProducts";
import MainServices from "./Main/MainServices";
import MainOffices from "./Main/MainOffices";

export default function Main() {
  return (
    <Container>
      {/* Products */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Products</h2>
        </Col>
        <MainProducts />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Button>See All Products...</Button>
        </Col>
      </Row>

      {/* Services */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Services</h2>
        </Col>
        <MainServices />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Button>See All Services...</Button>
        </Col>
      </Row>

      {/* Offices */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Offices</h2>
        </Col>
        <MainOffices />
        <Col xs={12} sm={12} md={12} lg={12}>
          <Button>See All Offices...</Button>
        </Col>
      </Row>
    </Container>
  );
}
