import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
  render() {
    return (
      <div id="#slids" className="Slider">
        <div className="HeroImage">
          <div className="container">
            <div className="hero-text">
              <h1 className="white">Superman</h1>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <p className="white">Superman Transform your culture and operations to execute more efficiently, champion the customer, and achieve optimal performance.</p>
                  <a href="#contact"><button className="btn btn-light"><b>Learn More</b></button></a>
                  <a href="#contact"><button className="btn btn-dark"><b>Contact Us</b></button></a>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;