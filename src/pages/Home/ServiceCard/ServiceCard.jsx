import React from 'react';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { _id, title, service_id, price, img, facility, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-red-400
                font-semibold'>Price: ${price}</p>
                <button className="btn btn-warning">View more</button>
            </div>
        </div>
    );
};

export default ServiceCard;