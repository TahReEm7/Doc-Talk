import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import HomePage from '../Pages/Home/HomePage';
import Home from '../Components/home/Home/Home';
import Blogs from '../Pages/Home/Blogs/Blogs';
import Contact from '../Pages/Home/Contacts/Contact';
import Booking from '../Pages/Home/My-Bookings/Booking';
import DocDetails from '../Pages/DocDetails/DocDetails';


 export const router = createBrowserRouter([
    {
      path: "/",
      Component: HomePage,
      errorElement: <Contact />,
      children: [
        {   index: true,
            path: "/",
            Component:Home,
         },
         {
            path: "/My-Bookings",
            loader: () => fetch(`/doctorsData.json`),
            Component: Booking,
         },
         {
            path: "/blog",
            Component: Blogs,
         },
         {
            path:  "/contact" ,
            Component : Contact,
         },
         {
            path:  "/details/:id" ,
            loader: () => fetch(`/doctorsData.json`),
            Component : DocDetails,
         },
        
    ]
    }
  ]);

