import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
class FavSingleRecipe extends Component {
constructor(props){
super(props)

this.state={
Recipes:this.props.favDataArray,

index:0,
userEmail:''


}
}

  // DeleteRecipe = async (index) => {

    
  //   console.log(index);
  //   let id=this.state.Recipes[index]._id
  //   const { user ,isAuthenticated} = this.props.auth0;
  //  let paramsobj={
   
  //   userEmail : `${user.email}`

  //  }
  //   // let RecipeData=await axios.delete(`http://localhost:3001/DeleteRecipe/${index}`)
  //   let RecipeData=await axios.delete(`http://localhost:3001/DeleteRecipe/${id}`,{params:paramsobj})
  //   await this.setState({
  //    Recipes:RecipeData.data
  //   })
   
  //   }



  
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
                    {/* <Button onClick={console.log('adasdkjj') }>delete</Button> */}
                    <Button onClick={ ()=>this.props.DeleteRecipe(this.props.idx) }>delete</Button>
                  </Card.Body>
                </Card> 
            </>
        )
    }
}

export default withAuth0 (FavSingleRecipe)

