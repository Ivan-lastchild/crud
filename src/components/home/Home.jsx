import React from "react";
import { Link } from "react-router-dom";
import "./home.css";


export default function Home() {
    

    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/users"><h2>See more about our users</h2></Link>
        </div>
           
    );
}
