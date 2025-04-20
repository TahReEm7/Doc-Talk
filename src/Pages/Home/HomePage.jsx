import React from 'react';
import Nav from '../../Components/Header/Nav';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';


const HomePage = () => {
    return (
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default HomePage;