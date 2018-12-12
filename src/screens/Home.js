import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import AuthService from "../components/AuthService";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.Auth = new AuthService();
  }

  componentDidMount() {
    const user = this.Auth.getProfile();
    this.setState({ user: user });
  }

  handleLogout() {
    this.Auth.logout();
    this.props.history.push("/login");
    console.log(typeof fetch);
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>AXA</h1>
          <p>An app for screening</p>
          {this.state.user ? <p>Welcome {this.state.user.username}</p> : null}
          <Button onClick={() => this.handleLogout()}>Logout</Button>
        </div>
      </div>
    );
  }
}
