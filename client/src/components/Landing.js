import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <tr>
      <td>{props.item["20"]}</td>
      <td>{props.item["36"]}</td>
      <td>{props.item["22A"]}</td>
      <td>{props.item["22C"]}</td>
      <td>{props.item["32B"]}</td>
      <td>{props.item["33B"]}</td>
      <td>{props.item["36"]}</td>
    </tr>
  );
}

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      records: [],
      errors: {}
    };
  }

  componentDidMount() {
    axios.post(`http://localhost:4001/api/v1/swift/search`).then(res => {
      const records = res.data;
      this.setState({ records });
    });
  }

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
        <hr />
        <h1>Search Data</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>:20</th>
              <th>:36</th>
              <th>:22A</th>
              <th>:22C</th>
              <th>:32B</th>
              <th>:33B</th>
              <th>:36</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Landing;
