import React from 'react';
import API from '../utils/AdminAPI'


export default class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    loginUser = async () => {
        console.log(this.state)
        try {
            const User = await API.loginUser(this.state)
            this.props.updateGlobalState("User", User.data)
        } catch (error) {
            console.log(error.message)
        }
    };

    render() {
        return (
            <>
                Email: <input type="text" name="email" onChange={this.handleChange} /><br />
                Password: <input type="text" name="password" onChange={this.handleChange} /><br />
                <button onClick={this.loginUser}>Login</button>
            </>
        )
    };
}
