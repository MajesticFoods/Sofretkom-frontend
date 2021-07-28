import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import LoginButton from './LoginButton'
import "./Recipe.css";
import "./LoginModal.css"
export class LoginModal extends Component {
    render() {
        return (
            <div>
                <Modal  show={this.props.show} onHide={this.props.handleCloseModal} className='modal'>
                    <Modal.Dialog >
                        <Modal.Header closeButton >
                            <Modal.Title>Login</Modal.Title>
                        </Modal.Header>

                        <Modal.Body >
                            <p className='ParaForm'>Please login to add recipes</p>
                        </Modal.Body>

                        <Modal.Footer  >
                            <Button className="custom-btn btn-5" onClick={this.props.handleCloseModal}>Close</Button>
                            <LoginButton />
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </div>
        )
    }
}

export default LoginModal
