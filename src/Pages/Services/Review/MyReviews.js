import React, { useContext, useEffect, useState } from 'react';

import useTitle from '../../../hooks/useTitle';
import ShowMyReview from './ShowMyReview';

const MyReviews = ({email}) => {
   
    const [myReviews, setMyReviews] = useState([]);
    useTitle('MyReviews')
    useEffect(()=>{
        fetch('https://assignment11-server-iota.vercel.app/reviews',{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[])

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete this review?`)
        if(agree){
            fetch(`https://assignment11-server-iota.vercel.app/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount> 0){
                    const remainingReviews = myReviews.filter(rev => rev._id !== id);
                    setMyReviews(remainingReviews);
                    alert('Successfully deleted!');
                }
            })
        }
    }

    const handleEdit = id =>{
        fetch(`https://assignment11-server-iota.vercel.app/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({postedReview: 'done'})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className='mb-24 mt-12'>
            <h2 className='text-white text-4xl font-extrabold'>Your Reviews</h2>
            {
                myReviews.map(myReview => <ShowMyReview
                key={myReview._id}
                myReview= {myReview}
                handleDelete = {handleDelete}
                handleEdit={handleEdit}
                ></ShowMyReview>)
            }
        </div>
    );
};

export default MyReviews;