import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ShowMyReview from './ShowMyReview';

const MyReviews = ({email}) => {
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [afterDeletion, setAfterDeletion] = useState(myReviews)
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[])

    const handleDelete = id => {
        const agree = window.confirm(`Are you sure you want to delete this review?`)
        if(agree){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount> 0){
                    alert('Successfully deleted!');
                    const remainingReviews = myReviews.filter(rev => rev._id !== id);
                    
                    setMyReviews(remainingReviews);
                }
            })
        }
    }

    const handleEdit = id =>{
        fetch(`http://localhost:5000/reviews/${id}`, {
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