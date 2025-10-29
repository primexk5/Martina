import React, { useState } from 'react'
import Dropdown from '../atoms/Dropdown';

import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);       // mobile menu toggle

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-slate-800 border-b-4 border-green-600  z-50 shadow-md">
      <nav className='lg:flex-row lg:flex items-center justify-between lg:p-5 lg:px-80 relative'>

        {/* Logo and mobile toggle */}
        <div className='flex items-center justify-between p-3 lg:p-0'>
          <div>
            <h1 className='text-4xl font-semibold text-blue-100'>Martina</h1>
            <p className='text-sm text-gray-100'>Centre for Sustainable</p>
          </div>

          <p
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden cursor-pointer'
          >
            {!isOpen ? <Menu className='text-3xl text-white' /> : <X className='text-3xl text-white'/>}
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
            <li>
              <a href="#home" className='cursor-pointer font-bold text-blue-100 hover:text-blue-50'>Home</a>
            </li>
            <li>
              <a href="#about" className='cursor-pointer text-blue-100 hover:text-blue-50'>About</a>
            </li>

            <Dropdown />
            <li ><a className='cursor-pointer text-blue-100 hover:text-blue-50' href="">Team</a></li>

            <li className='cursor-pointer text-blue-100 hover:text-blue-50'>Contact</li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;