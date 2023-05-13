import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-pied.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center space-y-5 lg:w-3/4 mx-auto mb-[50px]'>
                <h2 className='text-xl text-orange-400 font-semibold'>Our Services</h2>
                <h1 className='text-6xl font-semibold'>Our Service Area</h1>
                <p> The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;