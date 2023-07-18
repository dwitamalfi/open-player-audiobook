import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export const Navbar = ({handleClickLogin}) => {
  
  
  return (
    <div className="container fixed max-w-full bg-white z-10 py-5 bg-opacity-80 shadow-sm backdrop-blur-xl">
    <div className="xl:mx-20 lg:mx-20 md:mx-auto flex justify-between">
      <Link
        href="/"
        aria-label="Dimulai"
        title="Dimulai"
        className="inline-flex items-center"
      >
         <Image 
          src='/assets/images/logodimulai.png' 
          className="mr-3 h-8 rounded-full" 
          alt="Logo" 
          width='32' // required
          height='32' // change to suit your needs
        />
        {/* <img src='/assets/images/logodimulai.png' className="mr-3 h-8 rounded-full" alt="Logo" /> */}
        <span className="ml-2 text-2xl font-blueberry tracking-wide text-gray-800 ">
          Dimulai
        </span>
      </Link>
      <ul className="relative flex items-center max-w-full justify-end hidden min-w-xs space-x-7 md:flex">
        <li>
            <button
              className="inline-flex items-center bg-emerald-500 justify-center h-11 px-6 font-blueberrymd tracking-wide text-white transition duration-200 rounded-lg shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              onClick={handleClickLogin}
              // href={'/#ContentThumbnail'}
            >
             Login
            </button>
          
        </li>
      </ul>
 
      <div className="md:hidden mr-30">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 ml-[70px] transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        </div>
    </div>
  </div>
  );
};

export default Navbar;