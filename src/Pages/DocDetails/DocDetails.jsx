import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams, useNavigate, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { addToStoredDB, getStoredBook } from '../../Components/Utilities/appointment';
import { MdErrorOutline } from "react-icons/md";

const DocDetails = () => {
  const [isBooked, setIsBooked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate(); 
  const data = useLoaderData();

  // Try to find the doctor
  const details = data.find((doc) => doc.id === parseInt(id));

  // ✅ If no doctor found, redirect to error page
  if (!details) {
    return <Navigate to="/error" replace />;
  }

  const { name, description } = details;

  useEffect(() => {
    const stored = getStoredBook();
    setIsBooked(stored.includes(String(id)));
  }, [id]);

  const handleClick = () => {
    if (!isBooked) {
      addToStoredDB(id);
      setIsBooked(true);
      toast.success(`Appointment booked with Dr. ${name}`);
      setTimeout(() => navigate('/My-Bookings'), 500);
    } else {
      toast.error(`Appointment already booked with Dr. ${name}`);
    }
  };

  return (
    <div className='bg-base-300'>
      <div className='w-10/12 mx-auto py-10 text-center bg-white rounded-2xl shadow-2xl'>
        <h1 className='text-2xl font-bold'>Doctor’s Profile Details</h1>
        <p className='px-2 md:px-20'>{description}</p>
      </div>

      <div className='w-10/12 mx-auto py-10 text-center bg-white rounded-2xl shadow-2xl mb-10'>
        <div className='w-11/12 mx-auto text-center'>
          <h1 className='text-2xl font-bold border-b-4 p-5 border-dashed border-base-200'>Book an Appointment</h1>
        </div>

        <div className='flex justify-between items-center w-11/12 mx-auto border-b-4 md:p-5 p-2 border-dashed border-base-200'>
          <p className='font-semibold'>Availability</p>
          <div className={`badge ${isBooked ? 'badge-error' : 'badge-success'}`}>
            {isBooked ? 'Appointment Booked' : 'Doctor Available Today'}
          </div>
        </div>

        <div className='w-11/12 mx-auto mt-5'>
          <ToastContainer />
          <p className='badge badge-soft badge-warning mb-4 overflow-ellipsis'>
            <MdErrorOutline /> Due to high patient volume, we are currently accepting appointments for today only.
          </p>
          <button
            onClick={handleClick}
            className={`btn rounded-4xl text-white px-6 py-4 btn-block ${
              isBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#176AE5]'
            }`}
          >
            {isBooked ? 'Already Booked' : 'Book an Appointment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocDetails;
