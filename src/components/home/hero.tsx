import Image from "next/image";
import FI1 from "@/assets/image/living-room.jpg";
import FI2 from "@/assets/image/pexels-vazhnik-.jpg";
import FI3 from "@/assets/image/pexels-vlada-karpovich.jpg";
import Ico1 from "@/assets/icon/facebook.svg";
import Ico2 from "@/assets/icon/youtube.svg";
import Ico3 from "@/assets/icon/whatsapp.svg";
import Rarrow from "@/assets/icon/arrow-right.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 lg:pt-28 bg-linear-to-br from-slate-50 via-amber-50/30 to-slate-100">
      {/* Decorative Gradient Glow behind the hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500] h-[500] bg-linear-to-tr from-amber-200/40 to-slate-300/40 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1500] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Content */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Discover the <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-700 to-amber-900">Latest</span> Furniture Trends
          </h1>
          
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Shop the latest fashion items and stay ahead of the style game with crafted pieces designed for modern living.
          </p>

          {/* Contact Details */}
          <div className="mt-6 space-y-1 text-sm sm:text-base font-medium text-slate-700">
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-slate-400">Phone:</span> 
              <a href="tel:01814871378" className="hover:text-amber-700 transition-colors">01814871378</a>
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-slate-400">Email:</span> 
              <a href="mailto:email@gamil.com" className="hover:text-amber-700 transition-colors">email@gamil.com</a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 mt-8">
            <a 
              href="#" 
              aria-label="Facebook"
              className="p-2.5 rounded-full bg-white shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <Image className="w-5 h-5" src={Ico1} alt="Facebook" width={20} height={20} />
            </a>
            <a 
              href="#" 
              aria-label="YouTube"
              className="p-2.5 rounded-full bg-white shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <Image className="w-5 h-5" src={Ico2} alt="YouTube" width={20} height={20} />
            </a>
            <a 
              href="#" 
              aria-label="WhatsApp"
              className="p-2.5 rounded-full bg-white shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <Image className="w-5 h-5" src={Ico3} alt="WhatsApp" width={20} height={20} />
            </a>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="group flex flex-row items-center gap-2 bg-slate-900 text-white font-medium py-3.5 px-6 rounded-xl shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all duration-300 ease-in-out">
              <span>Explore More</span>
              <Image 
                className="w-5 h-5 invert brightness-0 transition-transform duration-300 group-hover:translate-x-1" 
                src={Rarrow} 
                alt="Arrow right" 
                width={20} 
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Right Column: Image Grid */}
        <div className="flex-1 flex flex-col items-center gap-5 w-full max-w-[620]">
          {/* Top Row: 2 Small Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
              <Image 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src={FI3} 
                alt="Modern furniture piece"
                priority
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
              <Image 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src={FI2} 
                alt="Stylish chair"
                priority
                sizes="(max-width: 768px) 50vw, 300px"
              />
            </div>
          </div>

          {/* Bottom Row: Main Banner Image */}
          <div className="w-full relative aspect-21/10 rounded-3xl overflow-hidden shadow-lg group">
            <Image 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              src={FI1} 
              alt="Living room interior"
              priority
              sizes="(max-width: 1024px) 100vw, 620px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

// old come by hand
// import Image from "next/image";
// import FI1 from '@/assets/image/living-room.jpg'
// import FI2 from '@/assets/image/chiear.png'
// import FI3 from '@/assets/image/Rectangle.png'
// import Ico1 from '@/assets/icon/facebook.svg'
// import Ico2 from '@/assets/icon/youtube.svg'
// import Ico3 from '@/assets/icon/whatsapp.svg'
// import Rarrow from '@/assets/icon/arrow-right.svg'

// export default function Hero() {
//     return(
//         <div className="mt-24 flex flex-row items-start justify-around ">
//             <div>
//                 <h1 className="text-4xl">Discover the Latest Furniture Trends</h1>
//                 <p>Shop the Latest Fashion Items and Stay ahead of the style game</p>
//                 <p>Phone : 01814871378</p>
//                 <p>email : email@gamil.com</p>
//                 <div className="flex flex-row items-center gap-4 mt-8">
//                     <Image className="w-7" src={Ico1} alt="icon"></Image>
//                     <Image className="w-7" src={Ico2} alt="icon"></Image>
//                     <Image className="w-7" src={Ico3} alt="icon"></Image>
//                 </div>
//                 <button className="flex flex-row items-center gap-2 bg-black py-3 px-4 mt-4 text-white hover:gap-4 transition-all duration-300 ease-in-out">
//                     Explore More
//                     <Image className="invert brightness-0" src={Rarrow} alt="icon"></Image>
//                 </button>
//             </div>
//             <div className="flex flex-col items-center gap-5">
//                 <div className="flex flex-row items-center gap-5">
//                     <Image className="w-[300] h-[300] " src={FI3} alt="furniture image"></Image>
//                     <Image className="w-[300] h-[300] " src={FI2} alt="furniture image"></Image>
//                 </div>
//                 <div>
//                     <Image className="w-[620] h-[300] rounded-3xl " src={FI1} alt="furniture image"></Image>
//                 </div>
//             </div>
//         </div>
//     )
// }