// external imports
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

// internal import
import SingleProduct from "../components/Main/SingleProduct";

export default function Products() {
  // set all product state
  const [allProducts, setProducts] = useState([]);

  //   make API call
  useEffect(() => {
    axios("https://afia.sjcmsportal.com/api/all-products")
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        error = Error;
      });
  }, []);

  //   collect each product and make them an array
  const products = [];
  for (let eachProduct in allProducts.data) {
    products.push(allProducts.data[eachProduct]);
  }

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Products</h2>
        </Col>

        {/* show all products */}
        {products[0] &&
          products[0].length > 0 &&
          products[0].map((product) => (
            <SingleProduct
              productName={product.name}
              productImage={product.photo}
              productDescription={product.description}
              officeNumber="08031904145"
            />
          ))}
      </Row>
    </Container>
  );
}
