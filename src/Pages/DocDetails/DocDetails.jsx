import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { addToStoredDB, getStoredBook } from '../../Components/Utilities/appointment';
import { MdErrorOutline } from "react-icons/md";
import ErrorPage from '../ErrorPage/ErrorPage';
import { FaRegRegistered } from 'react-icons/fa6';

const DocDetails = () => {
  const [isBooked, setIsBooked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate(); 
  const data = useLoaderData();

  const details = data.find((doc) => doc.id === parseInt(id));

  if (!details) {
    return (
      <ErrorPage />
  );}

  const { name, education, speciality, experience, registrationNumber, image, description, availability, fee, institute, workingAt, location } = details;


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
    <div className='bg-base-300 space-y-4'>
      <div className='w-10/12 mx-auto py-10 text-center bg-white rounded-2xl shadow-2xl'>
        <h1 className='text-2xl font-bold'>Doctor’s Profile Details</h1>
        <p className='px-2 md:px-20'>{description}</p>
      </div>


      <div className="w-10/12 mx-auto bg-white rounded-2xl shadow-2xl p-5 flex flex-col md:flex-row gap-5 items-center">
       <img
         src={image}
         alt={name}
         className='w-80 h-90 p-5'
       />
     <div className="">
       <h2 className="text-4xl font-bold">{name}</h2>
       <p className="font-semibold text-[#0F0F0F60] pt-3">{education}</p>
       <p className="text-[#0F0F0F60] font-semibold pb-3">{speciality}</p>
       <p className="text-lg text-[#0F0F0F60] font-medium">
         Working at <br />
         <span className="text-lg font-medium text-black">{workingAt}</span>
       </p>
      <p className='text-[#0F0F0F60] flex items-center justify-start gap-2 py-2 border-y-2 border-dashed border-[#0F0F0F60] my-4'> <FaRegRegistered /> Reg No : {registrationNumber}</p>
       <div className="flex flex-wrap gap-2 mt-2">
         <span className="font-semibold text-Black">Availability:</span>
         {availability.map((day, index) => (
           <span
             key={index}
             className="badge badge-soft badge-warning rounded-2xl px-3 py-1 text-sm font-semibold mr-2 mb-2"
           >
             {day}
           </span>
         ))}
       </div>


    <div className="mt-2">
      <span className="font-semibold text-black">Consultation Fee: </span>
      <span className="text-blue-600 font-bold">৳{fee}</span>{" "}
      <span className="text-xs text-gray-500">(incl. VAT)</span>
      <span className='text-blue-600'> per consultation</span>
    </div>
  </div>
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
            <MdErrorOutline className="inline mr-1" /> Due to high patient volume, we are currently accepting appointments for today only.
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
