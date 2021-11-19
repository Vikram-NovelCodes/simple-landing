import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <nav className="main-menu navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div className="container">
            <a className="navbar-brand" href="#slids">Superman</a>
            <div className="toolbar">
              <button className="navbar-toggler" data-toggle="collapse" data-target="#shrink"><span className="navbar-toggler-icon"></span></button>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="shrink">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#slids">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#itabout">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#service">Service</a></li>
                <li className="nav-item"><a className="nav-link" href="#choose">Choose us</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="#search"><i className="fa fa-search"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;