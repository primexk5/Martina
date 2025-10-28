import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);       // mobile menu toggle
  const [showServices, setShowServices] = useState(false); // dropdown toggle

  return (
    <div>
      <nav className='lg:flex-row lg:flex items-center justify-between lg:p-5 lg:px-44 relative'>

        {/* Logo and mobile toggle */}
        <div className='flex items-center justify-between p-3 lg:p-0'>
          <div>
            <h1 className='text-4xl font-semibold text-blue-800'>Martina</h1>
            <p className='text-sm text-gray-500'>Centre for Sustainable</p>
          </div>

          <p
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden cursor-pointer'
          >
            {!isOpen ? <Menu className='text-3xl' /> : <X />}
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <ul
            className={
              !isOpen
                ? "hidden lg:flex py-4 lg:gap-7"
                : "text-center lg:text-start flex flex-col lg:flex-row gap-5 py-4 lg:gap-7"
            }
          >
            <li className='cursor-pointer font-bold text-blue-800 hover:text-blue-400'>
              Home
            </li>
            <li className='cursor-pointer hover:text-blue-800'>About</li>

            {/* Services with Dropdown */}
            <li
              className='relative cursor-pointer hover:text-blue-800 flex items-center gap-1'
              onClick={() => setShowServices(!showServices)}
            >
              Services <MdOutlineArrowDropDown className={`transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />

              {/* Dropdown menu */}
              {showServices && (
                <ul className='absolute top-6 left-0 bg-white shadow-lg rounded-md py-2 w-[500px] z-20'>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700'>Urban Poverty and Urban Renewal</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700'>Land Use and Agricultural Development Schemes</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700'> Overview</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700'> Research and Social Action</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700'> Our Objectives and Mission</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700'> Comparative and Collaborative Work</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700'> Martina Centre’s Micro Finance & Poverty Alleviation Scheme</li>
                </ul>
              )}
            </li>

            <li className='cursor-pointer hover:text-blue-800'>Contact</li>
          </ul>
        </div>

        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;