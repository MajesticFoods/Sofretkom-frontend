import React, { Component } from 'react'
import {Form , Button,Modal} from 'react-bootstrap/'

export class UpdateFormModal extends Component {
    render() {
        return (
            <div> <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update your Recipe!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
              <Form onSubmit={this.props.updateRecipeFun}
              >
            <Form.Control size="lg" type="text" name='updateLabel' defaultValue={this.props.updateLabel}/> 
            {/* {this.props.updateIngredients.map((element, index) => {
                        return <Form.Control size="lg" type="text"  name='updateIngredients' key={index} defaultValue={element.text}/> ;
                      })} */}
             <Form.Control size="lg" type="text" name='updateImage' defaultValue={this.props.updtaeImage}/> 

        <Button type='submit' variant="secondary">
                Submite
              </Button>
           
                  
      </Form>             
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.handleClose} variant="secondary">
                close
              </Button>
             
              
            </Modal.Footer>
          </Modal>
                
            </div>
        )
    }
}

export default UpdateFormModal
