import { FaArrowRight } from "react-icons/fa6";


const About = () => {
    return (
        <div className="flex flex-col items-start mx-[136px]  ">
            <div>
                <div className="Sansation">
                    <h4 className="text-3xl font-bold">Enjoy Our Latest Fashion Trends and Style</h4>
                </div>
                <p className="text-2xl font-light">Ship our curated collection of fashion items and stay ahead of the fashion game</p>
                <div>
                    <div>
                        <h4 className="text-2xl font-bold">Quality</h4>
                        <div className="Roboto">
                            <p className="text-[#6A6D70] text-[1rem] ">
                                Our fashion items are crafted with the highest materials and attention to details
                            </p>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">Style</h4>
                        <div className="Roboto">
                            <p className="text-[#6A6D70] text-[1rem] ">
                                Express you unique style with our wide range of trendy items.
                            </p>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <button className="cursor-pointer text-xl flex justify-center items-center border-2 gap-1 w-[180px] 
                        h-14 before:absolute before:block before:inset-0 before:-z-10 
                        before:bg-black text-white after:block hover:after:w-full after:w-0 after:hover:left-0 
                        after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute 
                        relative ">
                            Explore <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default About;