import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from "./components/Recipe";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
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
      <Router>
        {/*<IsLoadingAndError>*/}
            <Switch>
              <Route exact path="/">
                {isAuthenticated ?   <Recipe /> : <LoginButton />  }
                </Route>
             
              <Route exact path="/Recipe">
              <LoginButton/>
             
              </Route>
            </Switch>
         
        {/*</IsLoadingAndError>*/}
      </Router>
    </>
 
    
   
        
    
    );
  }
}

export default withAuth0(App);
