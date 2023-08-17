import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); 
  
  return (
    <nav className="sticky top-0 shadow-lg hover:text-neutral-700 dark:bg-neutral-600 z-10 w-full py-3 p-10 flex justify-between items-center navbar">
      <img src={logo} alt="Payblauq" className="h-[120] w-[120] mr-4" />
      <div className="list-none  sm:flex hidden justify-between items-center flex-1">
        <ul className="text-base flex justify-between px-2">
          <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
            <Link to='/'>Products</Link>
          </li>
          <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
            <Link to='/'>Solutions</Link>
          </li>
          <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
            <Link to='./pages/developers'>Developers</Link>
          </li>
          <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
            <Link to='/'>Resources</Link>
          </li>
          <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
            <Link to='/'>Pricing</Link>
          </li>
        </ul>
        <ul className="flex items-center w-auto pl-20 py-5">
          <li className="px-10 py-2 font-bold text-white leading-5 hover:text-blue-500">
            <a href="index.html">Contact sales </a>
          </li>
          <button className="bg-blue-100 hover:bg-blue-400 text-white font-bold py-2 px-4 border border-blue-100 rounded-full">
            Sign in
          </button>
        </ul>
      </div>

      {/* Mobile navigation Bar */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggleMenu((prev) => !prev)}
        />

         {/* Mobile menu */}
        <div
          className={`${
            !toggleMenu ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] 
          rounded-xl sidebar`}
        >
          
           {/* mobile menu ul */}
          <div className="list-none flex justify-end items-start flex-1 flex-col">
          <img src={logo} alt="Payblauq" className="h-[120] w-[120] mr-4" />
            <ul className="text-base flex justify-between px-2 flex-col">
              <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
                <a href="index.html">Products</a>
              </li>
              <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
                <a href="index.html">Solutions</a>
              </li>
              <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
                <a href="index.html">Developers</a>
              </li>
              <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
                <a href="index.html">Resources</a>
              </li>
              <li className="px-7 py-2 font-bold text-white leading-5 hover:text-blue-300">
                <a href="index.html">Pricing</a>
              </li>
            </ul>
            <ul className="flex items-center w-auto pl-20 py-5">
              <li className="px-10 py-2 font-bold text-white leading-5 hover:text-blue-500">
                <a href="index.html">Contact sales </a>
              </li>
              <button className="bg-blue-100 hover:bg-blue-400 text-white font-bold py-2 px-4 border border-blue-100 rounded-full">
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
