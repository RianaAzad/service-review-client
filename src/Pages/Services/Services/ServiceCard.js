import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
    const {name, picture, details, price, _id} = service;
    return (
        <Link to='/details'><div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details.slice(0,100)}</p>
    <h4>Price: ${price}</h4>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
</Link>
    );
};

export default ServiceCard;