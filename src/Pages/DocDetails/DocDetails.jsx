import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const DocDetails = () => {
   const { id } = useParams();
   const data = useLoaderData();
   const details = data.find((doc) => doc.id === parseInt(id));
   const { name, education, speciality, experience, registrationNumber,image } = details;
    return (
        <div>
          
        </div>
    );
};

export default DocDetails;