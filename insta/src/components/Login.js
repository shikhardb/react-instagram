import React, { Component } from "react";
import InstagramLogin from "react-instagram-login";

const ClientId = "f79babbb849c467d9f5dcc02d15ba1e2";

const responseInstagram = response => {
    console.log(response);
    if (typeof response) {
        localStorage.setItem("key", response);
    }
};

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1 className="App-title">
                    Welcome to React Instagram. Login to search images.
                </h1>
                <InstagramLogin
                    clientId={ClientId}
                    onFailure={responseInstagram}
                    onSuccess={responseInstagram}
                    implicitAuth="true"
                >
                    <span> Login with Instagram</span>
                </InstagramLogin>
            </div>
        );
    }
}
