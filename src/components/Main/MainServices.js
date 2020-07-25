import React, { Fragment } from "react";
import SingleService from "./SingleService";

let services = [];

for (let service = 0; service < 8; service++) {
  services.push(
    <SingleService
      serviceName="Service Name"
      serviceImage="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg"
      serviceDescription="When React sees an element representing a user-defined component."
      officeNumber="08031904145"
    />
  );
}

export default function MainServices() {
  return <Fragment>{services}</Fragment>;
}
