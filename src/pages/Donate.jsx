import React, { useState } from 'react';
import Title from '../components/Title';

import NewsLetterBox from '../components/NewsLetterBox';

const Donate = () => {
  // Step 1: Create a state variable for the donation amount
  const [donationAmount, setDonationAmount] = useState('');

  // Step 3: Function to handle donation
  const handleDonate = () => {
    if (donationAmount) {
      // Here you would typically handle the donation logic, e.g., API call
      alert(`Thank you for your donation of $${donationAmount}!`);
      setDonationAmount(''); // Clear the input after donation
    } else {
      alert('Please enter a valid donation amount.');
    }
  };

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'DONATE'} text2={'US'} />
      </div>

      <div className="font-roboto ">
        <main className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-center my-6">
            Help Skipper SKIP again!
          </h1>
          <div className="flex mb-6">
            <img 
              alt="Collage of dog images and x-ray" 
              className="rounded-lg shadow-lg w-2/3" 
              height="400" 
              src="https://storage.googleapis.com/a1aa/image/3hnrUf0U7G0rFCPBE5ympGuIGhvmlihhnvCs9RpeWrypd5nTA.jpg" 
              width="800" 
            />
            <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg ml-4">
              <div className="text-2xl font-bold mb-2">
                $4,784
                <span className="text-gray-500 text-lg">
                  raised of $2,500 goal
                </span>
              </div>
              <div className="text-gray-500 mb-4">
                114 donations
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>

              {/* Step 2: Add input field for donation amount */}
              <input 
                type="number" 
                placeholder="Enter donation amount" 
                value={donationAmount} 
                onChange={(e) => setDonationAmount(e.target.value)} 
                className="border border-gray-300 rounded py-2 px-4 mb-2 w-full"
              />
              
              <button 
                className="bg-yellow-500 text-white w-full py-2 rounded mb-2"
                onClick={() => alert('Share functionality not implemented')}
              >
                Share
              </button>
              <button 
                className="bg-yellow-500 text-white w-full py-2 rounded"
                onClick={handleDonate} // Call the donation function
              >
                Donate now
              </button>
              
              <div className="mt-4">
                {[
                  { name: 'Anonymous', amount: '$20', note: 'Recent donation' },
                  { name: 'Leanne Courtney', amount: '$500', note: 'Top donation' },
                  { name: 'Natalie Romero', amount: '$40', note: 'First donation' },
                ].map((donor, index) => (
                  <div className="flex items-center mb-2" key={index}>
                    <img 
                      alt="Profile image" 
                      className="rounded-full" 
                      height="30" 
                      src="https://storage.googleapis.com/a1aa/image/aipoSEjMXXo5GNBt5SiDTWlwz8OXnDhVHnOa6u7powlaXezJA.jpg" 
                      width="30" 
                    />
                    <div className="ml-2">
                      <p className="font-medium">{donor.name}</p>
                      <p className="text-gray-500">
                        {donor.amount} • 
                        <a className="text-gray-500" href="#">{donor.note}</a>
                      </p>
                    </div>
                  </div>
                ))}
                <button className="text-green-600 w-full py-2 rounded border border-green-600">
                  See all
                </button>
                <button className="text-gray-600 w-full py-2 rounded border border-gray-600 mt-2">
                  See top donations
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img 
              alt="Profile image" 
              className="rounded-full" 
              height="50" 
              src="https://storage.googleapis.com/a1aa/image/aipoSEjMXXo5GNBt5SiDTWlwz8OXnDhVHnOa6u7powlaXezJA.jpg" 
              width="50" 
            />
            <div className="ml-4">
              <p className="font-medium">
                Jawad is organizing this fundraiser to benefit Pet Finder Foundastion Society .
              </p>
              <p className="text-gray-500">
                Created 5 days ago • 
                <a className="text-green-600" href="#">Pets</a>
              </p>
            </div>
          </div>
        </main>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Donate