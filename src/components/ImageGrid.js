import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

export default class ImageGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        const access_token = localStorage.getItem("access_token");
        const request_url = `https://api.instagram.com/v1/users/self/media/recent?access_token=${access_token}`;
        axios.get(request_url).then(
            function(response) {
                this.setState({ posts: response.data });
                console.log(response.data);
            }.bind(this)
        );
    }

    render() {
        return (
            <div className="container col-md-12">
                {this.state &&
                    this.state.posts.data && (
                        <div className="images">
                            {this.state.posts.data.map(d => (
                                <figure class="figure col-md-4 col-xs-12">
                                <img src={d.images.low_resolution.url} className="figure-img img-fluid rounded" alt="" />
                                <figcaption class="figure-caption">{d.caption ? d.caption.text : "#noCaption" } <i class="fas fa-heart"></i> {d.likes.count ? d.likes.count : "0"}</figcaption>
                            </figure>
                            ))}
                        </div>
                    )}

            </div>
        );
    }
}
