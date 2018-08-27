import React, { Component } from "react";
import axios from "axios";

import ImageGrid from "./ImageGrid";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            hashtag: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ hashtag: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const access_token = localStorage.getItem("access_token");

        const request_url = `https://api.instagram.com/v1/users/self/media/recent?access_token=${access_token}`;

        axios.get(request_url).then(res => {
            const data = res.data;
            console.log(data);
        });
    }

    render() {
        return (
            <div className="offset-md-3 col-sm-6">
                <form
                    className="input-group mb-2 mr-sm-2"
                    onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Enter tag to search"
                        value={this.state.hashtag}
                        onChange={this.onChange}
                    />
                    <div className="input-group-append">
                        <input
                            className="btn btn-outline-secondary"
                            type="submit"
                            value="Search"
                        />
                    </div>
                </form>

                <ImageGrid data={this.data} />
            </div>
        );
    }
}
