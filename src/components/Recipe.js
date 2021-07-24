import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import { Button, Form } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';

import './Recipe.css'

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      userInput :'',
      userEmail:'',
      recipeArray:[]
      
    };
  }
  submitHandler = async (event) => {
    event.preventDefault();
    
   
    await this.setState({

        userInput : event.target.search.value

    })
    let url = `http://localhost:3001/recipes?searchQuery=${this.state.userInput}`;
    
    let response = await axios.get(url);
    this.setState({
      recipes: response.data,
    });
    console.log(this.state.userInput);

}

  // getRecipes = async (event) => {
  //   event.preventDefault();
  //   let url = `http://localhost:3001/recipes?searchQuery=${this.state.input}`;
  //   let response = await axios.get(url);
  //   this.setState({
  //     recipes: response.data,
  //   });
  //   console.log(this.state.recipes);
  // };
 

  //add Favorite function
//http://localhost:3001/AddRecipe
  AddFav = async (item)=>{
    const { user } = this.props.auth0;

    await this.setState({
      userEmail: `${user.email}`
    })
const obj={
   Email:this.state.userEmail,
   item:item
}

   
const AddData=await axios.post(`${process.env.REACT_APP_PORT}/AddRecipe`,obj)

this.setState({

  recipeArray:AddData.data
})


  }
  

  render() {
    return (
      <>

        <div>
          <Form onSubmit={this.submitHandler}>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control type="text" placeholder="Search" name="search" />

            </Form.Group>

            <Button variant="primary" type="submit"> Submit</Button>
          </Form>
          {/* <Button onClick={this.getRecipes} variant="primary">Test</Button> */}

        </div>
        <div>
          {this.state.recipes.map((item,index) => {
            return (
              <>
                <Card key = {index} className="RecipeCard" style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.label}</Card.Title>
                    <Card.Text>
                      {item.ingredients.map((element,index) => {
                        return <li key ={index}>{element.text}</li>;
                      })}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>this.AddFav(item)}>Add to favorites</Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}

        </div>
      </>
    );
  }
}

export default withAuth0(Recipe);
