import React from 'react';
import {
  Navbar, Form, FormControl, Button, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="gradient-color">
      The Gallery Pic
    </Navbar.Brand>
    <Nav className="mr-lg-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Project">Project</Nav.Link>
      <Nav.Link as={Link} to="/About">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-lg-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
);

export default NavMenu;
