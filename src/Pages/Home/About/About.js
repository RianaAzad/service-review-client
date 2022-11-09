import React from 'react';
import AboutUs from '../../../Assets/about.webp'

const About = () => {
    return (
        <div className='grid grid-cols-2 my-20 w-9/12 mx-auto bg-zinc-900 rounded p-10'>
            <div className='my-auto mx-4'>
                <img className='rounded' src={AboutUs} alt="" />
            </div>
            <div>
               <h2 className='text-2xl font-bold'>About Me</h2>
               <p>The best way of knowing a city is from the hand of a local person. I will give you a travel itinerary and be your tour guide in Bangladesh. I will guide you and recommend you the best places and activities that the city has to offer. It also can be adapted to the kind of trip that you wish to have, whether if it is for business or leisure. </p>
            </div>
            
        </div>
    );
};

export default About;