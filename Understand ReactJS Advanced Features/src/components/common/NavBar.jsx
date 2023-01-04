import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand as={Link} to="/">Explore React Advance</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/quotes">Quotes</Nav.Link>
          <Nav.Link as={Link} to="/concept">Concept</Nav.Link>
          <Nav.Link as={Link} to="/class-comp-app">ClassCompApp</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
