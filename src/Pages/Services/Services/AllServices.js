import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllServicesCard from './AllServicesCard';


const AllServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment11-server-iota.vercel.app/allServices')
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
            <Link to='/add-service'><button className='btn btn-outline btn-success m-10'>Add A service</button></Link>
        </div>
    );
            };

export default AllServices;