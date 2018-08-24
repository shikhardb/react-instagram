import React, { Component } from "react";

import logo from "./logo.png";
import "./App.css";
import Search from "./components/Search";
import Login from "./components/Login";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <h1 className="App-title">
                    Welcome to React Instagram. Login to search images.
                </h1>
                <Login />
            </div>
        );
    }
}

export default App;
