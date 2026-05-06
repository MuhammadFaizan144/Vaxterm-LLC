import React from 'react'

const Home = () => {
    const heroData = [{
        image: "/images/Home/Section1Hero/search-country.png",
        number: "50+",
        description: "Countries Served"
    },{
        image: "/images/Home/Section1Hero/project-outlined.png",
        number: "700+",
        description: "Projects Completed"
    },{
        image: "/images/Home/Section1Hero/partnership.png",
        number: "120+",
        description: "Long-Term Partners"
    },{
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
                                    <p className='text-[32px] font-bold font-outfit'>{item.number}</p>
                                    <p className='text-[20px] font-dm'>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Home
