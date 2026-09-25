export default function VideoWork() {
    const videoData = [
        {
            id: 1,
            title: "Crafting a Custom Wood Table",
            description: "A step-by-step showcase of precision joinery, sanding, and hand-finishing modern furniture.",
            url: "https://www.youtube.com/embed/Vo8_wHSuf2I?si=SuHX0qVCUOpmx3t1",
        },
        {
            id: 2,
            title: "Modern Sofa Frame Assembly",
            description: "Inside look at building durable hardwood frames designed for long-lasting comfort.",
            url: "https://www.youtube.com/embed/Vo8_wHSuf2I?si=SuHX0qVCUOpmx3t1",
        },
        {
            id: 3,
            title: "Handmade Wooden Chair Polish",
            description: "Applying organic eco-friendly oil coatings to reveal natural timber grain details.",
            url: "https://www.youtube.com/embed/Vo8_wHSuf2I?si=SuHX0qVCUOpmx3t1",
        },
    ];

    return (
        <section className="bg-linear-to-br from-slate-50 via-amber-50/30 to-slate-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-amber-800 bg-amber-100/80 rounded-full">
                        Behind The Scenes
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Craftsmanship in{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-purple-800 to-amber-900">
                            Motion
                        </span>
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Watch how our skilled artisans transform raw, high-quality timber into timeless furniture pieces.
                    </p>
                </div>

                {/* Video Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
                    {videoData.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Responsive Video Container */}
                            <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                                <iframe
                                    className="w-full h-full border-0"
                                    src={item.url}
                                    title={item.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}