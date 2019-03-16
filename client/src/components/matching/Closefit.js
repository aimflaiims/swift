import React, { Component } from "react";
import axios from "axios";

function Item(props) {
  return (
    <tr>
      <td>{props.item.sg_ref}</td>
      <td>{props.item.cref}</td>
      <td>{props.item.matches}</td>
    </tr>
  );
}

class Closefit extends Component {
  constructor() {
    super();
    this.state = {
      matches: [],
      errors: {}
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4001/api/v1/swift/closefit`).then(res => {
      const matches = res.data;
      this.setState({ matches });
    });
  }

  render() {
    return (
      <div class="container">
        <h2>Closefit</h2>
        <p>These are the closefit results:</p>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Our Reference</th>
              <th>Client Reference</th>
              <th>Optional Condition matched</th>
            </tr>
          </thead>
          <tbody>
            {this.state.matches.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Closefit;
