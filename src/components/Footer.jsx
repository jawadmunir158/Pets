import React, { useContext } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { useTheme } from '../context/ThemeContext'; // Import the ThemeContext

const Footer = () => {
  const { darkMode } = useTheme(); // Get the darkMode state from the ThemeContext

  // Conditionally set the logo image based on the darkMode state
  const logoSrc = darkMode ? assets.logodark : assets.logo;

  return (
    <div className=''>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={logoSrc} className='mb-5 w-32' alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim necessitatibus repellendus ipsa. Tempora totam voluptate eaque veniam voluptates! Optio ipsa distinctio qui recusandae. Tempore autem incidunt illum iure reprehenderit.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'> COMPANY </p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>0318-xxxxxx</li>
            <li>jawad@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024@ forever.com all Right Reserved 
        </p>
      </div>
    </div>
  );
}

export default Footer;