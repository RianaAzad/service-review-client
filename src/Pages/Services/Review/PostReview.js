import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const PostReview = () => {
    useTitle('PostReview')
   const {name, _id} = useLoaderData();
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const handlePostReview =event => {
        event.preventDefault();
        const form = event.target;
        const postedReview = form.comment.value;
        const userName = form.userName.value;
        const email = user?.email || 'unregistered';

        const addReview = {
            service_id: _id,
            service_name: name,
            postedReview,
            email,
            userName
        }
    
        fetch('https://assignment11-server-iota.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addReview)
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
    const giveAlert = () => {
        alert('Thank you for your valuable review!');
        navigate(`/details/${_id}`)
    }


    return (
        <div>
            <form onSubmit={handlePostReview}>
            <input name='userName' type="text" placeholder="Your name" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <input name='comment' type="text" placeholder="Your comments" className="input input-bordered input-info input-lg w-11/12 m-4" /> 
            <div onClick={giveAlert} className='text-end mx-8 my-6'>
            <input className='btn btn-info' type="submit" value="Post" />
            </div>
            </form>
        </div>
    );
};

export default PostReview;