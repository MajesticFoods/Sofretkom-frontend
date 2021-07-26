import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';
export class FavSingleRecipe extends Component {
    render() {
        return (
            <>
               
               <Card key={this.props.idx} className="RecipeCard" style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={this.props.item.image} />
                  <Card.Body>
                    <Card.Title>{this.props.item.label}</Card.Title>
                    <Card.Text>
                      {this.props.item.ingredients.map((element, index) => {
                        return <li key={index}>{element.text}</li>;
                      })}
                    </Card.Text>
                    
                  </Card.Body>
                </Card> 
            </>
        )
    }
}

export default withAuth0 (FavSingleRecipe)

