import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function NavComponent() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* logo */}
        <Navbar.Brand href="#home">MKTP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Form */}
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          {/* menu */}
          <Nav className="ml-auto">
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Offices</Nav.Link>
            <Nav.Link href="/account" className="btn btn-primary">
              Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
