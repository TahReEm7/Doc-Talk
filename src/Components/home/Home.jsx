import React from 'react';
import Banner from './Banner/Banner';
import BestDoc from './Best Doctors/BestDoc';
import Service from './Service/Service';


const Home = () => {
    return (
        <div className='bg-base-300'>
           <Banner></Banner> 
          <BestDoc></BestDoc>
          <Service></Service>

        </div>
    );
};

export default Home;