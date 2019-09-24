import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from '../utils/AdminAPI'
import Dashboard from '../components/Admin/Dashboard';

export default class Admin extends React.Component {
    state = {
        loggedIn: false
    };

    loginUser = async (loggedIn) => {
        this.setState({loggedIn})
        console.log(this.state)
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
                <div>
                </div>
            )
        }
    }
}