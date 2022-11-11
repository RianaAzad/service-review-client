import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServicesCard = ({allService}) => {
  useTitle('AllServices')
    const {name, picture, details, price, _id} = allService;
    return (
       <PhotoProvider>
         <Link to='/details'><div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
  <figure>
    <PhotoView src={picture}>
    <img src={picture} style={{ objectFit: 'cover' }} alt="ServicePhoto" />
    </PhotoView>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details?.slice(0,100)}</p>
    <h4>Price: ${price}</h4>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
</Link>
       </PhotoProvider>
    );
};

export default AllServicesCard;