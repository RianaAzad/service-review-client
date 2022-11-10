import React from 'react';
import Services from '../../Services/Services/Services';
import Statistics from '../../Statistics/Statistics';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;