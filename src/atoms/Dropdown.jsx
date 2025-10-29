import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";

const Dropdown = () => {

     const [showServices, setShowServices] = useState(false); // dropdown toggle
  const dropdownRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowServices(false);
      }
    };
    
    if (showServices) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showServices]);
  return (
            <li
              className='relative cursor-pointer text-blue-100 hover:text-blue-50 flex items-center justify-center lg:justify-start gap-1'
              onClick={() => setShowServices(!showServices)}
              ref={dropdownRef}
            >
              Services <MdOutlineArrowDropDown className={`transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />

              {/* Dropdown menu */}
              {showServices && (
                <ul className='absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:top-10 lg:right-0 top-full bg-white shadow-lg rounded-md py-2 max-w-sm lg:w-[500px] z-20'>
                  {/* The onClick handler below stops the click from bubbling up to the parent `li` and closing the menu immediately */}
                  <div onClick={(e) => e.stopPropagation()} className="max-h-[60vh] overflow-y-auto">
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm lg:text-base'>Urban Poverty and Urban Renewal</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm lg:text-base'>Land Use and Agricultural Development Schemes</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm lg:text-base'>Overview</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm lg:text-base'>Research and Social Action</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm lg:text-base'>Our Objectives and Mission</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm lg:text-base'>Comparative and Collaborative Work</li>
                  <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 text-sm lg:text-base'>Martina Centre's Micro Finance & Poverty Alleviation Scheme</li>
                  </div>
                </ul>
              )}
            </li>
  )
}

export default Dropdown