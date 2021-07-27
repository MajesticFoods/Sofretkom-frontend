import React, { Component } from 'react'
import "./AboutUs.css"
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import black from './Images/black.png';
import eman from './Images/eman.png';
import wijdan from './Images/wijdan.jpg';


const plantsList = [
    {
      name: " Osama Baker",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01QQMGRCJK-6def7491c471-512",
      link: "https://github.com/OsamaBaker",
      left:6 ,
      bottom: 85 },
    
    {
      name: " Yazan Odeh",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01TUDCJV1B-38205f88244d-512",
      link: "https://github.com/OdehYazan",
      left: 6,
      bottom: 58 },
    
    {
      name: "Eman Mkhareez",
      image:eman,
    //   "https://ca.slack-edge.com/TNGRRLUMA-U01R5LSQRB5-9e5b6685630e-512",
      link: "https://github.com/emanmkhareez",
      left: 38,
      bottom: 85 },
    
    {
      name: "Mamoun Alshisani",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01UA7FJKCH-75afe4d57739-512",
      link: "https://github.com/MAMOUN-kamal-alshisani",
      left: 38,
      bottom: 58 },
    
    {
      name: "Sereen Daqamsih",
      image:
      "https://ca.slack-edge.com/TNGRRLUMA-U01TXMV2XT5-b09032435340-512",
      link: "https://github.com/sereendaqamsih",
      left: 38,
      bottom: 32  },
    
    {
      name: "Wijdan Khaled",
      image:wijdan,
    //   "https://ca.slack-edge.com/TNGRRLUMA-U01TXNE4N3V-0d14ff71a07d-512",
      link: "https://github.com/wijdankhaled",
      left: 6,
      bottom: 32  }];
    
    
    
    class AboutUs extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          showCard: false };
    
      }
    
      renderCard(item) {
        return /*#__PURE__*/(
          React.createElement("div", { class: "card" }, /*#__PURE__*/
          React.createElement("img", { class: "card-image", src: item.image, label: item.name }), /*#__PURE__*/
          React.createElement("div", null, /*#__PURE__*/
          React.createElement("div", { class: "card-title" }, item.name), /*#__PURE__*/
          React.createElement("a", { class: "card-button", href: item.link, target: "_blank" }, "know more"))));
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
          this.renderPins(), /*#__PURE__*/
          React.createElement("img", {
            class: "main-image",
            src: black,
            label: "Choose your Houseplants!" })));
    
    
    
      }
    
      render() {
        return /*#__PURE__*/(
          React.createElement("div", { class: "main-wrapper" }, /*#__PURE__*/
          React.createElement("h1", { class: "main-title" }, "Majestic Team"),
          this.renderImage()));
    
    
      }}
    
    
    //Render App
    // ReactDOM.render( /*#__PURE__*/React.createElement(AboutUS, null), document.getElementById("app"));
    export default AboutUs;
