import React, { Component } from "react";
import { withAuth0 } from '@auth0/auth0-react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Button,Form,NavDropdown,Nav,FormControl} from 'react-bootstrap/'
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import "./Header.css";
class Header extends React.Component{
    render(){
      const { isAuthenticated } = this.props.auth0;

        return(
<Navbar bg="light" expand="lg" className="navbar-brand">
  <Navbar.Brand href="#">Sofretkom</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Recipe">Search</Nav.Link>
      <Nav.Link href="/GetFavData">Favorite</Nav.Link>
      <Nav.Link href="/AboutUS">About us</Nav.Link>
      {isAuthenticated === true?  <LogoutButton />: <LoginButton />}

      
    </Nav>
   
  </Navbar.Collapse>
</Navbar>



        )}
    

}
export default withAuth0(Header);