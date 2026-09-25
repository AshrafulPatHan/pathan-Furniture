import Image from "next/image"


export default function All_Furniture() {
    const data = [
        {
            id:1,
            Name:'Tabil',
            Price:100,
            Size:'100 X 100',
            Model:'new x85',
            Details:'for testing perpush',
            Image:'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
        },
        {
            id:2,
            Name:'Tabile for test',
            Price:100,
            Size:'100 X 100',
            Model:'new x85',
            Details:'for propaganda perpush',
            Image:'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
        },
        {
            id:3,
            Name:'test Tabile',
            Price:100,
            Size:'100 X 100',
            Model:'new x85',
            Details:'for testing propaganda perpush',
            Image:'https://i.ibb.co.com/FbpZ5jXF/pexels-vazhnik.webp'
        },
    ]
    return (
        <div className="flex flex-col max-w-[1500] mx-auto py-28 ">
            <h2 className="text-4xl mb-4 font-extrabold" >Stylish Collection of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-red-900">Furniture</span> </h2>
            <p>Stay updated with our information and engaging blog posts about modern Furniture and Fashion on the industry</p>
            <div className="flex flex-row items-center justify-center gap-5 mt-12" >
                <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">Sofa</button>
                <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">chear</button>
                <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">tablet</button>
                <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">Bedroom</button>
                <button className="px-4 py-2 bg-[#d8d8d8] rounded-lg ">Dining Table</button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-12 ">
                {data.map((data,id)=>(
                    <div key={id} >
                        <div className="bg-[#d8d8d8] flex flex-col w-[450] px-4 py-5 rounded-2xl  ">
                            <div className="relative flex flex-col items-center justify-center w-[400] h-[400] mx-auto rounded-2xl overflow-hidden ">
                                <Image src={data.Image} alt="product image" width={400} height={400}
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 " />
                                <span className="bg-black text-white px-2 rounded-2xl text-xs absolute top-4 left-4" >20% OFF</span>
                            </div>
                            <div className="mt-3 px-3">
                                <div className="flex flex-row justify-between ">
                                    <h3>{data.Name} </h3>
                                    <p>{data.Model}</p>
                                </div>
                                <div className="text-xs mt-4 mb-8">
                                    <p>{data.Size}</p>
                                    <p>{data.Details}</p>
                                </div>
                                <div className="flex flex-row items-end justify-between ">
                                    <p>${data.Price} <sub className="line-through">{(data.Price * 1.2)}</sub> </p>
                                    <button className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-200">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}