import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  handleLogout() {
    //Implement logout here
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>AXA</h1>
          <p>An app for screening</p>
          <Button onClick={() => this.handleLogout()}>Logout</Button>
        </div>
      </div>
    );
  }
}
