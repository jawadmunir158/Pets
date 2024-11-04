import React from 'react';

import { Button } from 'react-chatbotify';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg  w-full max-w-4xl">
        <div className="flex justify-between mb-4"> 
          <h1 className="text-3xl font-bold text-black-700">
            Donate Now
          </h1>
          <Link to="/Donate">
            <button className='pt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition'>
              DONATE US
            </button>
          </Link>
        </div>
        
        {/* Centered First Image */}
        <img
          alt="A cute puppy with white and brown fur looking at the camera"
          className="w-2/4 rounded-lg mb-4 mx-auto" 
          height="300"
          src="https://storage.googleapis.com/a1aa/image/WNYrkWifephLZkmmB55h2IMw66DSlOZpe6PP2PqNbHZ6hZSnA.jpg"
          width="450"
        />
        <p className="text-gray-700 mb-4">
          Your tax-deductible gift goes directly to animal shelters and rescue groups caring for pets in need.
        </p>

        {/* Row of Images */}
        <div className="flex justify-center space-x-4 pt-6"> 
          <div className="flex flex-col items-center">
            <img
              alt="A group of kittens playing together"
              className="w-2/4 rounded-lg mb-2"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/zqFsa9j1IeRnDSL9C1SxQIqnA4nXxmS0rNnWZgWMHSPPam0JA.jpg"
              width="150"
            />
            <p className="text-gray-700 text-center">
              Help provide food and medical care for these adorable kittens.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="A dog receiving medical treatment"
              className="w-2/4 rounded-lg mb-2"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/flb493djtfqWfI8vIZr1jnYJjseqFaU9LEFvQUIE2I62RzkOB.jpg"
              width="150"
            />
            <p className="text-gray-700 text-center">
              Your donations ensure that pets receive the medical attention they need.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              alt="A happy dog being adopted"
              className="w-2/4 rounded-lg mb-2"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/2iYK1Td9RAr7IVOfnZTEg1m2y8pKpGAhZsk8uceufuA3oZSnA.jpg"
              width="150"
            />
            <p className="text-gray-700 text-center">
              Support our adoption programs to find loving homes for pets.
            </p>
          </div>
           
        </div>
       
      </div>
    </div>
  );
}

export default Contact;