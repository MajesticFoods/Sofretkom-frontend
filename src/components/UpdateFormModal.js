import React, { Component } from 'react'
import {Form , Button,Modal} from 'react-bootstrap/'

export class UpdateFormModal extends Component {
  constructor(props){
    super(props);
    this.state={
      <Form.Control size="lg" type="text"  name='updateIngredients' key={index} defaultValue={element.text}/> 

    }
  }
    render() {
        return (
            <div> <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update your Recipe!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
              <Form 
              >
            <Form.Control size="lg" type="text" name='updateLabel' defaultValue={this.props.updateLabel}/> 
            {this.props.updateIngredients.map((element, index) => {
                        return (
                        <>
                        <Form>
                        <Form.Control size="lg" type="text"  name='updateIngredients' key={index} defaultValue={element.text}/> 
                        <Button type='submit' variant="secondary" onSubmit={ ()=> this.props.updateRecipeFun(index)}>yalla</Button>
                        </Form>
                        </>
                        )
                      })}
             <Form.Control size="lg" type="text" name='updateImage' defaultValue={this.props.updateImage}/> 
             {/* <Form.Control size="lg" type="text" name='updateImage' defaultValue={this.props.updateIngredients}/>  */}

        <Button type='submit' variant="secondary" onSubmit={ ()=> this.props.updateRecipeFun()}>
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
