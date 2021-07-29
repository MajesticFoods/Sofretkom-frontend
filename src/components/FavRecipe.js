import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import UpdateFormModal from './UpdateFormModal';
import Button from 'react-bootstrap/Button'

class FavRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favDataArray: [],
            userEmail: '',
            ShowFavData: false,
            updateLabel: '',
            server: process.env.REACT_APP_PORT,
            index:0,
            idx:0,
      showUpdate:false,
      updateImage:'',
      updateIngredients:''
    
        }
    }

    componentDidMount = async () => {
        const { user } = this.props.auth0;
        await this.setState({
            userEmail: `${user.email}`
        })
        const email = this.state.userEmail
        const FavData = await axios.get(`${process.env.REACT_APP_PORT}/GetFavData/${email}`)
        this.setState({
            favDataArray: FavData.data,
            ShowFavData: true
        })

        console.log(this.state.favDataArray)
    }
    showUpdateRecipeForm=(index)=>{
      this.setState({
        showUpdate: true,
        index:this.state.favDataArray[index]._id,
        updateLabel:this.state.favDataArray[index].label,
        updateImage:this.state.favDataArray[index].image,
        updateIngredients:this.state.favDataArray[index].ingredients
        })
        console.log(this.state.updateIngredients)

      }    

    updateRecipeFun = async (event) => {
        event.preventDefault();
       
        const { user } = this.props.auth0;
        let updateObject = {
           id:this.state.index,
            updateLabel: event.target.updateLabel.value,
            updateImage:event.target.updateImage.value,
            
            updateIngredients: event.target.updateIngredients.value,

    
            userEmail: user.email,
        }
        console.log('mnbvcxz', updateObject.updateIngredients)
        let update = await axios.put(`${this.state.server}/updateRecipe/${this.state.index}`,updateObject);
        console.log(update);
        this.setState({
        favDataArray: update.data,
        
        }
        )
      
        console.log(this.state.updateLabel);
        console.log(updateObject.updateIngredients);

    }
    
        handleClose=()=>{
          this.setState({
            showUpdate:false,
          })
        }
        DeleteRecipe = async (index) => {

    
          console.log(index);
          let id=this.state.favDataArray[index]._id
          const { user ,isAuthenticated} = this.props.auth0;
         let paramsobj={userEmail : `${user.email}`
      
         }
          // let RecipeData=await axios.delete(`http://localhost:3001/DeleteRecipe/${index}`)
          let RecipeData=await axios.delete(`${process.env.REACT_APP_PORT}/DeleteRecipe/${id}`,{params:paramsobj})
          await this.setState({
           favDataArray:RecipeData.data
          })
         
          }
    render() {

        return (
            <>
                {this.state.ShowFavData &&
                    this.state.favDataArray.map((item, index) => {
                        return (
                            <> 
                            <Card key={index} className="RecipeCard" style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                              <Card.Title>{item.label}</Card.Title>
                              <Card.Text>
                                {/* {item.ingredients.map((element, index) => {
                                  return <li key={index}>{element.text}</li>;
                                })} */}
                                {item.ingredients}
                              </Card.Text>
                              <Button className="custom-btn btn-5 logBTN" onClick={()=>this.showUpdateRecipeForm(index)} >Update</Button>
                              <Button className="custom-btn btn-5 logBTN" onClick={ ()=>this.DeleteRecipe(index) }>Delete</Button>

                            </Card.Body>
                          </Card> 
                          
                           </> 
                            )
                    })

                }
                
          <UpdateFormModal show={this.state.showUpdate} updateRecipeFun={this.updateRecipeFun} updateLabel={this.state.updateLabel} updateImage={this.state.updateImage}handleClose={this.handleClose} updateIngredients={this.state.updateIngredients}/>
            </>

        )
    }
}

export default withAuth0(FavRecipe)
