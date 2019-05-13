import React, {Component} from 'react';
import {Navbar, Nav,} from 'react-bootstrap';

import "./Navbar.css";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
<Navbar bg="light" expand="lg" class="nav" fixed="top">
  <Navbar.Brand href="#home">Brian Cortez</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="justify-content-end">
    <Nav className="ml-auto">
      <Nav.Link href="#link">Projects</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
      </Navbar>);
  }
}

export default NavbarPage;