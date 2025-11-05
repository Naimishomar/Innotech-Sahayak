import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className='flex justify-between items-center w-full md:px-10 px-5 py-5'>
        <Link to='/'><img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662cd9e2344b991e0f976c49_logo-darkmode.png" alt="logo" className='w-30'/></Link>
        <div className='hidden md:block'>
            <ul className='flex gap-10'>
                <li className='hover:underline cursor-pointer font-semibold'>Help & Support</li>
                <li className='hover:underline cursor-pointer font-semibold'>Benefits</li>
                <li className='hover:underline cursor-pointer font-semibold'>Features</li>
            </ul>
        </div>
        <div className='gap-6 flex'>
            <button className='px-6 py-2 bg-[#4F46E5] text-white font-semibold rounded-full text-md cursor-pointer hover:bg-[#5a53e8]'>Login</button>
            <button className='px-6 py-2 bg-[#4F46E5] text-white font-semibold rounded-full text-md cursor-pointer hover:bg-[#5a53e8] hidden md:block'>Download For Free<i className="ri-arrow-right-long-line ml-1"></i></button>
        </div>
    </div>
    </>
  )
}

export default Navbar