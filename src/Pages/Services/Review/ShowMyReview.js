import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const ShowMyReview = ({myReview, handleDelete, handleEdit}) => {
    const {user} = useContext(AuthContext)

    
    if(myReview?.email === user?.email)
    {
        return (
            <div className='border border-cyan-600 w-11/12 p-4 m-4 rounded-lg lg:flex md:flex justify-between mx-auto bg-slate-700'>
                <div className='text-start'>
                <p>Tour: {myReview.service_name}</p>
               <p>Review: {myReview.postedReview}</p> 
                </div>
               <div>
                <button onClick={()=>handleDelete(myReview._id)} className='btn btn-error mx-5'>Delete Review</button>
                <Link to={`/update/${myReview._id}`}><button onClick={()=>handleEdit(myReview._id)} className='btn btn-warning'>Edit Review</button></Link>
               </div>
            </div>
        );
    } 
};

export default ShowMyReview;