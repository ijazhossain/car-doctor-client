import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const { _id, title, service_id, price, img, facility, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-red-400
                font-semibold'>Price: ${price}</p>
                <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-warning">Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceCard;