

export default function All_Furniture() {
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
        </div>
    )
}