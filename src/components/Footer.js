

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Fa } from "react-icons/fa";


const FooterPage = () => {
  return (

    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h4 className="Sofretkom">Sofretkom</h4>

            <p className="aboutOurWebSite">
              A website for the best recipes that you can take the recipe you like and try it😋
            </p>
            <hr className="hrspace"></hr>
          </MDBCol>

          <br></br>
          <h4 className="contactUs"> Follow Us<br></br>
          </h4>
          {/* <ul>
              <li className="list-unstyled">
                <a href="#!"><FaInstagram/></a>
              </li>
              <li className="list-unstyled">
              <a href="https://www.facebook.com/flauntermedia/" className="icons">
                                <img className="imgs" src="https://www.flaunter.com/wp-content/themes/flaunter/img/icons/facebook-white.svg"/>
                            </a>
                
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul> */}

          <div className="social-links">

            <a href="#" className="icons">
              <img className="footer" src="https://www.flaunter.com/wp-content/themes/flaunter/img/icons/facebook-white.svg" />
            </a>
            <a href="#" className="icons">
              <img className="footer" src="https://www.flaunter.com/wp-content/themes/flaunter/img/icons/instagram-white.svg" />

            </a>
            <a href="#" className="icons">
              <img className="footer" src="https://www.flaunter.com/wp-content/themes/flaunter/img/icons/twitter-white.svg" />
              
            </a>
            <a href="#" className="icons">
              <img className="footer" src="https://www.flaunter.com/wp-content/themes/flaunter/img/icons/linkedin-white.svg" />
              
            </a>

          </div>

        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">Sofretkom.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;