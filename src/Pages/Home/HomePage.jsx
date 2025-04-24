import React from 'react';
import { Outlet } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import Nav from '../../Components/Header/Nav';
import Footer from '../../Components/Footer/Footer';
import GlobalLoader from '../../Components/GlobalLoader/GlobalLoader';
import ScrollToTop from '../../Components/SmoothScroll/ScrollToTop ';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 200);

      return () => clearTimeout(timer);
  }, []);
  return (
    <>
        <ScrollToTop />
            <Nav />

            {isLoading ? (
                <GlobalLoader />
            ) : (
              
              <div>
                  <Outlet />
              </div>
            )}

        <Footer />
    </>
);
};
export default HomePage;
