import React, { Component } from "react";
import InstagramLogin from "react-instagram-login";

const ClientId = "f79babbb849c467d9f5dcc02d15ba1e2";

export default class Login extends Component {
    responseInstagram = response => {
        console.log(response);
        if (typeof response) {
            localStorage.setItem("access_token", response);
            this.props.history.push("/home");
        }
    };

    render() {
        return (
            <div>
                <h1 className="App-title">
                    Welcome to React Instagram. Login to search images.
                </h1>
                <InstagramLogin
                    clientId={ClientId}
                    onFailure={this.responseInstagram}
                    onSuccess={this.responseInstagram}
                    implicitAuth="true"
                    scope="public_content"
                >
                    <span> Login with Instagram</span>
                </InstagramLogin>
            </div>
        );
    }
}
