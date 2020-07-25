import React, { Fragment } from 'react'
import SingleOffice from './SingleOffice';

let offices = [];

for (let office = 0; office < 8; office++) {
    offices.push(
        <SingleOffice />
    )    
}

export default function MainOffices() {
    return (
        <Fragment>
            {offices}
        </Fragment>
    )
}
