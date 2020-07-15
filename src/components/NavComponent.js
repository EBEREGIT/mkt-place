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
        <Navbar.Brand href="/">MKTP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Form */}
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Search Market" className="mr-sm-2" />
            <Button>Search</Button>
          </Form>
          {/* menu */}
          <Nav className="ml-auto">
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/offices">Offices</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
