import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Form } from 'react-bootstrap'
import UpdateFormModal from './UpdateFormModal';
import FavRecipe from './FavRecipe';

export class FavSingleRecipe extends Component {

  constructor (props){
    super( props);
   this.state= {
      index:0,
      showUpdate:false,
      updateLabel:'',
      updateIngredients:[]
     

        }
  }
  showUpdateRecipeForm=(idx)=>{
    this.setState({
      showUpdate: true,
      index:idx,
      updateLabel:this.props.item[idx].label,
      updateIngredients: this.props.item[idx].ingredientse,
      })
   
    }
    
   
    handleClose(){
      this.setState({
        showUpdate:false,
      })
    }
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
                    <Button onClick={()=>this.showUpdateRecipeForm(this.props.idx)} >Update</Button>
                  </Card.Body>
                </Card> 
                <FavRecipe      index={this.state.index}/>
                <UpdateFormModal updateLabel={this.state.updateLabel} updateIngredients={this.state.updateIngredients} handleClose={this.state.handleClose} show ={this.state.showUpdate}/>
            </>
        )
    }
}

export default withAuth0 (FavSingleRecipe)

