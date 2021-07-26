import React, { Component } from 'react'

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from 'react-bootstrap/Card'
import { Button, Form } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
 class RecipeTry extends Component {
     constructor(props){
         super(props)
         this.state={
         recipes:[]
        }

     }
     componentDidMount=async()=>{
    // console.log(this.props.recipes)
        let url = `http://localhost:3001/recipes?searchQuery=${this.props.userInput}&mealType=${this.props.mealType}&cuisineType=${this.props.cuisineType}`;


        let response = await axios.get(url);
         await this.setState({
          recipes: response.data,
        });
        console.log('jhgfdsa',this.props.userInput,this.props.mealType,this.props.cuisineType)
        console.log(this.state.userInput);
    
     }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default RecipeTry
