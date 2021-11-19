import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './index.css';
import Header from './Header';
import Slider from "./HomePage/Slider";
import AboutIT from "./HomePage/AboutIT";
import Services from "./HomePage/Services";
import reportWebVitals from './reportWebVitals';
import ChooseUs from './HomePage/ChooseUs';
import Footer from './Footer';

ReactDOM.render(
    <div>
        <Header />
        <Slider />
        <AboutIT />
        <Services />
        <ChooseUs />
        <Footer />
    </div>
    , document.getElementById('root')
);

reportWebVitals();