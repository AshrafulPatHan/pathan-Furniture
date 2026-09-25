"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchI from "@/assets/icon/search.svg";
import TDmenu from "@/assets/icon/three-dots-vertical.svg";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll state to toggle between top gradient and scrolled blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-5 border-none"
          : "bg-linear-to-tr from-slate-50 via-amber-50/30 to-slate-100 backdrop-blur-sm py-5 border-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex flex-row items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif italic font-bold tracking-wide text-slate-900 hover:text-amber-800 transition-colors"
          >
            Pathan Furniture
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-row items-center gap-8 text-sm font-medium text-slate-700">
            <Link
              href="/"
              className="hover:text-amber-700 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-amber-700 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/furniture"
              className="hover:text-amber-700 transition-colors duration-200"
            >
              All Furniture
            </Link>
            <Link
              href="/contact"
              className="hover:text-amber-700 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex flex-row items-center gap-5">
            <button
              aria-label="Search"
              className="p-2 text-slate-600 hover:text-amber-800 rounded-full hover:bg-slate-200/50 transition-all"
            >
              <Image
                src={SearchI}
                alt="Search icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
            <button className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="lg:hidden flex flex-row items-center justify-between">
          <Link
            href="/"
            className="text-xl font-serif italic font-bold text-slate-900"
          >
            Pathan Furniture
          </Link>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="p-2 rounded-lg hover:bg-slate-200/50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <Image
              src={TDmenu}
              alt="Menu icon"
              width={22}
              height={22}
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isVisible
              ? "max-h-64 opacity-100 pt-4 pb-2"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <nav className="flex flex-col gap-3 font-medium text-slate-700 border-t border-slate-200/60 pt-3">
            <Link
              href="/"
              onClick={() => setIsVisible(false)}
              className="hover:text-amber-700 transition-colors py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsVisible(false)}
              className="hover:text-amber-700 transition-colors py-1"
            >
              About Us
            </Link>
            <Link
              href="/furniture"
              onClick={() => setIsVisible(false)}
              className="hover:text-amber-700 transition-colors py-1"
            >
              All Furniture
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsVisible(false)}
              className="hover:text-amber-700 transition-colors py-1"
            >
              Contact
            </Link>
            <button className="mt-2 w-full bg-slate-900 text-white font-medium py-2.5 rounded-xl hover:bg-slate-800 transition-all">
              Shop Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}


// my old code 
// "use client"; 
// import React, { useState } from 'react';
// import Image from "next/image";
// import Link from "next/link";
// import SearchI from '@/assets/icon/search.svg'
// import TDmenu from '@/assets/icon/three-dots-vertical.svg'



// export default function Navbar() {
//      const [isVisible, setIsVisible] = useState(false);
//     return (
//         <div className='sticky top-0 z-50'>
//             <div className="lg:flex flex-row items-center justify-between py-5 mx-auto max-w-[1500] hidden bg-transparent backdrop-blur-sm blur-[70]  ">
//                 <div><p className='text-xl font-serif italic '>pathan Furniture</p></div>
//                 <div className="flex flex-row gap-5">
//                     <Link href={'/'}>Home</Link>
//                     <Link href={'/'}>About Us</Link>
//                     <Link href={'/'}>All Furniture</Link>
//                     <Link href={'/'}>Contact</Link>
//                 </div>
//                 <div className="flex flex-row gap-5">
//                     <button >
//                         <Image src={SearchI} alt="search icon" />
//                     </button>
//                     <button>Shop Now</button>
//                 </div>
//             </div>
//             <div >
//                 <div className="lg:hidden py-3 px-4 flex flex-row items-center justify-between">
//                     <p>Pathan Furniture</p>
//                     <button
//                      onClick={() => setIsVisible(!isVisible)}
//                     >
//                         <Image src={TDmenu} alt="dot icon" />
//                     </button>
//                 </div>
//                 <div className={`flex flex-col px-4 gap-5 ${isVisible ? 'block' : 'hidden'}`}>
//                     <Link href={'/'}>Home</Link>
//                     <Link href={'/'}>About Us</Link>
//                     <Link href={'/'}>All Furniture</Link>
//                     <Link href={'/'}>Contact</Link>
//                 </div>
//             </div>
           
//         </div>

//     )
// }