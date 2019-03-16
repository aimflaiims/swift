import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OneToOne from "./components/matching/OneToOne";
import Closefit from "./components/matching/Closefit";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/onetoone" component={OneToOne} />
            <Route exact path="/closefit" component={Closefit} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
