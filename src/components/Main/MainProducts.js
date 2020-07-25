import React, { Fragment } from 'react'
import SingleProduct from './SingleProduct';

let products = [];

for (let product = 0; product < 8; product++) {
    products.push(
        <SingleProduct
            productName="Product Name"
            productImage="https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg"
            productDescription="When React sees an element representing a user-defined component."
            officeNumber="08031904145"
        />
    )    
}

export default function MainProducts() {
    return (
        <Fragment>
            {products}
        </Fragment>
    )
}
