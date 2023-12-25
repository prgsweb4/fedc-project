
import littlelemon_logo from "../assets/images/logo.png";
import {Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import "../App.css"


function Nav() {
    const handleScroll = () => {
        const ele = document.querySelector("#about");
        if (ele) {
          ele.scrollIntoView({ behavior: "smooth" });
        }
      };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img
              src={littlelemon_logo}
              width="160"
              height="60"
              className="d-inline-block align-center"
              alt=""
            />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                 <Link className="nav-link" to="/" onClick={handleScroll}>
                  About
                </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/booking">Reservation</a>
            </li>
          </ul>
            <a className="btn btn-success" href="/login">Login</a>
        </div>
      </div>
    </nav>
    )
}
export default Nav;