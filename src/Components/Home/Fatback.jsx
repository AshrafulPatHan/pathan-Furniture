import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Fatback = () => {
    return (
        <div className='flex flex-col items-start mx-[136px] mb-28 '>
            <div>
                <div>
                    <div className='Roboto'>
                        <p className=''>Furniture</p>
                    </div>
                    <div className='Sansation'>
                        <h4 className='text-3xl font-bold '>Discover the Latest Trends</h4>
                    </div>
                    <p className='text-[#6A6D70] text-lg '>Stay updated with our information and engaging blog posts 
                        about modern Furniture and Fashion on the industry</p>
                </div>
                <button className="cursor-pointer text-xl flex justify-center items-center border-2 gap-1 w-[180px] 
                h-14 before:absolute before:block before:inset-0 before:-z-10 
                before:bg-black text-white after:block hover:after:w-full after:w-0 after:hover:left-0 
                after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute 
                relative ">
                    Explore  <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Fatback;