import React from 'react';
import { Link } from 'react-router';

const Doctor = ({doctor}) => {
    const { id ,name, education, speciality, experience, registrationNumber,image } = doctor;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
    <figure className="md:px-10 pt-5 md:pt-10">
    <img
      src={image}
      alt="Doctor"
      className="rounded-xl h-60" />
          </figure>
          <div className='w-7/12 mx-auto flex gap-2 items-center py-5'>
          <div className="badge badge-soft badge-accent rounded-2xl">Available</div>
          <div className="badge badge-soft badge-primary rounded-2xl">{experience}+ Experience</div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
           
            <p className='border-b-2  border-dashed border-s-teal-50 w-full py-2'>{education} - {speciality}</p>
            <p>Reg : {registrationNumber}</p>
            
            <Link to={`/details/${id}`} className="w-full"><button className="btn btn-wide rounded-4xl text-white bg-[#176AE5]">View Details</button></Link>
        
          </div>
        </div>
    </div>
    );
};

export default Doctor;