import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';


const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => {
            setAllServices(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            <div>
                <h2>
                    My services
                    <p>{allServices.length}</p>
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-4'>
                
                {
                   allServices.map(each => 
                    <AllServicesCard
                    key={each._id}
                    allService = {each}
                    ></AllServicesCard>
                   )
                }
            </div>
        </div>
    );
            };

export default AllServices;