import React from 'react';
import Title from '../components/Title';

const Appointment = () => {
  return (
    <div className='bg-white flex justify-center items-center h-screen pt-20'> {/* Increased padding from 10 to 20 */}
      <div className='w-full max-w-xl border border-gray-300 p-4'> {/* Changed max-w-lg to max-w-xl */}
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl font-bold'>Request an Appointment</h1>
          <div className='flex items-center'>
            <div className='bg-teal-500 p-1 rounded-full'>
              <i className='fas fa-cog text-white'></i>
            </div>
            <span className='ml-2 text-teal-500 font-bold'>Pet Solutions</span>
          </div>
        </div>
        <div className='text-xl text-center pt-4 border-t mb-4'>
          <Title text1={'Choose Doctor'} text2={'Appointment'} />
        </div>
        <form>
          <div className='mb-3'>
            <label className='block text-gray-700'>Name</label>
            <div className='flex space-x-2'>
              <input type='text' placeholder='First Name' className='w-1/2 border border-gray-300 p-1' />
              <input type='text' placeholder='Last Name' className='w-1/2 border border-gray-300 p-1' />
            </div>
          </div>
          <div className='mb-3'>
            <label className='block text-gray-700'>Phone Number</label>
            <input type='text' placeholder='(000) 000 - 000' className='w-full border border-gray-300 p-1' />
          </div>
          <div className='mb-3'>
            <label className='block text-gray-700'>Email</label>
            <input type='email' placeholder='example@example.com' className='w-full border border-gray-300 p-1' />
          </div>
          <div className='mb-3'>
            <label className='block text-gray-700'>First Time Visit?</label>
            <div className='flex items-center space-x-2'>
              <label className='flex items-center'>
                <input type='radio' name='first_time' className='mr-1' />
                Yes
              </label>
              <label className='flex items-center'>
                <input type='radio' name='first_time' className='mr-1' />
                No
              </label>
            </div>
          </div>
          <div className='mb-3'>
            <label className='block text-gray-700'>Select a Doctor</label>
            <select className='w-full border border-gray-300 p-1'>
              <option value=''>Select a doctor</option>
              <option value='doctor1'> Dr. Jane Smith</option>
              <option value='doctor2'> Dr. Emily Johnson</option>
              <option value='doctor3'> Dr. John Doe</option>
              <option value='doctor4'> Dr. Mike Brown</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='block text-gray-700'>Select an Appointment Date</label>
            <div className='flex space-x-2'>
              <input type='date' className='w-1/2 border border-gray-300 p-1' />
              <input type='text' placeholder='Hour' className='w-1/2 border border-gray-300 p-1' />
            </div>
          </div>
          <div className='mb-3'>
            <label className='block text-gray-700'>Comments</label>
            <textarea className='w-full border border-gray-300 p-1 h-24'></textarea>
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='self-start px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;