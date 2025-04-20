import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 3, name: "Services", link: "/My-Bookings" },
    { id: 5, name: "Blog", link: "/blog" },
    { id: 4, name: "Contact", link: "/contact" }];
    return (
        <div>
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {
        
       }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='w-1/4' src="https://i.ibb.co.com/QFLHSKGj/logo.png" alt="Logo" />Phudu</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <div className='flex gap-4'>
   {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            isActive ? 'text-black ' : 'text-gray-800'
          }
        >
          {item.name}
        </NavLink>
      ))}
   </div>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn rounded-4xl btn-primary px-6 py-4">Emergency</a>
  </div>
</div> 
        </div>
    );
};

export default Nav;