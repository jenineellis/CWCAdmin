import React from 'react';
import API from '../utils/AdminAPI'

export default class Login extends React.Component {
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