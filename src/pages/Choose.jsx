import React from 'react';
import { Link } from 'react-router-dom';

// Import FontAwesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Sample doctor data
const doctors = [
  {
    name: 'Dr. Danyal Zakir',
    image: 'https://storage.googleapis.com/a1aa/image/t54XnBpyrKIlEZJOYz7JFJ10ukwCecdBkqwJySsALofGT5rTA.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. WC, Inventore',
  },
  {
    name: 'Dr. Mehwish Mushtaq',
    image: 'https://storage.googleapis.com/a1aa/image/zNkdUvsqxqLAAh0OUvFzfdaKUU9exuHi5F8sjzpUw4MET5rTA.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. WC, Inventore',
  },
  {
    name: 'Dr. Maha Ijaz',
    image: 'https://storage.googleapis.com/a1aa/image/zNkdUvsqxqLAAh0OUvFzfdaKUU9exuHi5F8sjzpUw4MET5rTA.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. WC, Inventore',
  },
  {
    name: 'Dr. Jawad',
    image: 'https://storage.googleapis.com/a1aa/image/zNkdUvsqxqLAAh0OUvFzfdaKUU9exuHi5F8sjzpUw4MET5rTA.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. WC, Inventore',
  },
];

// DoctorCard component
const DoctorCard = ({ doctor }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <img alt={`Portrait of ${doctor.name}`} className="w-24 h-24 rounded-full mx-auto" src={doctor.image} />
    <h2 className="text-xl font-medium mt-4">{doctor.name}</h2>
    <p className="text-gray-600 mt-2">{doctor.description}</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a className="text-gray-600 hover:text-gray-800" href="#">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className="text-gray-600 hover:text-gray-800" href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a className="text-gray-600 hover:text-gray-800" href="#">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a className="text-gray-600 hover:text-gray-800" href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    <div className="flex justify-center space-x-4 mt-4">
      <Link to="/DocSchedule">
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Check Schedule
      </button>
      </Link>
      <Link to="/Appointment" >
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Book Appointment
      </button>
      </Link>
    </div>
  </div>
);

// Choose component
const Choose = () => {
  return (
    <div className="px-4">
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold md:text-3xl">Choose a Doctor</h1>
        <p className="text-gray-600 mt-2 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, explicabo.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* First doctor in the upper row */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <DoctorCard doctor={doctors[0]} />
        </div>
        {/* Remaining doctors in the second row */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <DoctorCard doctor={doctors[1]} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <DoctorCard doctor={doctors[2]} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <DoctorCard doctor={doctors[3]} />
        </div>
      </div>
    </div>
  );
};

export default Choose;