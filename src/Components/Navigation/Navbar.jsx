import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className=' flex flex-row items-center  '>
                <div>
                    <img src="/logo.svg" alt="logo" className='w-[60px] h-[64px]  ' />
                </div>
                <div  className='flex flex-row items-center'>
                    <div id='nav-font' className='flex flex-row items-center'>
                        <p >
                            Shop Now
                        </p>
                        <p >
                            Home Furniture
                        </p>
                        <p>
                            All Furniture
                        </p>
                        <p>
                            About Us
                        </p>
                        <p >
                            Contact Us
                        </p>
                    </div>
                    <div className='flex flex-row items-center font-normal'>
                        <button>
                            Log in
                        </button>
                        <button>
                            Get start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;