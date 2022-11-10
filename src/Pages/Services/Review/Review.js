import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Review = () => {
    const {user} = useContext(AuthContext)
    // const url = `http://localhost:5000/reviews?service_id=${}`
   

    return (
        <div>
             <div>
 <div className='border border-purple-400 rounded-lg bg-black'>
            <div>
                <p className='font-bold'>{user?.email}</p>
                
            </div>
            {/* <form onSubmit={handlePostReview}> */}
            <input name='comment' type="text" placeholder="Your comments" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <div className='text-end mx-8 my-6'>
            <input className='btn btn-info' type="submit" value="Post" />
            </div>
            {/* </form> */}
           
        </div>
 </div>
        </div>
    );
};

export default Review;