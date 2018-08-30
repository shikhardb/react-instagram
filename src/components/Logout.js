import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Logout extends Component {
    logoutUser = () => {
        console.log('Logging out');
        localStorage.removeItem("access_token");
        window.location.href = '/'
        //this.props.history.push("/");
    }
    
    render() {
        return (
            <div className="logout-button text-right">
                <button className="btn btn-info btn-outline" onClick={this.logoutUser.bind(this)}> Logout</button>
            </div>
        );
    }
}
