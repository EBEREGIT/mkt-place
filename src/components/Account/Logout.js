import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Logout extends Component {
  state = {
    isLoggingOut: false,
  };

  // logout function
  logout = () => {
    // change isLoggingOut to true
    this.setState({
      isLoggingOut: true,
    });
    // destroy the cookie
    cookies.remove("AUTH-TOKEN", { path: "/" });
    // change isLoggingOut to false
    this.setState({
      isLoggingOut: false,
    });
    // direct the user to the landing page
    this.props.history.push("/");
  };

  render() {
    const { isLoggingOut } = this.state;
    return (
      <Button
        size="sm"
        type="submit"
        variant="outline-danger"
        onClick={() => this.logout()}
      >
        {isLoggingOut ? "Locking" : "Lock Office"}
      </Button>
    );
  }
}

export default withRouter(Logout);