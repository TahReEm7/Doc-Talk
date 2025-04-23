import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredBook, removeFromStoredDB } from '../../../Components/Utilities/appointment';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, LabelList, ResponsiveContainer } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedDocIds = getStoredBook();
    const parsedIds = storedDocIds.map(id => parseInt(id));
    const bookedDoctors = data.filter(doc => parsedIds.includes(doc.id));
    setReadList(bookedDoctors);
  }, [data]);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const chartData = readList.map(doc => ({
    name: doc.name,
    fee: doc.fee,
  }));

  const handleCancel = (id) => {
    const updatedList = readList.filter(doc => doc.id !== id);
    const doctor = readList.find(doc => doc.id === id);
    setReadList(updatedList);
    removeFromStoredDB(id);
    toast.info(`Cancelled appointment with Dr. ${doctor?.name}`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <>
      <ToastContainer />
      {readList.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <img
            src="https://i.ibb.co.com/kVSWyfFV/book-doctor-appointment-card-template-schedule-hospital-visit-editable-social-media-post-design-flat.jpg"
            alt="No appointment"
            className="w-28 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-4">You haven’t booked any appointment</h2>
          <p className="text-gray-600 mb-6">Looks like you're missing out on great health support!</p>
          <Link
            to="/"
            className="px-6 py-3 rounded-4xl text-white bg-[#176AE5] hover:bg-blue-700 transition duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      ) : (
        <div className="w-10/12 mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-8">Your Booked Appointments</h2>

          {/* Chart Section */}
          <div className="w-full md:w-3/4 mx-auto mb-10">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="fee" fill="#8884d8">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                  <LabelList
                    dataKey="fee"
                    position="top"
                    fill="#00000069"
                    fontSize={18}
                    fontWeight="semibold"
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Booked Appointments List */}
          <div className="space-y-4">
            {readList.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                <div className='flex justify-between text-gray-500 border-b-2 mb-4 pb-2 border-dashed'> 
                <p>{doc.education} ,{doc.speciality}  ,{doc.location}</p>
                <p>Appointment Fee : {doc.fee} Taka (incl. VAT)</p>
                </div>
                <button
                  onClick={() => handleCancel(doc.id)}
                  className="btn btn-block btn-outline btn-error rounded-2xl"
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
