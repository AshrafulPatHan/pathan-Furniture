import React from 'react';

const Top_Product = () => {
    return (
        <div>
            <div className='flex flex-col items-start ml-34 '>
                <div className='Sansation'>
                    <h3 className='font-bold text-[53px] '>Stylish Collection of Furniture</h3>
                </div>
                <p className='font-normal text-2xl w-[766px] text-[#6A6D70] '>
                    Stay updated with our information and engaging blog posts about modern 
                    Furniture and Fashion on the industry
                </p>
                <div className='flex flex-row items-center gap-[15px] font-normal text-2xl mt-20 '>
                    <button className='w-[151px] h-[68px] rounded-4xl bg-gray-400   '>Sofa</button>
                    <button className='w-[151px] h-[68px] rounded-4xl bg-gray-400   '>Cher</button>
                    <button className='w-[151px] h-[68px] rounded-4xl bg-gray-400   '>Bedroom</button>
                    <button className='w-[188px] h-[68px] rounded-4xl bg-gray-400   '>Dining Table</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Top_Product;