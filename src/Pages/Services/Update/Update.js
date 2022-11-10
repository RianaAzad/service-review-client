import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedReview = useLoaderData();
    console.log(storedReview)
    const [review, setReview] = useState(storedReview)

    const handleEdit = event =>{
        event.preventDefault();
        const field = event.target.postedReview;
        console.log(field)
        
    }
    

    // const handleChange = event => {
    //     const field = event.target;
    //     console.log(field)
    //     const value = event.target.updatedReview.value;
    //     console.log(value)
    //     console.log(review)
    //     const newReview = {...review};
    //     console.log(newReview)
    //     newReview[field] = value;
    //     console.log(newReview)
    //     setReview(newReview)
    //     console.log(review)
    // }

    return (
        <form onSubmit={handleEdit}>
            <h3>Please update your review</h3>
            <input  name='postedReview' defaultValue={storedReview.postedReview} type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
            <button >Edit</button>
        </form>
    );
};

export default Update;