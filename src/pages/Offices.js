// external imports
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// internal import
import SingleOffice from "../components/Main/SingleOffice";

export default function Offices() {
  // set all office state
  const [allOffices, setOffices] = useState([]);

  //   make API call
  useEffect(() => {
    axios("https://afia.sjcmsportal.com/api/offices")
      .then((result) => {
        setOffices(result);
      })
      .catch((error) => {
        error = Error;
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className="headings">
          <h2>Offices</h2>
        </Col>

        {/* all offices */}
        {allOffices.data &&
        allOffices.data.length > 0 &&
        allOffices.data.map((office) => (
          <SingleOffice
            officeName={office.name}
            officeImage={office.photo}
            officeDescription={office.description}
            officeNumber={office.phone}
          />
        ))}
      </Row>
    </Container>
  );
}
