import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Search from "./components/Search";
import Login from "./components/Login";
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Search} />
                </div>
            </Router>
        );
    }
}

export default App;
