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

import "./Home.css"
class Home extends Component {
    render(){
        return(
            <div>
           <img src="https://i.pinimg.com/originals/7f/d4/42/7fd442a6e7b8c20e5cea197f7c37a832.gif"className="imgBody"></img>  
            </div>
        )
    }
}

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //   recipes: [],
    
//         //   userInput: '',
//         //   userEmail: '',
//         //   mealType: '',
//         //   cuisineType: '',
//         //   showModal:false
    
//         };
//       }
      
//       //this.props.auth0.isAuthenticated?<FavRecipe/>:<showModalFun>

//     //   showModelFun =()=>{
//     //       this.setState({
//     //         showModal:true
//     //       })
//     //   }
//     //   hideModalFun =()=>{
//     //       this.setState({

//     //           showModal:false
//     //       })
//     //   }
     
    
//     //   submitHandler = async (event) => {
//     //     event.preventDefault();
//     //     await this.setState({
//     //       userInput: event.target.search.value,
//     //       mealType: event.target.meal.value,
//     //       cuisineType: event.target.cuisine.value
//     //     });
//     //     let url = `http://localhost:3001/recipes?searchQuery=${this.state.userInput}&mealType=${this.state.mealType}&cuisineType=${this.state.cuisineType}`;
//     //     let response = await axios.get(url);
//     //     this.setState({
//     //     recipes: response.data,
//     //     });
//     //     console.log(this.state.userInput,this.state.mealType,this.state.cuisineType);
//     //     console.log(this.state.recipes)
//     //      window.location.href = "http://localhost:3000/Recipe";
    
//     //   };    
// render(){
//     return(
//         <div>
//           {/* <Form onSubmit={this.submitHandler}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Control type="text" placeholder="Search" name="search" />

//               <Form.Select className='mealType' name='meal' aria-label="Default select example">
//                 <option>Choose your meal..</option>
//                 <option value="breakfast">Breakfast</option>
//                 <option value="lunch">Lunch</option>
//                 <option value="dinner">Dinner</option>
//               </Form.Select>

//               <Form.Select className='mealType' name='cuisine' aria-label="Default select example">
//                 <option>Choose your cuisine type..</option>
//                 <option value="american">American</option>
//                 <option value="asian">Asian</option>
//                 <option value="middle eastern">Middle Eastern</option>
//                 <option value="italian">Italian</option>
//               </Form.Select>
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               {" "}
//               Submit
//             </Button>
//           </Form> */}
//           {/* {this.state.recipes.map((item, index) => { 
//             return (
//               <>

//                 <Card key={index} className="RecipeCard" style={{ width: '22rem' }}>

//                   <Card.Img variant="top" src={item.image} />
//                   <Card.Body>
//                     <Card.Title>{item.label}</Card.Title>
//                     <Card.Text>
//                       {item.ingredients.map((element, index) => {
//                         return <li key={index}>{element.text}</li>;
//                       })}
//                     </Card.Text>
//                     <Button variant="primary" onClick={this.props.addFav}>Add to favorites</Button>
//                   </Card.Body>
//                 </Card>
//               </>
//             );
//           })} */}
//           </div>
           
//     )
// }

export default withAuth0 (Home);