import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Button, Form } from 'react-bootstrap'
import FavRecipe from './FavRecipe';
import UpdateForm from './UpdateForm';


export class FavSingleRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      updateLabel: '',
      showForm: false
    }
  }

  handelClose = () => {
    this.setState({
      showForm: false,
    })
  }

  showUpdateForm = async (index) => {

    await this.setState({
      showForm: true,
      index: index,
      updateLabel: this.props.item.label,
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

            <Button variant="primary" onClick={() => this.showUpdateForm(this.props.idx)}>
              update
            </Button>

          </Card.Body>
        </Card>
        {/* <FavRecipe index={this.state.index} /> */}
        <UpdateForm updateLabel={this.state.updateLabel} show={this.state.showForm} handelClose={this.handelClose} />
      </>
    )
  }
}

export default withAuth0(FavSingleRecipe)

