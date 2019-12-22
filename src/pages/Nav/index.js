import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navigation = (props, context) => (
  <div className="navigation navbar-default navbar-fixed-top">
    <div className="navbar row align-items-center">
      <Link className="col" to="/"><img src="logo.png"></img></Link>
      <Link className="col-1" to="/board">Board</Link>
      <Link className="col-1" to="/order">Order</Link>
      <Link className="col-1" to="/product">Product</Link>
      <Link className="col-1" id="login" to="/login">Login</Link>
    </div>
  </div>
);

export default Navigation;