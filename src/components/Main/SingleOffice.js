import React from "react";
import { Col, Card, ButtonGroup, Button } from "react-bootstrap";

export default function SingleOffice(props) {
  return (
    <Col xs={12} sm={12} md={6} lg={3}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dunksyqjj/image/upload/v1595679355/LogoMakr_5jlVdJ_vrzwn6.png"
          width="100%"
          height="150px"
        />
        <Card.Body>
          <Card.Title>{props.officeName}</Card.Title>
          <ButtonGroup className="mb-2">
            <Button variant="primary">Call</Button>
            <Button variant="warning">Text</Button>
            <Button variant="success">WhatsApp</Button>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer className="text-muted">{props.officeNumber}</Card.Footer>
      </Card>
    </Col>
  );
}
