import React, { Component } from 'react'
import {Form , Button,Modal} from 'react-bootstrap/'
import FavRecipe from './FavRecipe'
import './UpdateFormModal.css'

export class UpdateFormModal extends Component {
//   constructor(props){
//     super(props)
//     this.state={
// array:[]
//     }
//   }
    render() {
    
        return (
            <div> <Modal className='ModalDiv' show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update your Recipe!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
              <Form className='FormFav' onSubmit={this.props.updateRecipeFun}  >
            <Form.Control size="lg" type="text" name='updateLabel' defaultValue={this.props.updateLabel}/> 
            {/* {this.props.updateIngredients.map((element, index) => {
                        return ( */}
                        {/* <> */}
                    {/* {this.setState({
                      array:element.text
                    })} */}
                        <Form.Control size="lg" type="text"  name='updateIngredients'  defaultValue={this.props.updateIngredients}/> 
                        {/* <Button type='submit' variant="secondary" >yalla</Button>
                    */}
                        {/* </> */}
                        {/* ) */}
                      {/* })} */}
             <Form.Control size="lg" type="text" name='updateImage' defaultValue={this.props.updateImage}/> 
             {/* <Form.Control size="lg" type="text" name='updateImage' defaultValue={this.props.updateIngredients}/>  */}


        <Button className="custom-btn btn-5 logBTN" type='submit' variant="secondary">

                Submit
              </Button>
           
                  
      </Form>             
            </Modal.Body>
            <Modal.Footer>
              <Button className="custom-btn btn-5 logBTN" onClick={this.props.handleClose} variant="secondary">
                close
              </Button>
             
              
            </Modal.Footer>
          </Modal>
                {/* <FavRecipe array={this.state.array}/> */}
            </div>
        )
    }
}

export default UpdateFormModal
