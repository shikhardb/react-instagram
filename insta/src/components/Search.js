import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Search extends Component {
    render() {
        return (
            <div className="offset-md-4 col-sm-4">
                <div className="input-group mb-2 mr-sm-2">
                    <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Enter tag to search"
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
