import React from 'react';

const Banner = () => {
    return (
        <div className='text-center w-11/12 mx-auto shadow-4xl border-4 border-white bg-base-200 rounded-2xl space-y-4  py-10'>
            <h1 className=' font-extrabold text-[30px]'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
            <p className=''>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <form className='space-x-4'>
                <input type="text" placeholder="Search any doctor..." className="input input-bordered rounded-4xl w-full max-w-xs my-5" />
                <a className="btn rounded-4xl text-white bg-[#176AE5] px-6 py-4">Search Now</a>
            </form>
            <div className='hidden md:flex gap-3 justify-center items-center'>
                <img className='h-90 md:max-w-full' src="https://i.ibb.co.com/TxWKPGZL/banner-img-1.png" alt="image" />
                <img className='h-90 md:max-w-full hidden lg:flex' src="https://i.ibb.co.com/Xkjfq992/doctor-sample.png" alt="image" />
            </div>
        </div>
    );
};

export default Banner;