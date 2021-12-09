import React from "react";
import "../App.css";
import cart from "../images/cart.png";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import { NavLink, Link } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand p-3" href="#">
          React User
        </a>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <HomeIcon style={{ marginLeft: 25, color: "white" }} />
              <NavLink className="nav-link " exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <CallIcon style={{ marginLeft: 28, color: "white" }} />
              <NavLink className="nav-link " exact to="/about">
                About
              </NavLink>
            </li>
          </ul>
          {/* <div className="one d-flex">
            <img src={cart} />
            <p>10</p>
          </div> */}
          <Link to="/adduser" className="btn btn-outline-light">
            Add User
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
