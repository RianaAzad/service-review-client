import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    const service = useLoaderData();
    console.log(service)
    const navigate = useNavigate();
    useTitle('addService')
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const details = form.details.value;
        const price = form.price.value;
        const picture = form.pictreURL.value;
        const attractions = form.attractions.value;
        const duration = form.duration.value;
        const inclusion = form.inclusion.value;
        const priceDetails = form.priceDetails.value;
        const rating = form.rating.value;
        const service = [form.service.value];
        const shortDescription = form.shortDescription.value;




        console.log(serviceName, price)

        const addService = {
            attractions: attractions,
            details: details,
            duration: duration,
            inclusion: inclusion,
            name: serviceName,
            picture: picture,
            price: price,
            priceDetails: priceDetails,
            rating: rating,
            service: service,
            shortDescription: shortDescription
        }

        fetch('http://localhost:5000/allServices', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
            form.reset();
            navigate('/')
          }
        })
        .catch(e => console.error(e))
    }


    const giveAlert = () =>{
        
        alert('Service is added!')
    }

    return (
        <div>
            <form onSubmit={handleAddService}>
            <input name='serviceName' type="text" placeholder="Name of the Service" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='details' type="text" placeholder="Details of Your Service" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='price' type="text" placeholder="Price" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='pictreURL' type="text" placeholder="Photo of Service" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='attractions' type="text" placeholder="What are the attractions?" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='duration' type="text" placeholder="Duration of your Tour" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='inclusion' type="text" placeholder="What are included in your service?" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='priceDetails' type="text" placeholder="Price Details" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='rating' type="text" placeholder="Rating" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='service' type="text" placeholder="Services provided" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='shortDescription' type="text" placeholder="Describe your service" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <div onClick={giveAlert} className='text-end mx-8 my-6'>
            <input className='btn btn-info' type="submit" value="Add Service" />
            </div>
            </form>
        </div>
    );
};

export default AddService;