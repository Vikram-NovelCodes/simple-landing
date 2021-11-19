import React from 'react';
import './ServiceEmnt.css';

const ServiceEmnt = ({id, title, description}) => {
    return(
        <div className="ServiceEmnt col-md-4">
            <div className="icon-box text-center">
				<img alt="service-icon" className="icon-box-icon" src={`https://robohash.org/${id}?set=set3`} />
				<h3 className="icon-box-title">{title}</h3>
				<div className="icon-box-description">
					<p><span className="text-gray">{description}</span></p>
					<a href="#read-more" className="btn-sm"><b>Read More</b></a>
				</div>
		    </div>
        </div>
    );
}
 
export default ServiceEmnt;