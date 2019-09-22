import React from "react";

function NavAdmin(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">ADMIN NAV</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/user">USER</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavAdmin;