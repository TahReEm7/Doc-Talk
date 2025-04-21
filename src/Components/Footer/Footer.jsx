import React from 'react';
import { NavLink, Link } from 'react-router';
const Footer = () => {
    const footItems = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "My-Bookings", link: "/My-Bookings" },
        { id: 3, name: "Blog", link: "/blog" },
        { id: 4, name: "Contact", link: "/contact" }
      ];
    return (
        <div>
            <footer className="flex flex-col items-center justify-between p-10 bg-white">
  <aside className='flex gap-3.5'>
    <img src="https://i.ibb.co.com/QFLHSKGj/logo.png" alt="Logo" />
    <h1 className='font-bold text-4xl'>Phedu</h1>
  </aside>
  <nav>
    <ul className="menu menu-horizontal px-1">
          {footItems.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className='hover:underline'>{item.name}</Link>
            </li>
          ))}
    </ul>
  </nav>
  <nav className='border-t-2 border-[#0F0F0F40] md:px-20 pt-3'>
    <div className="grid grid-flow-col gap-4">
    <a
    href="https://www.twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-ghost"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current text-blue-400"
    >
      <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.933 4.933 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195A4.924 4.924 0 0 0 16.616 3c-2.724 0-4.932 2.208-4.932 4.932 0 .39.043.765.127 1.126C7.728 8.873 4.1 6.91 1.67 3.888a4.908 4.908 0 0 0-.666 2.475c0 1.71.87 3.216 2.188 4.099A4.904 4.904 0 0 1 .96 9.54v.062c0 2.388 1.698 4.384 3.946 4.836a4.935 4.935 0 0 1-2.224.084c.626 1.955 2.444 3.376 4.6 3.416A9.868 9.868 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 21c9.142 0 14.307-7.72 13.995-14.646A9.935 9.935 0 0 0 24 4.557z" />
    </svg>
  </a>
      <a
  href="https://www.youtube.com"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-ghost"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current text-red-500"
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
</a>

<a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-ghost"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-current text-blue-600"
    >
      <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.13 22 16.991 22 12z" />
    </svg>
  </a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;