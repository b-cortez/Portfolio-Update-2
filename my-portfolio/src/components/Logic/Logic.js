import React, {Component} from "react";
import Navbar from "../Navbar/Navbar";
import Background from "../Background/Background";
import Container from "../Projects/Projects";
import About from "../About/About"; 
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


  class Logic extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clickedId: [],
  };
  
  
  render() {
    return (
     
        <div>
          <Navbar/>
          <Background/>
        <Container/>
      <About/>
      <Contact/>    
        <Footer/> 
      
        </div>
    );
  }}
  
  export default Logic;