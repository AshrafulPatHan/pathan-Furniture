import React from 'react';
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import Logo from '/logo.svg';

const Footer = () => {
    return (
        <footer className='flex flex-col bg-[#f8baf591] '>
            <div className='flex flex-row items-start justify-evenly pt-[70px] mb-10 '>
                <div className='w-[516px]    '>
                    <img src={Logo} alt="Logo" className='w-[45px] h-48px mb-4  ' />
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                    <div className='flex flex-row items-center gap-3 mt-8 mb-2'>
                        <div className="relative w-max rounded-lg">
                            <input className="peer rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none" type="text" placeholder="" id="navigate_ui_input_33" />
                            <label className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100" htmlFor="navigate_ui_input_33">
                                Email
                            </label>
                        </div>
                        <button type="button" className="cursor-pointer group relative h-[45px] w-[130px] rounded-3xl overflow-hidden border-2 
                        border-sky-400 text-xl text-sky-400 hover:text-sky-200">
                        <span className="bg-sky-800  ease-in absolute w-[57%]  
                        -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12">
                        </span><span className="bg-sky-600 ease-in absolute w-[55%]  translate-x-full 
                        group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
                            Button
                        </button>
                    </div>
                    <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
                </div>
                <div className='text-gray-500 text-[20px]/[35px]  '>
                    <h4 className='font-bold text-black '>About Us</h4>
                    <p>FAQ</p>
                    <p>Contact</p>
                    <p>Returns</p>
                    <p>Blog</p>
                    <p>Shipping</p>
                </div>
                <div className='text-gray-500 text-[20px]/[35px]  '>
                    <h4 className='font-bold text-black '>Customer Support</h4>
                    <p>Affiliates</p>
                    <p>Apple Pay Payments</p>
                    <p>Returns</p>
                    <p>Returns Policy</p>
                    <p>Returns</p>
                </div>
                <div className='text-gray-500 text-[20px]/[35px]  '>
                    <h4 className='font-bold text-black '>Follow Us</h4>
                    <p className='flex items-center gap-3'><FaGithub />GitHub</p>
                    <p className='flex items-center gap-3'><FaFacebook />Facebook</p>
                    <p className='flex items-center gap-3'><FaLinkedin />LinkedIn</p>
                    <p className='flex items-center gap-3'><FaDiscord />
                    Discord</p>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between mx-30 pb-12'>
                <p>© 2023 Pathan Furniture. All rights reserved.</p>
                <div className='flex flex-row items-center gap-8'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;