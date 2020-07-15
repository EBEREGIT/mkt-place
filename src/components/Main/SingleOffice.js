import React from 'react'
import { Col, Card, ButtonGroup, Button } from "react-bootstrap";

export default function SingleOffice() {
    return (
        <Col xs={12} sm={12} md={3} lg={3}>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src="https://www.designevo.com/res/templates/thumb_small/shield-3d-letter-h-and-d.png"
          width="100%"
          height="150px"
        />
        <Card.Body>
          <Card.Title>Office Name</Card.Title>
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
