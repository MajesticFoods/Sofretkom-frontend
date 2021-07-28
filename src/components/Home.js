import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recipe.css";
import Recipe from "./Recipe";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form , Card} from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import FavRecipe from "./FavRecipe";
import LoginModal from "./LoginModal";

import food1 from'./Images/food1.jpeg'
import food2 from'./Images/food2.jpeg'
import food3 from'./Images/food3.jpeg'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel'
import ReactDOM from "react-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBIcon,
  MDBBtn,MDBView
} from 'mdbreact';

class Home extends Component {
 
    render(){
      
        return(
            <>
            <div>
           <img src="https://i.pinimg.com/originals/7f/d4/42/7fd442a6e7b8c20e5cea197f7c37a832.gif"className="imgBody"></img> 

           <div class="sofretkomheader">
            <span class="sofretkomtitle">Sofretkom</span>
           <span class="space"></span> “Sofretkom The place where you find the best recipes and food”
        </div>

            </div>

{/* title img */}

<div class="container">
        <span class="welcome">Quick overview</span>
        <span class="muzile">of our website</span>
    </div>

{/* three imges */}
<div className='allimg'>

            <div className='line' >
       
        <div className="container1">
          <img src={food1} alt="Avatar" className="images" />
         
          <div className="overlay">
            <div className="text">Search for any recipe </div>
          </div>
        </div>
      </div>


      
      <div className='line'>
       
       <div className="container2">
         <img className='images' src={food2} />
        
         <div className="overlay">
           <div className="text">Make your favorite recipe blog </div>
         </div>
       </div>
     </div>


     
     <div className='line'>
       
       <div className="container3">
         <img className='images'  src=
         {food3} />
        
         <div className="overlay">
           <div className="text">Enjoy your time of food and feel like home</div>
         </div>
       </div>
     </div>
     </div>

     {/* ---------------------- pra */}
     {/* <div>
       <p className='prahome'>
       Hey food bloggers,eaters and cookers,this is your website"SOFRETKOM",the home of all recipes where you can find anything you want about food,making your own blog with your favorite recipes,and even making you feel hungry.
       search for any recipe and feel like home because this is the home of recipes,enjoy your time.
       </p>
     </div> */}

{/* <div>
<h2 >Our vesion</h2>
</div> */}



<section className='allpra'>
  <div class="intro">
    <h1>Our vision</h1>
    <p> Hey food bloggers,eaters and cookers,<br></br>this is your website"SOFRETKOM",the home of all recipes where you can find anything you want about food,making your own blog with your favorite recipes,and even making you feel hungry.
       search for any recipe and feel like home because this is the home of recipes,enjoy your time.</p>
   
  </div>
</section>
            </>
        )
     
    

}
}

export default withAuth0 (Home);