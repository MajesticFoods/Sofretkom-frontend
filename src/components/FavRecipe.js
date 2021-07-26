import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import FavSingleRecipe from './FavSingleRecipe';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import UpdateForm from './UpdateForm';

class FavRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favDataArray: [],
            userEmail: '',
            ShowFavData: false,
            server:process.env.REACT_APP_PORT,


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

        console.log(this.state.favDataArray,this.props.auth0.user.email)
    }

    updateRecipeFun = async (event) => {
        event.preventDefault();

        let recipeFormData = {

            updateLabel: event.target.updateLabel.value,
            userEmail: this.props.auth0.user.email
        }

        // let updatedData = await axios.put(`${this.state.server}/updateRecipe/${this.props.index}`, recipeFormData)

        // this.setState({

        //     favDataArray: updatedData.data,
            
        // })
        console.log(recipeFormData.updateLabel,recipeFormData.userEmail);
    }

    render() {



        return (
            <div>
            <>
                {this.state.ShowFavData &&

                    this.state.favDataArray.map((item, idx) => {
                        return (
                            <FavSingleRecipe 
                                item={item}
                                idx={idx}
                            />
                        )
                    })

                }

            </>
            <UpdateForm updateRecipeFun={this.updateRecipeFun}/>
            </div>
        )
    }
}

export default withAuth0(FavRecipe)
