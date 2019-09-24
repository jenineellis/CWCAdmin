import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import Login from '../../LoginForm';
import "./style.css";

function NavAdmin(props) {
    return (
        <div className="nav-admin">
        <Navbar fixed='top'>
        <Nav variant="pills" defaultActiveKey="/admin" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/admin">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="/admin/inventory">Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="/admin/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="/admin/producers">Producers</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="/admin/login">Login</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>
        </div>
    );
}

export default NavAdmin;