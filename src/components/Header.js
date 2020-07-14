import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Jumbotron fluid>
        <Container>
          <h1>Enugu Market Place</h1>
          <p>
            ...Connecting you to your local market...
          </p>
        </Container>
      </Jumbotron>
    </header>
  );
}
