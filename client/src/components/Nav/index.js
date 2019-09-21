import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                NAV
      </a>

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/user">USER</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;