import Line from '../../assets/image/Brush.png';
import Baner_img1 from '../../assets/image/Rectangle 1.png';
import Baner_img2 from '../../assets/image/Rectangle 3.png';
import Baner_img3 from '../../assets/image/living-room-2569325_1280.jpg';
import { FaArrowRight } from "react-icons/fa6";


const Hero = () => {
    return (
        <div>
            <div className='flex flex-row items-center justify-between mx-34 mt-24 '>
                <div>
                    <h2 className='font-[Sansation] text-[56px]/[50px] '>Discover the Latest</h2>
                    <h2 className='font-[Sansation] text-[56px]  '>Furniture Trends</h2>
                    <img src={Line} alt="line" className='w-[180px] h-[29px] relative left-[0px] top-[-30px] '/>
                    <p className='text-2xl font-normal  w-[441px] mt-[30px] '>Shop the Latest Fashion Items and Stay ahead of the style game</p>
                    <button className="cursor-pointer mt-[180px] text-xl flex justify-center items-center border-2 gap-1 w-[180px] h-14 before:absolute before:block before:inset-0 before:-z-10 
                    before:bg-black text-white after:block hover:after:w-full after:w-0 after:hover:left-0 
                    after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute 
                    relative ">
                        Explore More <FaArrowRight />
                    </button>
                </div>
                <div className='flex flex-col items-center gap-8'>
                    <div className='flex flex-row items-center gap-8'>
                        <img src={Baner_img1} alt="Furniture photo" 
                        className='w-[272px] h-[261px] ' />
                        <img src={Baner_img2} alt="Furniture photo" 
                        className='w-[272px] h-[261px] ' />
                    </div>
                    <div>
                        <img src={Baner_img3} alt="Furniture photo" 
                        className='w-[580px] h-[261px] rounded-4xl ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;