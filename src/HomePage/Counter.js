import React from "react";
import './Counter.css';

const Counter = ({no, description}) => {
    return (
        <div className="Counter col-md-3">
            <div className="animated-digit-box skin-primary">
                <div className="animated-digit">
                    <span className="digit">{no}</span><span className="unit">%</span>
                </div>
                <p className="description">{description}</p>
            </div>
        </div>
    );
}

export default Counter;