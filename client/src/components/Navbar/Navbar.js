import React, { Component } from "react";
import "./Navbar.css";



class Navbar extends Component {

   
    render() {
        return(
            
            <nav>
            <div className="nav-wrapper z-depth-5 black">
                <div className="container">
                <a href="#" className="brand-logo right">
                </a>
              <ul id="nav-mobile" className="left">
                <li><a href="/">Home</a></li>
                <li><a href="/saved">Saved Articles</a></li>
                </ul>
              </div>
            </div>
          </nav>
        
        );
    };
};

export default Navbar;