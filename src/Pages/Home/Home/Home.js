import React from 'react';
import Services from '../../Services/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='my-10'>
            this is home
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;