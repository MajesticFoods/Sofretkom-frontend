import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo1 from'./Images/logo1.png'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';
import "./Header.css"
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPersonBooth } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";






class Header extends React.Component {
  render() {
    const {user,isAuthenticated}=this.props.auth0;
    return(
     
      <>
         
      <Navbar collapseOnSelect expand="lg" className="Navbar">
        {/* <Navbar.Brand>Sofretkom</Navbar.Brand> */}
        <Link to="/" className="navLink" ><FaHome /> Home</Link>
        <Link to="/profile" className="navLink"><FaUserCircle/>Profile</Link>
        <Link to="/recipe" className="navLink"><FaSearch/>Search</Link>
        <Link to="/recipefav" className="navLink"><FaHeart/>MyREcipe</Link>
        <img src={logo1} alt="Avatar" className='logoimg' />
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}

        {
            isAuthenticated ? <LogoutButton/> : <LoginButton/>
          }
       


      </Navbar>
      </>
    );
  }
}

export default withAuth0(Header) ;