import React, { Component } from 'react'
import "./AboutUs.css"
import black from './Images/black.png';
import eman from './Images/eman.png';
import wijdan from './Images/wijdan.jpg';
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa";


const plantsList = [
    {
      name: " Osama Baker",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01QQMGRCJK-6def7491c471-512",
      link: "https://github.com/OsamaBaker",
      major:"Software Developer",
      linkedin:"https://github.com/OsamaBaker",
      left:-10 ,
      bottom: 70 },
    
    {
      name: " Yazan Odeh",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01TUDCJV1B-38205f88244d-512",
      link: "https://github.com/OdehYazan",
      major:"Software Developer",
      left: 90,
      bottom: 70 },
    
    {
      name: "Eman Mkhareez",
      image:eman,
    //   "https://ca.slack-edge.com/TNGRRLUMA-U01R5LSQRB5-9e5b6685630e-512",
      link: "https://github.com/emanmkhareez",
      major:"Software Developer",
      left: 38,
      bottom: 70 },
    
    {
      name: "Mamoun Alshisani",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01UA7FJKCH-75afe4d57739-512",
      link: "https://github.com/MAMOUN-kamal-alshisani",
      major:"Software Developer",
      left: 38,
      bottom: 32 },
    
    {
      name: "Sereen Daqamsih",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01TXMV2XT5-b09032435340-512",
      link: "https://github.com/sereendaqamsih",
      major:"Software Developer",
      left: 90,
      bottom: 32  },
    
    {
      name: "Wijdan Khaled",
      image:wijdan,
    //   "https://ca.slack-edge.com/TNGRRLUMA-U01TXNE4N3V-0d14ff71a07d-512",
      link: "https://github.com/wijdankhaled",
      major:"Software Developer",
      left: -10,
      bottom: 32  }];
    
    
    
    class AboutUs extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showCard: false };
    
      }
    //   rendertitle(){
    //       return(
    //         <section>
    //         <div class="content">
    //             <h2> Majestic Team</h2>
    //             <h2> Majestic Team</h2>
    //         </div>
    //     </section>
    //       )
    //   }
      rendertitle(){
        return(
         
          <div >
            <h1 >
            <h2 class="main-title"> Meet Majestic Team</h2>
            </h1>
             
          </div>
  
        )
    }
    //   rendertitle() {
    //       return/*#__PURE__*/(
    //                  React.createElement("div", { class: "tiltle" },
    //        React.createElement("h1", { class: "main-title" }, "Meet Majestic Team"),
    //        ) );
    //   }
    // rendertitle() {
    //     return/*#__PURE__*/(
    //     React.createElement("section",
    //      React.createElement("div", { class: "content" },
    //      React.createElement("h2", "Meet Majestic Team"),
    //      React.createElement("h2", "Meet Majestic Team"),

    //      ) ));
    // }
      renderCard(item) {
        return /*#__PURE__*/(
          
          React.createElement("div", { class: "aboutus" }, /*#__PURE__*/
          React.createElement("img", { class: "photo", src: item.image, label: item.name }), /*#__PURE__*/
          React.createElement("div", null, /*#__PURE__*/
          React.createElement("div", { class: "card-title" }, item.name), /*#__PURE__*/
          React.createElement("div", { class: "card-major" }, item.major), /*#__PURE__*/
          React.createElement("a", { class: "card-button" ,href: item.linkedin, target: "_blank" },<FaLinkedin/>),
          React.createElement("a", { class: "card-button", href: item.link, target: "_blank" }, <FaGithub/>),
        //   this.rendertitle(),
          )));
        
        }
    
      renderPins() {
        return plantsList.map(item => {
          return /*#__PURE__*/(
            React.createElement("div", {
              class: "pin-wrapper",
              style: { left: `${item.left}%`, bottom: `${item.bottom}%` } }, /*#__PURE__*/
    
            // React.createElement("div", { class: "pin" }, "?"),
            React.createElement("img", { class: "pin" ,src: item.image, label: item.name }),
            this.renderCard(item)));
    
    
        });
      }
    
      renderImage() {
        return /*#__PURE__*/(
           
          React.createElement("div", { class: "image-wrapper" },
          this.rendertitle(),

          this.renderPins(), /*#__PURE__*/
          React.createElement("img", {
            class: "main-image",
            src: black,
            label: "majestic" }, )));
    
            
    
      }
    
      render() {
        return /*#__PURE__*/(
          React.createElement("div", { class: "main-wrapper" },
        //   React.createElement("h1", { class: "main-title" }, "Meet Majestic Team"),
          this.renderImage()));
    
    
      }}
    
    
    //Render App
    // ReactDOM.render( /*#__PURE__*/React.createElement(AboutUS, null), document.getElementById("app"));
    export default AboutUs;
