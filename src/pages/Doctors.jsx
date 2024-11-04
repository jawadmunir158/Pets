import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const Doctors = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'Choose The'} text2={'Doctors'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.doctor_img} alt="Doctor" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto voluptatibus quae nisi delectus, harum nam facere maxime dolores voluptate animi odio labore ratione expedita cupiditate culpa magni illo omnis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorum illo, ipsa cumque corrupti quisquam adipisci molestias minus, enim culpa deserunt laboriosam error necessitatibus voluptate reiciendis qui. Eaque, quia dolore?</p>

          <Link to="/Choose">
            <button className='self-start px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition'>
              Choose The Doctor
            </button>
          </Link>

          <b className='text-gray-800 mt-4'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsam maxime inventore ullam possimus impedit non sunt fugit officia quaerat, quia provident mollitia omnis sequi animi quasi, voluptates odio veniam.</p>
        </div>
      </div>
    </div>
  );
}

export default Doctors;