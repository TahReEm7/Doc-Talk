import React from 'react';

const Doctor = ({doctor}) => {
    const { name, education, speciality, experience, registrationNumber,image } = doctor;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
    <figure className="px-10 pt-10">
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
            
            <button className="btn btn-wide">View Details</button>
        
          </div>
        </div>
    </div>
    );
};

export default Doctor;