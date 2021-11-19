import React, { Component } from 'react';
import './ChooseUs.css';
import Counter from "./Counter";
import { CounterElement } from "./CounterElement";

class ChooseUs extends Component {
    render() {
        return(
            <div id="choose" className="ChooseUs text-center">
                <div className="container service-head">
                    <h2 className="block-title">Choose Us</h2>
                    <h4 className="sub-title">We execute your desires</h4>
                </div>
                <div className="row">
                    <Counter no={CounterElement[0].no} description={CounterElement[0].description} />
                    <Counter no={CounterElement[1].no} description={CounterElement[1].description} />
                    <Counter no={CounterElement[2].no} description={CounterElement[2].description} />
                    <Counter no={CounterElement[3].no} description={CounterElement[3].description} />
                </div>
                <div className="text-block">
                    <p className="lead">Brochure: “Description of the company”</p>
                </div>
                <div className="">
                    <a href="#download" rel="noreferrer" className="btn btn-transparent btn-rounded btn-light btn-nl waves-effect waves-light"><i className="material-icons file_download"></i>&nbsp;Download Brochure</a>
                </div>
            </div>
        );
    }
}

export default ChooseUs;