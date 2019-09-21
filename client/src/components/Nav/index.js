import React from "react";

function NavAdmin() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                ADMIN NAV
      </a>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/user">USER</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavAdmin;

// WIP
// import React from 'react';
// import { Nav, Navbar, ListGroup } from 'react-bootstrap';
// import './style.css';

// const AdminNav = () => {
//   return (
//     <div>
//       <Navbar className="Navbar Navbar-default Navbar-static-top">
//         <ListGroup className="Nav nav-pills">
//           <ListGroup><Nav.Link to='/admin/login' activeName="active" className='admin-dash'>Dashboard</Nav.Link></ListGroup>
//           <ListGroup><Nav.Link to='/admin' activeName="active" className='admin-dash'>Dashboard</Nav.Link></ListGroup>
//           <ListGroup><Nav.Link to='/orders' activeName="active" className='admin-orders'>Orders</Nav.Link></ListGroup>
//           <ListGroup><Nav.Link to='/users' activeName="active" className='admin-users'>Users</Nav.Link></ListGroup>
//           <ListGroup><Nav.Link to='/producers' activeClassName="active" className='admin-producers'>Producers</Nav.Link></ListGroup>
//         </ListGroup>
//       </Navbar>
//       {this.props.children}
//     </div>
//   )
// }

// export default AdminNav;