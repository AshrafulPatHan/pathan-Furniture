import Image from "next/image";
import BGImage from "@/assets/image/pexels-tima-miroshnichenko.jpg";
import icon from "@/assets/icon/undraw_add-to-cart_vx87.svg";
import icon1 from "@/assets/icon/undraw_chat-bot_c8iw.svg";
import icon2 from "@/assets/icon/undraw_drone-delivery_ri74.svg";
import icon3 from "@/assets/icon/undraw_currency-conversion_933g.svg";

export default function Service() {
    const services = [
        {
            icon: icon,
            title: "Exclusive Designs",
            description: "Handcrafted furniture curated to elevate modern spaces.",
        },
        {
            icon: icon1,
            title: "Customer Care",
            description: "24/7 dedicated support to assist with every inquiry.",
        },
        {
            icon: icon2,
            title: "Express Delivery",
            description: "Fast, reliable door-to-door delivery right to your room.",
        },
        {
            icon: icon3,
            title: "Seamless Ordering",
            description: "Hassle-free online checkout with multi-currency options.",
        },
    ];

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={BGImage}
                    alt="Background overlay"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center z-10 w-full">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
                    What Makes Us{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-orange-300 to-amber-500">
                        Different
                    </span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-12 sm:mb-16 font-medium">
                    Discover why thousands trust us for quality craftsmanship, rapid service, and seamless shopping.
                </p>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center bg-white p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/90 hover:-translate-y-2 transition-all duration-300 ease-out"
                        >
                            <div className="relative w-24 h-24 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// old code
// import Image from "next/image";
// import BGImage from '@/assets/image/pexels-tima-miroshnichenko.jpg'
// import icon from '@/assets/icon/undraw_add-to-cart_vx87.svg'
// import icon1 from '@/assets/icon/undraw_chat-bot_c8iw.svg'
// import icon2 from '@/assets/icon/undraw_drone-delivery_ri74.svg'
// import icon3 from '@/assets/icon/undraw_currency-conversion_933g.svg'



// export default function Service() {
//     const BackgroundImage = {
//         backgroundImage: `url(${BGImage.src})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '100vh',
//         width: '100%'
//     };

//     return (
//         <div style={BackgroundImage}>
//             <div className="flex flex-col items-center py-24" >
//                 <h3 className="text-4xl font-extrabold mb-5">What makes us <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-amber-900">different</span> </h3>
//                 <p className="mb-12">Discover our features</p>
//                 <div className="flex flex-row items-center gap-14">
//                     <div className="flex flex-col items-center bg-white p-12 rounded-2xl ">
//                         <Image src={icon} alt="icon" width={150} />
//                         <h4>Exclusive Designs</h4>
//                         <p>Choose from our huge collections</p>
//                     </div>
//                     <div>
//                         <Image src={icon1} alt="icon" width={150} />
//                         <h4>Customer Care</h4>
//                         <p>24 Houre Costumer sopurt</p>
//                     </div>
//                     <div>
//                         <Image src={icon2} alt="icon" width={150} />
//                         <h4>Home delivery</h4>
//                         <p>We send you product in you home</p>
//                     </div>
//                     <div>
//                         <Image src={icon3} alt="icon" width={150} />
//                         <h4>Online Order</h4>
//                         <p>Online order system . you can order online</p>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }