import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterLinks from "./Footer/FooterLinks";
import FooterAbout from "./Footer/FooterAbout";
import FooterContact from "./Footer/FooterContact";

export default function Footer() {
  return (
    <footer>
      <Container className="text-center">
        {/* Top Footer */}
        <Row>
          <FooterLinks />
          <FooterAbout />
          <FooterContact />
        </Row>
      </Container>

      {/* Lower Footer */}
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} id="lower-footer">
          <h4>2020 | &copy; Market Place</h4>
        </Col>
      </Row>
    </footer>
  );
}
