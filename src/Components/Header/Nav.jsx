import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const navItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "My-Bookings", link: "/My-Bookings" },
    { id: 3, name: "Blog", link: "/blog" },
    { id: 4, name: "Contact", link: "/contact" }
  ];

  const getActiveClass = ({ isActive }) =>
    isActive ? "underline text-blue-600 font-semibold" : "hover:underline";

  return (
    <div>
      <div className="navbar bg-base-300 md:px-20 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.link} className={getActiveClass}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className='w-1/4' src="https://i.ibb.co.com/QFLHSKGj/logo.png" alt="Logo" />DocTalk
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link} className={getActiveClass}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-4xl text-white bg-[#176AE5] px-6 py-4">Emergency</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
