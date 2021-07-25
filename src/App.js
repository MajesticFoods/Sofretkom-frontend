import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from "./components/Recipe";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from "./components/LoginButton";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



class App extends Component {
  render() {
    const { user ,isAuthenticated} = this.props.auth0;
    return (
      <>
    <LoginButton/>
        <Recipe />
      </>
    );
  }
}

export default withAuth0(App);
