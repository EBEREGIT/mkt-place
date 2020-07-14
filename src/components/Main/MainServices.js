import React, { Fragment } from 'react'
import SingleService from './SingleService';

let services = [];

for (let service = 0; service < 8; service++) {
    services.push(
        <SingleService/>
    )    
}

export default function MainServices() {
    return (
        <Fragment>
            {services}
        </Fragment>
    )
}
