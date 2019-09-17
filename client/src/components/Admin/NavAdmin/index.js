import React from "react";

function NavAdmin() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Admin Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#link">Orders</Nav.Link>
          <Nav.Link href="#link">Users</Nav.Link>
          <Nav.Link href="#link">Producers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavAdmin;
