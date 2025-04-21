import React from 'react';
import { PacmanLoader } from 'react-spinners';

const GlobalLoader = () => {
  return (
    <div >
        <PacmanLoader className='text-center w-full m-20 mx-auto' color="#3681d7" size={25} />
    </div>
  );
};

export default GlobalLoader;