import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Recipe.css'

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  getRecipes = async (req, res) => {
    let url = `http://localhost:3001/recipes?searchQuery=chicken`;
    let response = await axios.get(url);
    this.setState({
      recipes: response.data,
    });
    console.log(this.state.recipes);
  };

  render() {
    return (
        <>
        <div>
          <button onClick={this.getRecipes}>Test</button>
          </div>
      <div>
          {this.state.recipes.map((item) => {
            return (
              <>
        <Card className="RecipeCard" style={{ width: '22rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.label}</Card.Title>
            <Card.Text>
            {item.ingredients.map((element) => {
                    return <li>{element.text}</li>;
                  })}
            </Card.Text>
            <Button variant="primary">Add to favorites</Button>
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

export default Recipe;
