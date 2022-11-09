import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = ({service_name}) => {
    const reviews = useLoaderData();
    console.log(reviews)
    console.log(service_name)

    return (
        <div>
            {
                reviews.map(review => <>
                {review.service_name}
                {service_name}
                </>)
            }
        </div>
    );
};

export default Review;