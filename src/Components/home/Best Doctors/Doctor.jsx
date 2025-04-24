import React from 'react';
import { Link } from 'react-router';
import { FaRegRegistered } from "react-icons/fa6";

const Doctor = ({doctor}) => {
    const { id ,name, education, speciality, experience, registrationNumber,image } = doctor;
    return (
        <div>
            <div className="flex flex-col text-start justify-start rounded-2xl p-5 bg-base-100 shadow-sm">
    <img
      src={image}
      alt="Doctor"
      className="rounded-xl p-2 h-60" />
          <div className='flex gap-2 py-5'>
          <div className="badge badge-soft badge-accent rounded-2xl">Available</div>
          <div className="badge badge-soft badge-primary rounded-2xl">{experience}+ Experience</div>
          </div>
          <div className=" text-start px-4">
            <h2 className="font-bold text-2xl">{name}</h2>
           
            <p className='border-b-2  border-dashed border-s-[#0F0F0F60] w-full py-2 text-[#0F0F0F60]'>{education} - {speciality}</p>
            <p className='text-[#0F0F0F60] flex items-center gap-3 py-2'> <FaRegRegistered /> Reg No : {registrationNumber}</p>
            <div>
            <Link to={`/details/${id}`}><button className="btn btn-block btn-outline btn-primary rounded-4xl">View Details</button></Link>
            </div>
        
          </div>
        </div>
    </div>
    );
};

export default Doctor;