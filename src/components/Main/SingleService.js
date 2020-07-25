import React from "react";
import { Col, Card, ButtonGroup, Button } from "react-bootstrap";

export default function SingleService(props) {
  return (
    <Col xs={12} sm={12} md={6} lg={3}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={props.serviceImage}
          width="100%"
          height="150px"
        />
        <Card.Body>
          <Card.Title>{props.serviceName}</Card.Title>
          <Card.Text>{props.serviceDescription}</Card.Text>
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
