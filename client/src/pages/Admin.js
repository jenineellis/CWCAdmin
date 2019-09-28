
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from '../utils/AdminAPI'

export default class Admin extends React.Component {
    state = {
        email: "",
        password: "",
        useUserState: false
    };

    loginUser = async (useUserState) => {
        this.setState({ useUserState })
        console.log(this.state)
        try {
            const User = await API.loginUser(this.state)
            console.log(User)
            this.props.updateGlobalState("User", User.data)
            this.setState({ useUserState: true })
            console.log(this.state)
        } catch (error) {
            console.log(error.message)
            this.setState({ useUserState: false })
            console.log(this.state)
        }
    };

    render() {
        if (this.state.useUserState) {
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