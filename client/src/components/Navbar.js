import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            SWIFT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/onetoone">
                  {" "}
                  One To One
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/closefit">
                  {" "}
                  Closefit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/onetomany">
                  {" "}
                  One To Many
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nettedtransactions">
                  {" "}
                  Netted Transactions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
