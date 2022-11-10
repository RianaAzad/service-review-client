import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Review from '../Review/Review';


const ServiceDetails = () => {
  const { _id, name, picture, priceDetails, details, service, rating, duration, attractions, inclusion} = useLoaderData();
  const {user}= useContext(AuthContext);

  const [newReviews, setNewReviews] = useState(null);
  useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => {
      setNewReviews(data)
      console.log(data)
    })
  },[])
  const handlePostReview =event => {
    event.preventDefault();
    const form = event.target;
    const postedReview = form.comment.value;
    const email = user?.email || 'unregistered';

    const userReview = {
        service_id: _id,
        service_name: name,
        email,
        postedReview,
    };

    fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(userReview)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        form.reset();
      }
    })
    .catch(e => console.error(e))


}

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
                  newReviews?.map(newReview => <p className='text-start p-4 border border-purple-400'
                  key={newReview._id}>
                    <span className='text-cyan-600 font-bold p-5'>{newReview.email}</span>
                    <span>{": "}</span>
                    <span>{newReview.postedReview}</span>
                    </p>)
                }
            </div>
            <form onSubmit={handlePostReview}>
            <input name='comment' type="text" placeholder="Your comments" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <div className='text-end mx-8 my-6'>
            <input className='btn btn-info' type="submit" value="Post" />
            </div>
            </form>
           
        </div>
 </div>

        </div>
    );
};

export default ServiceDetails;