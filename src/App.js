import React from 'react';
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'
import LoginButton from'./components/LoginButton.js'

import { withAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile'
import Home from"./components/Home";
import Recipe from './components/Recipe';
import FavRecipe from './components/FavRecipe';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from './components/AboutUs';


class App extends React.Component {

//   constructor(props){
//     super(props)
//     this.state={
//       bookarray:[],
//       userEmail: ''
//     }
//   }
  
//   componentDidMount  = async()=>{

//     // const { user } = this.props.auth0;

//     // await this.setState({
//     //   userEmail: user.name
//     // })




//      let url=`http:${process.env.REACT_APP_PORT}/book?ownerName=emkhareez19@gmail.com`
//      let result = await axios.get(url)
//      await this.setState({
//       bookarray:result.data
     
//      })
//      console.log('eam')
// console.log(this.state.bookarray)

//   }  

  render() {
    const { user ,isAuthenticated} = this.props.auth0;
    // console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                
                <Home/>
                

              </Route>
              
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route path="/profile">
              {isAuthenticated ?<Profile/>:<LoginButton/>}
              </Route>
              <Route path="/recipe">
                <Recipe/>
                </Route>
                <Route path="/recipefav">
               {isAuthenticated ?<FavRecipe/>:<LoginButton/>} 
                </Route>
                <Route path="/aboutus">
                  <AboutUs/>
                </Route>

            </Switch>
         
          {/* </IsLoadingAndError> */}
        </Router>
       
     <Footer/>
      </>
    );
  }
}

export default withAuth0(App);