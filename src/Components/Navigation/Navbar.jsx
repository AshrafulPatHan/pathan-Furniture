import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/logo.svg'

const Navbar = () => {
    return (
        <div>
            <div className=' flex flex-row items-center justify-between mx-[120px] mt-[3px] '>
                <div id='nav-font' className='flex flex-row items-center gap-1'>
                    <img src={Logo} alt="logo" className='w-[60px] h-[64px]  ' />
                    <h3 className='text-3xl'>pathan Furniture</h3>
                </div>
                <div  className='flex flex-row items-center gap-8 '>
                    <div id='nav-font' className='flex flex-row items-center gap-4  '>
                        <Link >
                            Shop Now
                        </Link>
                        <Link >
                            Home Furniture
                        </Link>
                        <Link >
                            All Furniture
                        </Link>
                        <Link >
                            About Us
                        </Link>
                        <Link >
                            Contact Us
                        </Link>
                    </div>
                    <div id='nav-button' className='flex flex-row items-center gap-[10px] font-normal'>
                        <Link className='btn w-[88px] h-[40px] bg-[#C900C1] text-white rounded-4xl  '>
                            Log in
                        </Link>
                        <Link className='btn bg-white hover:bg-[#c900c2] hover:text-white w-24 h-10 border-[#C900C1] text-[#C900C1] border-[1.5px] rounded-4xl '>
                            Get start
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;