import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useTheme } from '../context/ThemeContext'; // Import the ThemeContext
import { FaMoon, FaSun } from 'react-icons/fa'; // Importing icons from react-icons

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const { darkMode, toggleDarkMode } = useTheme(); // Use the ThemeContext

  // Conditionally set the logo image based on the darkMode state
  const logoSrc = darkMode ? assets.logodark : assets.logo;

  return (
    <div className={`flex items-center justify-between py-5 font-medium ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-700'}`}>
      <Link to='/'>
        <img src={logoSrc} className='w-36' alt="Logo" />
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm'>
        {/* Nav Bar Links */}
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/ai' className='flex flex-col items-center gap-1'>
          <p>Meta AI</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/doctors' className='flex flex-col items-center gap-1'>
          <p>Doctors</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>DONATE NOW</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="Search Icon" />

        {/* Dark Mode Toggle with Sun and Moon Icons */}
        <button onClick={toggleDarkMode} className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent border-none cursor-pointer">
          {darkMode ? (
            <FaSun className="text-yellow-500 w-5 h-5" />
          ) : (
            <FaMoon className="text-gray-800 w-5 h-5" />
          )}
        </button>

        <div className='group relative'>
          <Link to='/login'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile Icon" />
          </Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart Icon" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}
          </p>
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu Icon" />
      </div>

      {/* SideBar Menu for Small Screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-600'} transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Back Icon" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/donate'>DONATE US</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/ai'>Meta AI</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-300' to='/doctors'>Doctors</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;