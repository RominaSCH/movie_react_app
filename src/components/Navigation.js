import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (<div className="nav">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
    </div>);
}
//Navigation no props, magical props..
export default Navigation;