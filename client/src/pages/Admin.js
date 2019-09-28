
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from '../utils/AdminAPI'

export default class Admin extends React.Component {
    state = {
        email: "",
        password: "",
        loggedIn: false
    };

    loginUser = async (loggedIn) => {
        this.setState({ loggedIn })
        console.log(this.state)
        try {
            const User = await API.loginUser(this.state)
            console.log(User)
            this.props.updateGlobalState("User", User.data)
            this.setState({ loggedIn: true })
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
                        </Switch>
                    </div>
                </Router>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}