import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import { Button, Form } from 'react-bootstrap'
import { withAuth0 } from '@auth0/auth0-react';
import "./Recipe.css";
import LoginModal from "./LoginModal";
// import AnimatedButton from 'react-animated-buttons';
class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      userInput: '',
      userEmail: '',
      mealType: '',
      cuisineType: '',
showModal:false,
    };
  }
showModalFun =()=>{

  this.setState({
    showModal:true,
  })
}
handleCloseModal=()=>{
  this.setState({
    showModal:false,
  })
}
functionShow =(item)=>{
  const isAuthenticated=this.props.auth0.isAuthenticated;
  if (isAuthenticated==true){this.AddFav(item)}
  else { this.showModalFun()}

}
  handleMealType = (e) => {
    this.setState({
      mealType: e.target.value
    })
  }

  handleCuisineType = (e) => {
    this.setState({
      cuisineType: e.target.value
    })
  }

  submitHandler = async (event) => {
    event.preventDefault();
    await this.setState({
      userInput: event.target.search.value,
    });
    let url = `http://localhost:3001/recipes?searchQuery=${this.state.userInput}&mealType=${this.state.mealType}&cuisineType=${this.state.cuisineType}`;
    let response = await axios.get(url);
    this.setState({
    recipes: response.data,
    });
    console.log(this.state.userInput);
    // window.location.href = "http://localhost:3000/Home";

  };


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
  AddFav = async (item) => {
    const { user } = this.props.auth0;
    await this.setState({
      userEmail: `${user.email}`
    })
    const email = this.state.userEmail
    const AddData = await axios.post(`${process.env.REACT_APP_PORT}/AddRecipe/${email}`, item)
    this.setState({
      recipes: AddData.data,

    })



  }


  render() {
    return (
      <>
      {/* <Home AddFav={this.AddFav}/> */}
        <div>

          <Form onSubmit={this.submitHandler}  className="search">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className="searchi" type="text" placeholder="Search" name="search" />

              <Form.Select className='mealType' onChange={this.handleMealType} aria-label="Default select example">
                <option className="one">Choose your meal..</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </Form.Select>

              <Form.Select className='mealType' onChange={this.handleCuisineType} aria-label="Default select example">
                <option style={{textAlign:'center' }}>Choose your cuisine..</option>
                <option value="american">American</option>
                <option value="asian">Asian</option>
                <option value="middle eastern">Middle Eastern</option>
                <option value="italian">Italian</option>
              </Form.Select>
            </Form.Group>
            {/* <AnimatedButton color="danger"  textColor="white">Danger</AnimatedButton> */}
            <div className='TheButton'>
            <Button variant="primary" type="submit" className="custom-btn btn-5">
              {" "}
              Submit
            </Button>
            </div>
          </Form>
          {/* <Button onClick={this.getRecipes} variant="primary">Test</Button> */}
        </div>
        <div>
          {this.state.recipes.map((item, index) => { 
            return (
              <>

                <Card key={index} className="RecipeCard" style={{ width: '22rem' }}>

                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.label}</Card.Title>
                    <Card.Text>
                      {item.ingredients.map((element, index) => {
                        return <li key={index}>{element.text}</li>;
                      })}
                    </Card.Text>
                    <Button variant="primary" className="custom-btn btn-5" onClick={()=>this.functionShow(item)}>Add to favorites</Button>
                  </Card.Body>
                </Card>



                
              </>
            );
          })}
          <LoginModal show={this.state.showModal} handleCloseModal={this.handleCloseModal}/>
        </div>
      </>
    );
  }
}

export default withAuth0(Recipe);
