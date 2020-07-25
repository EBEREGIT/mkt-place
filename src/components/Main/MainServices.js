// external imports
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

// internal import
import SingleService from "./SingleService";

export default function MainServices() {
  // set all Service state
  const [allServices, setServices] = useState([]);

  //   make API call
  useEffect(() => {
    axios("https://afia.sjcmsportal.com/api/all-services")
      .then((result) => {
        setServices(result);
      })
      .catch((error) => {
        error = Error;
      });
  }, []);

  console.log(allServices.data);

  //   collect each Service and make them an array
  const services = [];
  for (let eachService in allServices.data) {
    services.push(allServices.data[eachService]);
  }

  return (
    <Fragment>
      {services[0] &&
        services[0].length > 0 &&
        services[0].map((service) => (
          <SingleService
            serviceName={service.name}
            serviceImage={service.photo}
            serviceDescription={service.description}
            officeNumber="08031904145"
          />
        ))}
    </Fragment>
  );
}
