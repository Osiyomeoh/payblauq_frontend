import React from 'react'
import logo from '../logo.png'

function Navbar() {
  return (
    <div className="flex items-center justify-items-center px-7">
      <div className='px-5'>
        <img src={logo} alt='Payblauq' height={120} width={120} />
      </div>
      <nav className="flex items-center justify-between">
        <ul className='text-base flex justify-between px-2'>
          <li className='px-7 py-2 font-bold text-white leading-5 hover:text-blue-300'><a href="index.html">Products</a></li>
          <li className='px-7 py-2 font-bold text-white leading-5 hover:text-blue-300'><a href="index.html">Solutions</a></li>
          <li className='px-7 py-2 font-bold text-white leading-5 hover:text-blue-300'><a href="index.html">Developers</a></li>
          <li className='px-7 py-2 font-bold text-white leading-5 hover:text-blue-300'><a href="index.html">Resources</a></li>
          <li className='px-7 py-2 font-bold text-white leading-5 hover:text-blue-300'><a href="index.html">Pricing</a></li>
        </ul>
        <ul className='flex items-center w-auto pl-20 py-5'>
          <li className='px-10 py-2 font-bold text-white leading-5 hover:text-blue-500'><a href='index.html'>Contact sales </a></li>
          <button class="bg-blue-100 hover:bg-blue-400 text-white font-bold py-2 px-4 border border-blue-100 rounded-full">
            Sign in
          </button>

        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar