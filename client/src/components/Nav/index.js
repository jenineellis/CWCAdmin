import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
// import "./style.css";

function NavBar(props) {
    const handleLogout = () => props.updateGlobalState('User', null);
    return (
        
        <div className="nav">
        <Navbar fixed='top'>
        <Nav variant="pills" defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="/inventory">Orders</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="/users">Users</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="/producers">Producers</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav.Item>
        </Nav>
        </Navbar>
        </div>
    );
}
export default NavBar;

//     const handleShow = () => props.updateGlobalState('showModal', true);
//     return (
        
//         <div className="nav-admin">
//         <Navbar fixed='top'>
//         <Nav variant="pills" defaultActiveKey="/admin" as="ul">
//             <Nav.Item as="li">
//                 <Nav.Link href="/admin">Dashboard</Nav.Link>
//             </Nav.Item>
//             <Nav.Item as="li">
//                 <Nav.Link eventKey="/admin/inventory">Orders</Nav.Link>
//             </Nav.Item>
//             <Nav.Item as="li">
//                 <Nav.Link eventKey="/admin/users">Users</Nav.Link>
//             </Nav.Item>
//             <Nav.Item as="li">
//                 <Nav.Link eventKey="/admin/producers">Producers</Nav.Link>
//             </Nav.Item>
//             <Nav.Item as="li">
//                 <Nav.Link onClick={handleShow}>Login</Nav.Link>
//             </Nav.Item>
//         </Nav>
//         </Navbar>
//         </div>
//     );
// }