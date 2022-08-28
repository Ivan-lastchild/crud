import React from "react";
import "./headerApp.css";
import { Link } from "react-router-dom";

export default function HeaderApp() {
    return (
        <div className="headerApp">
            <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/users/create">Add the user</Link>
            </div>
        </div>
    );
}
