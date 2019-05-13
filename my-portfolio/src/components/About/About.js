import React, {Component} from "react";
import "./About.css";

class About extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
      return (
<div className="container Projects">


  <div class="row mb-xs-60 mb-md-80">
      <div class="col-xs-12 col-md-6 mb-xs-80 mb-md-0">
      <h1 className="Aboutme">About Me</h1>
        <h2 className="Aboutmeh2">I am currently a student at the University of Minnesota undergoing the 6 month long bootcamp
     to become a Full stack Developer. I have studied Graphic Design at Anoka Ramsey Community College where I received 
     an Associate of Arts. I have extensive experience using HTML and CSS and Javascript as well as other technologies.</h2>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="row" data-component="skillsList">
          <div class="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
          <h1 className="Aboutme">Skills</h1>
            <h4 className="Aboutmeh4">Problem Solving</h4>
            <p className="Aboutmep">I'm can take vague problems and requirements and break them down into steps and solutions.</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
            <h4 className="Aboutmeh4">Systems Thinking</h4>
            <p className="Aboutmep">I'm good at thinking abstractly and putting together systems with many moving parts.</p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
            <h4 className="Aboutmeh4">Communicating</h4>
            <p className="Aboutmep">I can explain things clearly, communicate problems quickly and write accurately and concisely.</p>
          </div>          
          <div class="col-xs-12 col-sm-6 col-md-12 mb-xs-20 mb-md-40">
            <h4 className="Aboutmeh4">Organizing</h4>
            <p className="Aboutmep">I can self-manage, work to deadlines, organise projects and present well-structured and complete deliverables.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

      );
    }
}
    
export default About;