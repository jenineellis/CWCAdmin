import React, { Component } from 'react';
import API from '../../utils/AdminAPI';
import { Modal, Form } from 'react-bootstrap';
const loginError = "";

class Login extends Component {
    state = {
        email: "",
        password: "",
        loggedIn: "",
        showLoginError: false
    };

    constructor(props) {
        super(props)
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleHide() {
        this.props.updateGlobalState('showModal', false);
    }


    loginUser = async () => {
        try {
            const User = await API.loginUser(this.state)
            console.log(User.response)
            this.props.updateGlobalState("User", User.data)
            this.props.updateGlobalState("loggedIn", true)
            this.props.updateGlobalState('showModal', false)
            this.props.updateGlobalState('loginError', User.data)
        } catch (error) {
            this.props.updateGlobalState("loggedIn", false)
            this.props.updateGlobalState('showModal', true)
            this.props.updateGlobalState('loginError', true)
        }
    };

    render() {
        const handleHide = () => { this.props.updateGlobalState("showModal", false) };
        return (
            <div>
                <Modal show={this.props.getGlobalState('showModal')} onHide={handleHide} >
                    <Modal.Header closeButton>
                        <Modal.Title className="justify-content-around">Sign in</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-c-tabs">
                            <div className="tab-content">
                                <Form>
                                    <div className="tab-pane fade in show active" id="panel1" role="tabpanel">
                                        <label>Incorrect Email and/or Password</label>
                                        <input type="email" id="emaillogin" className="form-control mb-4" placeholder="E-mail" autoComplete="username" name="email" onChange={this.handleChange} />
                                        <input type="password" id="password" className="form-control mb-4" placeholder="Password" autoComplete="current-password" name="password" onChange={this.handleChange} />
                                        <div className="d-flex justify-content-around">
                                            <div>
                                                <a href="#">Forgot password?</a>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-around">
                        <button onClick={handleHide}>Close</button>
                        <button onClick={this.loginUser}>Login</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    };
}

export default Login;