import React, { Fragment } from 'react'
import SingleOffice from './SingleOffice';

let offices = [];

for (let office = 0; office < 8; office++) {
    offices.push(
        <SingleOffice
            officeName="Office Name"
            officeImage="https://www.designevo.com/res/templates/thumb_small/shield-3d-letter-h-and-d.png"
            officeNumber="08031904145"
        />
    )    
}

export default function MainOffices() {
    return (
        <Fragment>
            {offices}
        </Fragment>
    )
}
