import React, { Component } from 'react';
import './Services.css';
import ServiceEmnt from "./ServiceEmnt";
import { serviceTypes } from "./ServiceTypes";

class Services extends Component {
  render() {
    return (
        <div id="service" className="Services text-center">
            <div className="container service-head">
                <h2 className="block-title">Our Services</h2>
                <h4 className="sub-title">We execute your desires</h4>
            </div>
            <div className="row">
                <ServiceEmnt id={serviceTypes[0].id} title={serviceTypes[0].title} description={serviceTypes[0].description} />
                <ServiceEmnt id={serviceTypes[1].id} title={serviceTypes[1].title} description={serviceTypes[1].description} />
                <ServiceEmnt id={serviceTypes[2].id} title={serviceTypes[2].title} description={serviceTypes[2].description} />
                <ServiceEmnt id={serviceTypes[3].id} title={serviceTypes[3].title} description={serviceTypes[3].description} />
                <ServiceEmnt id={serviceTypes[4].id} title={serviceTypes[4].title} description={serviceTypes[4].description} />
                <ServiceEmnt id={serviceTypes[5].id} title={serviceTypes[5].title} description={serviceTypes[5].description} />
            </div>
        </div>
    );
  }
}
 
export default Services;