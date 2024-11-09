import React from 'react';
import Title from '../components/Title';

const Appointment = () => {
  return (
    <div className='bg-white flex justify-center items-center'>
      <div className='w-full max-w-xl border border-gray-300 p-4'>
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
        
        {/* New Dropdown for selecting doctor */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Select the Doctor:</label>
          <select className="w-full p-2 border rounded">
            <option>Please select</option>
            <option>Dr. Danyal Zakir</option>
            <option>Dr. Mehwish Mushtaq</option>
            <option>Dr. Maha Ijaz</option>
            <option>Dr. Jawad</option>
          </select>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">What pet do you have?</label>
            <div className="grid grid-cols-3 gap-2">
              {['Cats', 'Dogs', 'Birds', 'Rabbits', 'Horse', 'Ferrets', 'Fish', 'Guinea pig', 'Other'].map((pet) => (
                <label key={pet} className="flex items-center text-gray-700">
                  <input className="mr-2" name="pet" type="radio" />
                  {pet}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">What type of veterinary services are you looking for?</label>
            <select className="w-full p-2 border rounded">
              <option>Please select</option>
              <option>General Checkup</option>
              <option>Vaccination</option>
              <option>Surgery</option>
              <option>Dental Care</option>
              <option>Emergency</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Your name:</label>
            <div className="grid grid-cols-2 gap-2">
              <input className="p-2 border rounded" placeholder="First" type="text" />
              <input className="p-2 border rounded" placeholder="Last" type="text" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Your email address:</label>
            <input className="w-full p-2 border rounded" placeholder="Your email address" type="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Pet's Age:</label>
            <input className="w-full p-2 border rounded" placeholder="Pet's Age" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Pet's Breed:</label>
            <input className="w-full p-2 border rounded" placeholder="Pet's Breed" type="text" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Is your pet currently on any medication?</label>
            <textarea className="w-full p-2 border rounded" placeholder="Please list any medications" rows="2"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Has your pet had any previous surgeries or medical conditions?</label>
            <textarea className="w-full p-2 border rounded" placeholder="Please describe any previous surgeries or medical conditions" rows="2"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Please share information about your pet's condition:</label>
            <textarea className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button className="w-full bg-black text-white p-2 rounded" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Appointment;