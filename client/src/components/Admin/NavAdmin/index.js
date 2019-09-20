import React from 'react';
import { Nav, Navbar, Image, Card } from 'react-bootstrap';
import './style.css';

function NavAdmin() {
  return (

    <Navbar className='login'>
      <Card.Header className='company-info'>
        <Card.Img className='company-logo' variant="top" src='/images/logo-bw194x100.png' rounded />
      </Card.Header>
        <Nav>
        <Nav.Link className='admin-links' href='/'>Dashboard</Nav.Link>
          <Nav.Link className='admin-links' href='/orders'>Orders</Nav.Link>
          <Nav.Link className='admin-links' href='/users'>Users</Nav.Link>
          <Nav.Link className='admin-links' href='/producers'>Producers</Nav.Link>
        </Nav>
    </Navbar>

  );
}

export default NavAdmin;
