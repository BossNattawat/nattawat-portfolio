import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed z-10" data-theme="dim">
        <div className="navbar-start my-3">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="#home" className='text-xl my-2'>Home</Link></li>
                <li><Link href="#about" className='text-xl my-2'>About</Link></li>
                <li><Link href="#project" className='text-xl my-2'>Projects</Link></li>
                <li><Link href="#certification" className='text-xl my-2'>Certification</Link></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-3xl" href='#home'>Nattawat</a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="#home" className='text-xl px-5 mx-2 font-semibold'>Home</Link></li>
                <li><Link href="#about" className='text-xl px-5 mx-2 font-semibold'>About</Link></li>
                <li><Link href="#project" className='text-xl px-5 mx-2 font-semibold'>Projects</Link></li>
                <li><Link href="#certification" className='text-xl px-5 mx-2 font-semibold'>Certification</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link href="#contact" className="btn btn-primary text-lg mr-3">Contact Me</Link>
        </div>
    </div>
  )
}

export default Navbar