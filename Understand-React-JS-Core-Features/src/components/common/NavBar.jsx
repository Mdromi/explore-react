import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="xl">
      <Container>
        <Navbar.Brand as={Link} to="/">Explore React</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/from">From</Nav.Link>
          <Nav.Link as={Link} to="/tictac">TicTac</Nav.Link> 
          <Nav.Link as={Link} to="/todo">Todo</Nav.Link> 
          <Nav.Link as={Link} to="/poll">Poll</Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
