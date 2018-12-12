import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import AuthService from "../components/AuthService";
import IdleTimer from "react-idle-timer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
    this.state = {
      user: null,
      tokenTimer: null
    };

    this.Auth = new AuthService();
  }

  componentDidMount() {
    const user = this.Auth.getProfile();
    this.setState({ user: user });
  }

  _onAction(e) {
    console.log("user did something", e);
    //TO IMPLEMENT REFRESH TOKEN
  }

  _onActive(e) {
    console.log("user is active", e);
    console.log("time remaining", this.idleTimer.getRemainingTime());
  }

  _onIdle(e) {
    console.log("user is idle", e);
    console.log("last active", this.idleTimer.getLastActiveTime());
    this.handleLogout();
  }

  _handleLogout() {
    this.Auth.logout();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="Home">
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={1000 * 60 * 15}
        />
        <div className="lander">
          <h1>AXA</h1>
          <p>An app for screening</p>
          {this.state.user ? <p>Welcome {this.state.user.username}</p> : null}
          <Button onClick={() => this._handleLogout()}>Logout</Button>
        </div>
      </div>
    );
  }
}
