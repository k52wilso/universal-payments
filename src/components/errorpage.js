import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <h1>404</h1>
                <h4>This page does not exist</h4>
                <Link to="/dashboard">
                    Return to Dashboard
                </Link>
            </div>
        );
    }
}

export default ErrorPage;