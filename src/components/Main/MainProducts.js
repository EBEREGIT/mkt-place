// external imports
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

// internal import
import SingleProduct from "./SingleProduct";

export default function MainProducts() {
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
    <Fragment>
      {products[0] &&
        products[0].length > 0 &&
        products[0].map((product) => (
          <SingleProduct
            productName={product.name}
            productImage={product.photo}
            productDescription={product.description}
            officeNumber={product.phone}
          />
        ))}
    </Fragment>
  );
}
