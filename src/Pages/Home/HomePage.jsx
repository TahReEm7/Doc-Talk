import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Nav from '../../Components/Header/Nav';
import Footer from '../../Components/Footer/Footer';
import GlobalLoader from '../../Components/GlobalLoader/GlobalLoader';

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <>
       <Nav />
      {navigation.state === 'loading' ? (
        <GlobalLoader />
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
