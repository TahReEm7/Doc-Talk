import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import Doctor from './doctor';
const BestDoc = () => {
     const [doc, setDoc] = useState([]);
      const [loading, setLoading] = useState(true);

       useEffect(() => {
          fetch('/doctorsData.json')
            .then((response) => response.json())
            .then((data) => {
                setDoc(data);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
              setLoading(false);
            });
        }, []);
    return (
        <div className='text-center space-y-4 py-20'>
            <h1 className=' font-extrabold text-[30px]'>Our Best Doctors</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a  <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto mt-6'>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <PacmanLoader color="#3681d7" size={25} />
        </div>
      ) : (
        doc.map((doctor) => <Doctor key={doctor.id} doctor={doctor} />)
      )}
    </div>
            </div>
            <div> <button className='btn btn-primary'>View All</button></div>
        </div>
    );
};

export default BestDoc;