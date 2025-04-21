import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'; // use react-router-dom
import { toast, ToastContainer } from 'react-toastify';
import { addToStoredDB } from '../../Components/Utilities/appointment';
import { MdErrorOutline } from "react-icons/md";

const DocDetails = () => {
  const [isBooked, setIsBooked] = useState(false);

  const handleBookingToggle = () => {
    setIsBooked(prev => !prev);
  };


  const handleMarkAsRead = id => {
    if (!isBooked) {
      toast.success(`Appointment booked successfully with Dr. ${name}`);
    } else {
      toast.info(`Appointment with Dr. ${name} has been cancelled.`);
    }
    addToStoredDB(id)
}

const handleClick = () => {
  handleBookingToggle();
  handleMarkAsRead(id);
};
  const { id } = useParams();
  const data = useLoaderData();
  const details = data.find((doc) => doc.id === parseInt(id));

  const { name, education, speciality, experience, registrationNumber, image, description, availability } = details;

  return (
    <div className='bg-base-300'>
      <div className='w-10/12 mx-auto py-10 text-center bg-white rounded-2xl shadow-2xl'>
        <h1 className='text-2xl font-bold'>Doctor’s Profile Details</h1>
        <p className='px-20'>{description}</p>
      </div>

      <div>
        <div className="w-10/12 mx-auto bg-base-100 shadow-xl mt-10 mb-10">
          {/* Optional: Additional content */}
        </div>

        <div className='w-10/12 mx-auto py-10 text-center bg-white rounded-2xl shadow-2xl mb-10'>
          <div className='w-11/12 mx-auto text-center'>
            <h1 className='text-2xl font-bold border-b-4 p-5 border-dashed border-base-200'>Book an Appointment</h1>
          </div>

          <div className='flex justify-between items-center w-11/12 mx-auto border-b-4 p-5 border-dashed border-base-200'>
            <p className='font-semibold'>Availability</p>
            <div className={`badge ${isBooked ? 'badge-error' : 'badge-success'}`}>
              {isBooked ? 'Appointment Booked' : 'Doctor Available Today'}
            </div>
          </div>

          <div className='w-11/12 mx-auto mt-5'>
          <ToastContainer />
          <p className='badge badge-soft badge-warning mb-4'><MdErrorOutline /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
          <button
  onClick={handleClick}
  className={`btn rounded-4xl text-white px-6 py-4 btn-block ${
    isBooked ? 'bg-red-400' : 'bg-[#176AE5]'
  }`}
>
  {isBooked ? 'Cancel Appointment' : 'Book an Appointment'}
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocDetails;
