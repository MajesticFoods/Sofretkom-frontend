import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from "./components/Recipe";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from "./components/LoginButton";
import FavRecipe from "./components/FavRecipe";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";



class App extends Component {
  render() {

    const { user, isAuthenticated } = this.props.auth0;
    return (
      <>

<Header/>
        <Router>



          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {/* {isAuthenticated ? <Header /> : <LoginButton />} */}
<Recipe/>
              

            </Route>

            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route path="/GetFavData">
              {
                <FavRecipe />
              }
            </Route>
            <Route exact path="/Home">
              <Home/>
            </Route>
            <Route path="/Recipe">
              <Recipe/>

            </Route>
          </Switch>
        </Router>











        {/* 
    <LoginButton/>
        <Recipe />
        <FavRecipe/> */}
      </>
    );
  }
}

export default withAuth0(App);
