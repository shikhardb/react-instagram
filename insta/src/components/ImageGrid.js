import React, { Component } from "react";
import Image from "./Image";

export default class ImageGrid extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div className="photo-grid">
                <Image />
            </div>
        );
    }
}
