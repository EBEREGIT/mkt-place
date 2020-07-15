import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SingleProduct from "../components/Main/SingleProduct";

let products = [];

for (let product = 0; product < 40; product++) {
  products.push(<SingleProduct />);
}

export default function Products() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Products</h2>
        </Col>
        {products}
      </Row>
    </Container>
  );
}
