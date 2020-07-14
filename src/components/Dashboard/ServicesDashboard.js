import React, { Fragment } from "react";
import { Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";

let cardComponent = [];

for (let card = 0; card < 12; card++) {
  cardComponent.push(
    <Col xs={12} sm={12} md={6} lg={6}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg"
          width="100%"
          height="150px"
        />
        <Card.Body>
          <Card.Title>Service Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <ButtonGroup className="mb-2">
            <Button variant="primary">Edit</Button>
            <Button variant="danger">Delete</Button>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer className="text-muted">08031904145</Card.Footer>
      </Card>
    </Col>
  );
}

export default function ServicesDashboard() {
  return (
    <Fragment>
      {/* Total services */}
      <Row>
        <Col className="headings">
          <h1>409</h1>
          <p>Services Uploaded</p>
        </Col>
      </Row>

      {/* All Uploaded Services */}
      <Row>{cardComponent}</Row>
    </Fragment>
  );
}
