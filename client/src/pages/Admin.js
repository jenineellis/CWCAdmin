import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from '../utils/AdminAPI'
import Dashboard from '../components/Admin/Dashboard';

export default class Login extends React.Component {
    state = {
        email: "",
        password: "",
        loggedIn: ""
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
            this.setState({loggedIn: true})
            console.log(this.state)
        } catch (error) {
            console.log(error.message)
            this.setState({ loggedIn: false })
            console.log(this.state)
        }
    };

    render() {
                if (this.state.loggedIn) {
            return (
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/admin" component={Dashboard} />
                        </Switch>
                    </div>
                </Router>
            )
        } else {
            return (
                <>
                    Email: <input type="text" name="email" onChange={this.handleChange} /><br />
                    Password: <input type="text" name="password" onChange={this.handleChange} /><br />
                    <button onClick={this.loginUser}>Login</button>
                </>
            )
        }
    }
}