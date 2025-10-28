import React from 'react'
import { useState } from 'react'
// import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className='lg:flex-row lg:flex items-center justify-between lg:p-5 lg:px-44'>

      <div className='flex items-center justify-between p-3 lg:p-0'>
          <div>
           <h1 className='text-4xl font-semibold text-blue-800'>Martina</h1>
           <p className='text-sm text-gray-500'>Centre for Sustainable</p>
        </div>
        {/* <CiMenuFries/> */}
        <p onClick={() => setIsOpen(!isOpen)} className='lg:hidden'>{!isOpen ? "M" : "C"}</p>
      </div>

        <div>
          <ul className={!isOpen ?  "hidden lg:flex  py-4 lg:gap-7" : 'text-center lg:text-start flex flex-col lg:flex-row gap-5 py-4 lg:gap-7'}>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
        </div>

        <div></div>

      </nav>
    </div>
  )
}

export default Navbar