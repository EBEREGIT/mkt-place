import React from 'react'
import { Col, Card, ButtonGroup, Button } from "react-bootstrap";

export default function MainProducts() {
    return (
        <Col xs={12} sm={12} md={3} lg={3}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src="https://assets.entrepreneur.com/content/3x2/2000/how-read-website-source-code.jpg"
          width="100%"
          height="150px"
        />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <ButtonGroup className="mb-2">
            <Button variant="primary">Call</Button>
            <Button variant="warning">Text</Button>
            <Button variant="success">WhatsApp</Button>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer className="text-muted">08031904145</Card.Footer>
      </Card>
    </Col>
    )
}
