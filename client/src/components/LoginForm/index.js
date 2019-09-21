import React, { Component } from 'react';
import API from '../../utils/AdminAPI'

class Login extends Component {
    state = {
        email: "",
        password: "",
        loggedIn: ""
    };

    constructor(props){
        super(props)
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    loginUser = async () => {
        console.log(this.state)
        try {
            const User = await API.loginUser(this.state)
            this.props.updateGlobalState("User", User.data)
            this.props.updateGlobalState("loggedIn", true)
            console.log(this.state)
        } catch (error) {
            console.log(error.message)
            this.props.updateGlobalState("loggedIn", false)
            console.log(this.state)
        }
    };

    render() {
        return (
            <div>
                <div id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog cascading-modal" role="document">
                        <div className="modal-content">
                            <div className="modal-c-tabs">
                                <div className="tab-content">
                                    <div className="tab-pane fade in show active" id="panel1" role="tabpanel">
                                        <div className="h4 mb-4">Sign in</div>
                                        <input type="email" id="emaillogin" className="form-control mb-4" placeholder="E-mail" name="email" onChange={this.handleChange}/>
                                        <input type="password" id="passlogin" className="form-control mb-4" placeholder="Password" name="password" onChange={this.handleChange} />
                                        <div className="d-flex justify-content-around">
                                            <div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="consent" />
                                                    <label className="custom-control-label" for="consent">Remember me</label>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="#">Forgot password?</a>
                                            </div>
                                        </div>
                                        <button className="btn btn-#1B75BB btn-block my-4" id="login" type="submit" onClick={this.loginUser}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;