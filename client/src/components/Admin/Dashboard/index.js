import React, { Component } from 'react';
// import API from '../../utils/AdminAPI';
// import { Modal, Body, Button, ModalDialog, ModalHeader, ModalTitle, ModalBody, ModalFooter } from 'react-bootstrap';
import "./style.css";

export class Dashboard extends Component {
    state = {
        email: "",
        password: "",
        loggedIn: ""
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div dashboard={this.props.getGlobalState('loggedIn', true)}>
                <h1>DASHBOARD</h1>
            </div>
        )
    }
}
export default Dashboard;

