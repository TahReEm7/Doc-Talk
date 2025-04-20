import React from 'react';
import Banner from './Banner/Banner';
import BestDoc from './Best Doctors/BestDoc';


const Home = () => {
    return (
        <div className='bg-base-200'>
           <Banner></Banner> 
          <BestDoc></BestDoc>
        </div>
    );
};

export default Home;