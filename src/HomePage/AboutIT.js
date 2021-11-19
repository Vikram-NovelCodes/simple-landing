import React, { Component } from "react";
import "./AboutIT.css";

class AboutIT extends Component {
    render() {
        return (
            <div id="itabout" className="aboutus text-center">
                <div className="container">
                    <div className="container about-head">
                        <h2 className="block-title">About Us</h2>
                        {/* <h4 className="sub-title">We execute your desires</h4> */}
                    </div>
                    <div className="row align-items-center">
                        <div class="col-md-6">
                            <h4>Superman</h4>
                            <p>Superman is a leading innovator and facilitator of cutting-edge web technology. With a team of Technology Nerds, Market Researchers, and Relationship Builders, we are highly competent and single-mindedly devoted to providing the most reliable and highest-quality of products and services in the realm of IT services – from domain registration and web hosting to website design and web-based software development, backed by unmatched customer support and service.</p>
                        </div>
                        <div class="col-md-6">
                            <form>
                                <input type="text" id="name" name="fullname" placeholder="Enter Your Name" />
                                <input type="email" id="email" name="emailid" placeholder="Enter Your Email" />
                                <input type="tel" id="phone" name="phoneno" placeholder="Enter Your Phone No." />
                                <textarea id="msg" name="message" placeholder="Enter Your Message"></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutIT;