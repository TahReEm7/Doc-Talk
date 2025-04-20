import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const MedicalStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className='text-center space-y-4 py-20 bg-gray-100'>
      <h1 className='font-extrabold text-[30px]'>We Provide Best Medical Services</h1>
      <p className='text-gray-600'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      <div
        ref={ref}
        className='w-10/12 mx-auto my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'
      >
        {/* Total Doctors */}
        <div className='flex flex-col gap-2 p-10 items-center justify-start text-center bg-white rounded-lg'>
          <img className='w-12 h-12' src="https://i.ibb.co.com/b5qpJHtf/success-doctor.png" alt="img" />
          <p className='text-3xl font-bold '>
            {inView && <CountUp end={199} duration={3} />}+
          </p>
          <p className='text-[#0F0F0F60]'>Total Doctors</p>
        </div>

        {/* Total Reviews */}
        <div className='flex flex-col gap-2 p-10 items-center justify-start text-center bg-white rounded-lg'>
          <img className='w-12 h-12' src="https://i.ibb.co.com/RkpfykN9/success-review.png" alt="img" />
          <p className='text-3xl font-bold '>
            {inView && <CountUp end={467} duration={3} />}+
          </p>
          <p className='text-[#0F0F0F60]'>Total Reviews</p>
        </div>

        {/* Total Patients */}
        <div className='flex flex-col gap-2 p-10 items-center justify-start text-center bg-white rounded-lg'>
          <img className='w-12 h-12' src="https://i.ibb.co.com/pBRGzYnw/success-patients.png" alt="img" />
          <p className='text-3xl font-bold '>
            {inView && <CountUp end={1900} duration={3} />}+
          </p>
          <p className='text-[#0F0F0F60]'>Total Patients</p>
        </div>

        {/* Total Staff */}
        <div className='flex flex-col gap-2 p-10 items-center justify-start text-center bg-white rounded-lg'>
          <img className='w-12 h-12' src="https://i.ibb.co.com/JR68zn6c/success-staffs.png" alt="img" />
          <p className='text-3xl font-bold '>
            {inView && <CountUp end={300} duration={3} />}+
          </p>
          <p className='text-[#0F0F0F60]'>Total Staff</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalStats;
