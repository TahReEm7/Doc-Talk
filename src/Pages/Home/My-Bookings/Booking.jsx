import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredBook, removeFromStoredDB } from '../../../Components/Utilities/appointment';

const Booking = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedDocIds = getStoredBook();
    const parsedIds = storedDocIds.map(id => parseInt(id));
    const bookedDoctors = data.filter(doc => parsedIds.includes(doc.id));
    setReadList(bookedDoctors);
  }, [data]);

  const handleCancel = (id) => {
    const updatedList = readList.filter(doc => doc.id !== id);
    setReadList(updatedList);
    removeFromStoredDB(id);
  };

  return (
    <>
      {readList.length === 0 ? (
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
      ) : (
        <div className="w-10/12 mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-8">Your Booked Appointments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {readList.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                <p><strong>Speciality:</strong> {doc.speciality}</p>
                <p><strong>Date:</strong> {doc.date ? new Date(doc.date).toLocaleDateString() : 'No date set'}</p>
                <button
                  onClick={() => handleCancel(doc.id)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;
