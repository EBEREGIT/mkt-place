import React, { Fragment } from 'react'
import SingleProduct from './SingleProduct';

let products = [];

for (let product = 0; product < 8; product++) {
    products.push(
        <SingleProduct />
    )    
}

export default function MainProducts() {
    return (
        <Fragment>
            {products}
        </Fragment>
    )
}
