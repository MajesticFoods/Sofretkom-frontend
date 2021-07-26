import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import FavSingleRecipe from './FavSingleRecipe';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'

 class FavRecipe extends Component {
     constructor(props){
         super(props)
         this.state={
             favDataArray:[],
             userEmail:'',
             ShowFavData:false


         }
     }

       componentDidMount= async()=>{
        const { user } = this.props.auth0;
        await this.setState({
            userEmail: `${user.email}`
          })
          const email = this.state.userEmail
      
           const FavData= await axios.get(`${process.env.REACT_APP_PORT}/GetFavData/${email}`)
           await this.setState({
            favDataArray:FavData.data,

            ShowFavData:true
           }) 

           console.log(this.state.favDataArray)
       }



       DeleteRecipe = async (index) => {

    
        console.log(index);
        let id=this.state.favDataArray[index]._id
        const { user ,isAuthenticated} = this.props.auth0;
       let paramsobj={
       
        userEmail : `${user.email}`
    
       }
        // let RecipeData=await axios.delete(`http://localhost:3001/DeleteRecipe/${index}`)
        let RecipeData=await axios.delete(`http://localhost:3001/DeleteRecipe/${id}`,{params:paramsobj})
        await this.setState({
         favDataArray:RecipeData.data
        })
       
        }
    
    

    render() {



        return (
            <>
            {this.state.ShowFavData &&
            
            this.state.favDataArray.map((item,idx)=>{
                return(
                    <FavSingleRecipe
                    item={item}
                    idx={idx}
                    favDataArray={this.state.favDataArray}
                    DeleteRecipe={this.DeleteRecipe}
                    />
                )
            })
            
            }
                
            </>
        )
    }
}

export default withAuth0 (FavRecipe)
