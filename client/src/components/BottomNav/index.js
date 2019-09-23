import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

class BottomNav extends Component {
  state = {};
  render() {
    return (
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link componentClass={Link} href="" to="/">
              About Us
            </Nav.Link>
            <Nav.Link href="#">Terms & Conditions</Nav.Link>
            <Nav.Link as={Link} to="/faqs">
              FAQs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default BottomNav;
