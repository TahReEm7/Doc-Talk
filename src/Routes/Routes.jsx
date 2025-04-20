import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import HomePage from '../Pages/Home/HomePage';
import Home from '../Components/home/Home';
import Blogs from '../Pages/Home/Blogs/Blogs';

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: HomePage,
      errorElement: <div>error</div>,
      children: [
        {   index: true,
            path: "/",
            Component:Home,
         },
         {
            path: "/My-Bookings",
            element:<div>My Bookings</div>,
         },
         {
            path: "/blog",
            Component: Blogs,
         },
         {
            path:  "/contact" ,
            element:<div> contact </div>,
         }
    ]
    }
  ]);

