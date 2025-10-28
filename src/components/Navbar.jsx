import React from 'react'
// import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <nav className='lg:flex-row lg:flex items-center justify-between'>

      <div className='flex items-center justify-between p-3'>
          <div>
           <h1 className='text-4xl font-semibold text-blue-800'>Martina</h1>
           <p className='text-sm'>Centre for Sustainable</p>
        </div>
        {/* <CiMenuFries/> */}
        <p className='lg:hidden'>M</p>
      </div>

        <div>
          <ul className=' text-center lg:text-start flex flex-col lg:flex-row gap-7'>
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