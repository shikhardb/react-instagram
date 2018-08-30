import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import ImageGrid from "./ImageGrid";
import Logout from "./Logout";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Logout />
                <ImageGrid />
            </div>
        );
    }
}
