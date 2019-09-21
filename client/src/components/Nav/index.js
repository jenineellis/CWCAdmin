import React from "react";
import Login from '../LoginForm/';

function Nav(props) {
    return (
        <div>
            {/* Modal stuff here */}
            <div className="modal fade" id="modalLRForm">
                <Login updateGlobalState={props.updateGlobalState} />
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                </a>

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {/* add button portion */}
                        <a className="nav-link" href="" className="btn btn-rounded btn-lgmy-3" id="index-login" data-toggle="modal"
                            data-target="#modalLRForm">Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
