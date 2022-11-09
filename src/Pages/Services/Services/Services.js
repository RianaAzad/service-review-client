import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div>
                <h2>
                    My services
                    <p>{services.length}</p>
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-4'>
                
                {
                    services.map(service => <ServiceCard key={service._id}
                    service ={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;