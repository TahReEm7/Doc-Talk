import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3659/3659739.png"
        alt="No appointment"
        className="w-28 mb-4"
      />
      <h2 className="text-2xl font-semibold mb-4">You haven’t booked any appointment</h2>
      <p className="text-gray-600 mb-6">Looks like you're missing out on great health support!</p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Book Now
      </Link>
    </div>
  );
};

export default Booking;
