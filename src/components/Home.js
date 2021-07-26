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
class Home extends Component {
    render(){
        return(
            <div>
                
            </div>
        )
    }
}



export default withAuth0 (Home);