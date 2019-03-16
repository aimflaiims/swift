import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Please select a matching method</h1>
        <div className="row">
          <div className="col-md-3">
            <Link className="btn btn-primary" to="/onetoone">
              {" "}
              One To One
            </Link>
          </div>
          <div className="col-md-3">
            <Link className="btn btn-primary" to="/closefit">
              Closefit
            </Link>
          </div>
          <div className="col-md-3">
            <Link className="btn btn-primary" to="/onetomany">
              One To Many
            </Link>
          </div>
          <div className="col-md-3">
            <Link className="btn btn-primary" to="/nettedtransactions">
              Netted Transactions
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
