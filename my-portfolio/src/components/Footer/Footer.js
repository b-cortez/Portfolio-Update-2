import React from "react";
import "./Footer.css";

const Footer = () => (
	<footer className = "footer">
<div class="container">
  <div class="heading" role="banner">
  <div class="split-border"><span><button onclick="topFunction()" id="myBtn" title="Go to top"><i class="fas fa-arrow-circle-up"></i></button></span>
    </div>
          </div>
          <div class="center">
                <a class="nav-link" href="https://github.com/b-cortez" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt fa-2x footeri"></i> <span class="sr-only">(current)</span></a>
                <a class="nav-link" href="https://www.linkedin.com/in/brian-olivares-cortes-17b6a682/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in fa-2x footeri"></i></a>
                <a class="nav-link" href="https://stackoverflow.com/users/10516072/brian-cortez?tab=profile" target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-2x footeri"></i></a>
              </div>
        <p class="footeri">Copyright 2019 Brian Cortez</p>
    </div> 

	</footer>
);
export default Footer;