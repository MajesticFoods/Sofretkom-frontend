import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import FavSingleRecipe from './FavSingleRecipe';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import UpdateFormModal from './UpdateFormModal';
class FavRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favDataArray: [],
            userEmail: '',
            ShowFavData: false,
            updateLabel: '',
            updateIngredients: [],
            userEmail: '',
            server: process.env.REACT_APP_PORT,
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

    updateRecipeFun = async (event) => {
        event.preventDefault();
        let updateObject = {
            updateLabel: event.target.updateLabel.value,
            // updateIngredients: event.target.updateIngredients.value,
            userEmail: this.props.auth0.user.email,
        }
        let update = await axios.put(`${this.state.server}/updateRecipe/${this.props.index}`, updateObject);
        this.setState({
            ShowFavData: true,
            favDataArray: update.data
        }
        )
    }



    render() {



        return (
            <>
                {this.state.ShowFavData &&

                    this.state.favDataArray.map((item, idx) => {
                        return (
                            <>
                                <FavSingleRecipe
                                    item={item}
                                    idx={idx}
                                   
                                />
                               </> 
                            )
                    })

                }
                {/* <UpdateFormModal updateRecipeFun={this.updateRecipeFun} /> */}
            </>

        )
    }
}

export default withAuth0(FavRecipe)
