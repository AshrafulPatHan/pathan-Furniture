import Image from "next/image"

export default function All_Furniture() {
    const data = [
        {
            id: 1,
            Name: 'Table',
            Price: 100,
            Size: '100 X 100',
            Model: 'new x85',
            Details: 'for testing perpush',
            Image: 'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
        },
        {
            id: 2,
            Name: 'Tabile for test',
            Price: 100,
            Size: '100 X 100',
            Model: 'new x85',
            Details: 'for propaganda perpush',
            Image: 'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
        },
        {
            id: 3,
            Name: 'Test Tabile',
            Price: 100,
            Size: '100 X 100',
            Model: 'new x85',
            Details: 'for testing propaganda perpush',
            Image: 'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
        },
    ]

    return (
        <div className="bg-linear-to-tr from-slate-50 via-amber-50/30 to-slate-100 min-h-screen">
            <div className="flex flex-col max-w-[1500] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
                {/* Heading Section */}
                <h2 className="text-3xl sm:text-4xl mb-4 font-extrabold text-slate-900">
                    Stylish Collection of{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-red-900">
                        Furniture
                    </span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
                    Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry
                </p>

                {/* Filter Category Buttons */}
                <div className="flex flex-wrap items-center justify-start sm:justify-center gap-3 sm:gap-5 mt-8 sm:mt-12 overflow-x-auto pb-2">
                    <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg text-sm sm:text-base font-medium whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors">Sofa</button>
                    <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg text-sm sm:text-base font-medium whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors">chear</button>
                    <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg text-sm sm:text-base font-medium whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors">tablet</button>
                    <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg text-sm sm:text-base font-medium whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors">Bedroom</button>
                    <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg text-sm sm:text-base font-medium whitespace-nowrap cursor-pointer hover:bg-gray-300 transition-colors">Dining Table</button>
                </div>

                {/* Responsive Furniture Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    {data.map((item) => (
                        <div key={item.id} className="flex justify-center">
                            <div className="bg-linear-to-br from-blue-50/80 via-cyan-100/30 to-blue-100/80 shadow-2xl shadow-gray-400/50 flex flex-col w-full max-w-[450] px-4 py-5 rounded-2xl">
                                {/* Product Image Container */}
                                <div className="relative flex flex-col items-center justify-center w-full aspect-square mx-auto rounded-2xl overflow-hidden">
                                    <Image
                                        src={item.Image}
                                        alt={item.Name}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                    />
                                    <span className="bg-black text-white px-2.5 py-1 rounded-2xl text-xs font-semibold absolute top-4 left-4 z-10">
                                        20% OFF
                                    </span>
                                </div>

                                {/* Product Details */}
                                <div className="mt-4 px-1 sm:px-3 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-row items-center justify-between gap-2">
                                            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 line-clamp-1">{item.Name}</h3>
                                            <p className="bg-gray-700 text-xs text-white px-2.5 py-1 rounded-lg shrink-0">{item.Model}</p>
                                        </div>
                                        <div className="text-xs sm:text-sm mt-4 font-medium text-slate-600">
                                            <p className="mb-1">Size: {item.Size}</p>
                                            <p>{item.Details}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <hr className="my-4 text-gray-300" />
                                        <div className="flex flex-row items-center justify-between">
                                            <p className="font-extrabold text-base sm:text-lg text-slate-900">
                                                ${item.Price}{" "}
                                                <sub className="line-through text-slate-500 font-normal ml-1">
                                                    {(item.Price * 1.2).toFixed(0)}
                                                </sub>
                                            </p>
                                            <button className="bg-slate-900 text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-xl hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


// old desing
// import Image from "next/image"


// export default function All_Furniture() {
//     const data = [
//         {
//             id: 1,
//             Name: 'Table',
//             Price: 100,
//             Size: '100 X 100',
//             Model: 'new x85',
//             Details: 'for testing perpush',
//             Image: 'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
//         },
//         {
//             id: 2,
//             Name: 'Tabile for test',
//             Price: 100,
//             Size: '100 X 100',
//             Model: 'new x85',
//             Details: 'for propaganda perpush',
//             Image: 'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
//         },
//         {
//             id: 3,
//             Name: 'Test Tabile',
//             Price: 100,
//             Size: '100 X 100',
//             Model: 'new x85',
//             Details: 'for testing propaganda perpush',
//             Image: 'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
//         },
//     ]
//     return (
//         <div className="bg-linear-to-tr from-slate-50 via-amber-50/30 to-slate-100">
//             <div className="flex flex-col max-w-[1500] mx-auto py-28  ">
//                 <h2 className="text-4xl mb-4 font-extrabold" >Stylish Collection of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-red-900">Furniture</span> </h2>
//                 <p>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
//                 <div className="flex flex-row items-center justify-center gap-5 mt-12" >
//                     <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">Sofa</button>
//                     <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">chear</button>
//                     <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">tablet</button>
//                     <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">Bedroom</button>
//                     <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">Dining Table</button>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4 mt-12 ">
//                     {data.map((data, id) => (
//                         <div key={id} >
//                             <div className="bg-linear-to-br from-blue-50/80 via-cyan-100/30 to-blue-100/80 shadow-2xl shadow-gray-400 flex flex-col w-[450] px-4 py-5 rounded-2xl  ">
//                                 <div className="relative flex flex-col items-center justify-center w-[400] h-[400] mx-auto rounded-2xl overflow-hidden ">
//                                     <Image src={data.Image} alt="product image" width={400} height={400}
//                                         className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 " />
//                                     <span className="bg-black text-white px-2 py-[2] rounded-2xl text-xs absolute top-4 left-4" >20% OFF</span>
//                                 </div>
//                                 <div className="mt-3 px-3">
//                                     <div className="flex flex-row items-center justify-between ">
//                                         <h3 className="text-xl font-extrabold">{data.Name} </h3>
//                                         <p className="bg-gray-700 text-xs text-white px-2 py-1 rounded-lg ">{data.Model}</p>
//                                     </div>
//                                     <div className="text-xs mt-4 font-medium ">
//                                         <p className="mb-2">Size: {data.Size}</p>
//                                         <p>{data.Details}</p>
//                                     </div>
//                                     <hr className="my-5 text-gray-400" />
//                                     <div className="flex flex-row items-end justify-between ">
//                                         <p className="font-extrabold text-lg">${data.Price} <sub className="line-through">{(data.Price * 1.2)}</sub> </p>
//                                         <button className=" bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-200">Order Now</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     )
// }