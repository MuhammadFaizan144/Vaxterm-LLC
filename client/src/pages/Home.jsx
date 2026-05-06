import React from 'react'

const Home = () => {
    const heroData = [{
        image: "/images/Home/Section1Hero/search-country.png",
        number: "50+",
        description: "Countries Served"
    }, {
        image: "/images/Home/Section1Hero/project-outlined.png",
        number: "700+",
        description: "Projects Completed"
    }, {
        image: "/images/Home/Section1Hero/partnership.png",
        number: "120+",
        description: "Long-Term Partners"
    }, {
        image: "/images/Home/Section1Hero/dissatisfaction.png",
        number: "98%",
        description: "Client Satisfaction"
    }]
    return (
        <main>
            <section className='relative mb-40'>

                <img src="/images/hero.png" alt="hero" className='w-full h-auto' />
                <div className="text-white border-[5px] border-r-0 pl-12 py-5 border-white max-w-[571px] absolute top-1/2 left-16 -translate-y-1/2">
                    <p className="text-[60px] leading-[71px] font-bold font-dm">Innovative IT Infrastructure & Enterprise Software Solutions</p>
                    <div className="flex gap-4 mt-8">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded">Get Free Consultation</button>
                        <button className="bg-white hover:bg-gray-200 text-black py-4 px-4 rounded">Explore Our Service</button>
                    </div>
                </div>
                <div className="absolute w-full bottom-[-150px]">
                    <ul className='flex justify-center gap-8'>
                        {heroData.map((item, index) => (
                            <li key={index} className='flex flex-col justify-center w-[264px] top-[80%] left-16 bg-white rounded-[20px] items-center py-8 gap-4 shadow-lg'>
                                <div className="bg-[#3F91F6] rounded-[10px] p-4">
                                    <img src={item.image} alt={item.number} className='size-[37px]' />

                                </div>
                                <div className='text-center'>
                                    <p className='text-[32px] font-outfit'>{item.number}</p>
                                    <p className='text-[20px] font-dm'>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section>
                <div class="max-w-[1141px] w-full bg-white mx-auto rounded-2xl overflow-hidden mt-60">
                    <div class="flex flex-col lg:flex-row h-auto lg:h-[506px]">

                        {/* <!-- LEFT IMAGE --> */}
                        <div class="w-full lg:w-1/2 h-[250px] lg:h-full">
                            <img
                                src="/images/Home/Section2/aboutUsHome.png"
                                alt="team"
                                class="w-full h-full object-cover"
                            />
                        </div>

                        {/* <!-- RIGHT CONTENT --> */}
                        <div class="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">

                            {/* <!-- TOP LABEL --> */}
                            <p class="text-[#191D28] text-[18px] mb-4 flex items-center gap-2">
                                <img src="/images/Home/Section2/iconTitle.png" alt="" />
                                ABOUT US
                            </p>

                            {/* <!-- TABS --> */}
                            <div class="flex justify-around gap-2 bg-gray-100 rounded-full px-1 py-1.5 max-w-[503px] h-[67px] mb-6 border border-gray-400">
                                <button class="px-5 py-2 rounded-full hover:bg-[#388EF6] hover:text-white text-[#191D28] text-[22px]">
                                    Our Mission
                                </button>
                                <button class="px-5 py-2 rounded-full hover:bg-[#388EF6] hover:text-white text-[#191D28] text-[22px]">
                                    Our Vision
                                </button>
                                <button class="px-5 py-2 rounded-full  hover:bg-[#388EF6] hover:text-white text-[#191D28] text-[22px]">
                                    Our Story
                                </button>
                            </div>

                            {/* <!-- TEXT --> */}
                            <p class="text-gray-700 text-[18px] mb-6 ">
                                Vaxterm LLC is an Evanston, Illinois-based technology firm delivering
                                reliable, scalable, and compliant IT solutions to enterprise and
                                government clients. We specialize in strategic sourcing, enterprise
                                hardware deployment, and cloud-based software implementation.
                            </p>

                            {/* <!-- LIST --> */}
                            <div class="space-y-3">
                                <div class="flex items-center gap-3 text-[20px] text-gray-800">
                                    <span class="w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm">✓</span>
                                    Trusted Government Vendor
                                </div>
                                <div class="flex items-center gap-3 text-[20px] text-gray-800">
                                    <span class="w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm">✓</span>
                                    Enterprise-Grade Technology
                                </div>
                                <div class="flex items-center gap-3 text-[20px] text-gray-800">
                                    <span class="w-5 h-5 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm">✓</span>
                                    Global Procurement Network
                                </div>
                            </div>

                            <button className='p-3 bg-[#388EF6] text-white w-[123px] rounded-[7.95px] mt-12'>
                                Learn More
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
