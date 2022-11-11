import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Review from '../Review/Review';


const ServiceDetails = () => {
  const { _id, name, picture, priceDetails, details, service, rating, duration, attractions, inclusion} = useLoaderData();
  const {user}= useContext(AuthContext);
  useTitle('Details')
  const sd = {
    _id,
    name
  }

  const [newReviews, setNewReviews] = useState(null);
  useEffect(()=>{
    fetch('https://assignment11-server-iota.vercel.app/reviews')
    .then(res => res.json())
    .then(data => {
      setNewReviews(data)
      console.log(data)
    })
  },[])

    return (
      
          <div className="card w-9/12 mx-auto bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={picture} alt="images" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-justify">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className='text-start py-8'>
    <p>Price Details: {priceDetails}</p>
    <p>Rating: {rating}</p>
    <p>Duration of the Tour: {duration}</p>
    <p>Attraction: {attractions}</p>
    <p>Inclusion: {inclusion}</p>
    </div>
    <div>
      <p>Services offered: </p>
      {
        service.map(oneService => <p>
        <p>{oneService}</p>
        </p>)
      }
    </div>
    
  </div>
  {/* review */}

  <div>
 <div className='border border-purple-400 rounded-lg bg-black'>
            <div>
                {
                  newReviews?.map(newReview => 
                  <Review
                  key={newReview._id}
                  newReview={newReview}
                  sd={sd}
                  ></Review>)
                }
            </div>
        </div>
        </div>
 <Link to={`/post-review/${_id}`}><button className='btn btn-warning my-5'>Post A Review</button></Link>
        </div>
    );
};

export default ServiceDetails;