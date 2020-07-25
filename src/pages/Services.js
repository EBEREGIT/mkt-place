// external imports
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";

// internal import
import SingleService from "../components/Main/SingleService";

export default function Services() {
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

  //   collect each Service and make them an array
  const services = [];
  for (let eachService in allServices.data) {
    services.push(allServices.data[eachService]);
  }

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Services</h2>
        </Col>

        {/* display all services */}
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
      </Row>
    </Container>
  );
}
