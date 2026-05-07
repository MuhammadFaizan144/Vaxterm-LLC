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
    const industries = [
        {
            image: "/images/Home/Section4/IWS01.png",
            description: "Federal Government Agencies"
        },
        {
            image: "/images/Home/Section4/IWS02.png",
            description: "State & Local Government"
        },
        {
            image: "/images/Home/Section4/IWS03.png",
            description: "Industrial & Manufacturing"
        }, {
            image: "/images/Home/Section4/IWS04.png",
            description: "Healthcare & Medical"
        }, {
            image: "/images/Home/Section4/IWS05.png",
            description: "Education & Public Sector"
        }, {
            image: "/images/Home/Section4/IWS06.png",
            description: "Enterprise & Corporate Clients"
        }
    ]
    const services = [
        {
            image: "/images/Home/Section3/back-in-time.png",
            title: "Enterprise Hardware",
            description: "High-performance IT infrastructure including enterprise servers"
        }, {
            image: "/images/Home/Section3/back-in-time.png",
            title: "Advanced Software Solutions",
            description: "Scalable SaaS platforms including CRM, ERP"
        }, {
            image: "/images/Home/Section3/back-in-time.png",
            title: "Strategic Procurement",
            description: "Global sourcing of specialized equipment, mission-critical assets, and logistics management"
        }
    ]
    const features = [
        { label: "Knowledge of Federal\n& State Procurement" },
        { label: "Regulatory\nCompliance Expertise" },
        { label: "Transparent Business\nOperations" },
        { label: "Strategic Contract\nManagement" },
    ];

    return (
        <main>
            <section className='relative'>

                <img src="/images/hero.png" alt="hero" className='w-full h-[877px]' />
                <div className="text-white border-[5px] border-r-0 pl-12 py-5 border-white max-w-[571px] absolute top-1/2 left-16 lg:-translate-y-1/2 -translate-y-[70%]">
                    <p className="lg:text-[60px] text-[40px] leading-[71px] font-bold font-dm">Innovative IT Infrastructure & Enterprise Software Solutions</p>
                    <div className="flex gap-4 mt-8 flex-wrap">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded">Get Free Consultation</button>
                        <button className="bg-white hover:bg-gray-200 text-black py-4 px-4 rounded">Explore Our Service</button>
                    </div>
                </div>

                <div className="max-w-[1141px] mx-auto px-4 -mt-10 relative z-10">
                    <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {heroData.map((item, index) => (
                            <li
                                key={index}
                                className="flex flex-col items-center justify-center 
                   bg-white rounded-2xl py-8 px-4 gap-4 shadow-lg"
                            >
                                <div className="bg-[#3F91F6] rounded-lg p-4">
                                    <img
                                        src={item.image}
                                        alt={item.description}
                                        className="w-8 h-8"
                                    />
                                </div>

                                <div className="text-center">
                                    <p className="text-2xl md:text-3xl font-outfit font-semibold">
                                        {item.number}
                                    </p>
                                    <p className="text-[16px] md:text-[18px] font-dm">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </section>

            <section>
                <div class="max-w-[1141px] w-full bg-white mx-auto rounded-2xl  lg:mt-24 mt:20">
                    <div class="flex flex-col lg:flex-row h-auto lg:h-[506px]">

                        <div class="w-full lg:w-1/2 h-[506px] lg:p-0 p-6 lg:h-full rounded-lg">
                            <img
                                src="/images/Home/Section2/aboutUsHome.png"
                                alt="team"
                                class="w-full h-full object-cover"
                            />
                        </div>

                        <div class="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">

                            <p class="text-[#191D28] text-[18px] mb-4 flex items-center gap-2">
                                <img src="/images/Home/Section2/iconTitle.png" alt="" />
                                ABOUT US
                            </p>

                            <div class="flex flex-wrap justify-around gap-2 bg-gray-100 rounded-full px-1 py-1.5 max-w-[503px] h-auto mb-6 border border-gray-400  sm:text-[22px] text-[16px]">
                                <button class="px-5 py-2 rounded-full hover:bg-[#388EF6] hover:text-white text-[#191D28]">
                                    Our Mission
                                </button>
                                <button class="px-5 py-2 rounded-full hover:bg-[#388EF6] hover:text-white text-[#191D28]">
                                    Our Vision
                                </button>
                                <button class="px-5 py-2 rounded-full  hover:bg-[#388EF6] hover:text-white text-[#191D28]">
                                    Our Story
                                </button>
                            </div>

                            <p class="text-gray-700 text-[18px] mb-6 ">
                                Vaxterm LLC is an Evanston, Illinois-based technology firm delivering
                                reliable, scalable, and compliant IT solutions to enterprise and
                                government clients. We specialize in strategic sourcing, enterprise
                                hardware deployment, and cloud-based software implementation.
                            </p>

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
            <section className='flex flex-col items-center mt-16'>
                <div className="flex flex-col items-center lg:px-0 px-6">
                    <div className="flex items-center gap-2">
                        <img src="/images/Home/Section3/iconTitle.png" alt="" className='w-[26px] h-[13px]' />
                        <h2 className='text-[18px] text-[#051649] '>SERVICE</h2>
                    </div>
                    <h3 className='text-[48px] text-[#0B1422]'>OUR CORE SERVICE</h3>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-[1182px] h-auto mt-16">
                    {services.map((item, index) => (
                        <div className={`max-w-[356px] h-[295px] py-5 px-6 rounded-[21.29px] shadow-lg bg-white ${index === 1 ? 'lg:mt-20' : ''}`} key={index}>
                            <div className="bg-gradient-to-b from-[#1F90D7] to-[#1F90D7]/0 rounded-lg w-[75px] h-[68px] flex items-center justify-center mb-4">
                                <img src={item.image} alt="service" />
                            </div>
                            <h4 className='text-[26.62px] mt-4 font-semibold'>{item.title}</h4>
                            <p className='text-[17.03px] mt-4 text-[#7A7A7A] max-w-[261px]'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className='lg:px-0 px-9 mt-28'>
                <h2 className="text-[48px] flex justify-center mt-10">
                    Industries We Serve
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 max-w-[1341px] mx-auto mt-10">
                    {industries.map((item, index) => (
                        <div className="flex flex-col items-center">
                            <img src={item.image} alt="industry" className='w-full h-[488px] rounded-[13px]' />
                            <p className='text-[#0B1422] text-[24px] text-center mt-2 mb-4'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="px-4 py-12">

                <div className="max-w-[1218px] mx-auto grid lg:grid-cols-2 gap-8 items-center">
                    {/* LEFT SIDE */}
                    <div>
                        {/* Heading */}
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#0B1B35] leading-tight mb-4">
                            Government <br /> Procurement Ready
                        </h2>
                        {/* Description */}
                        <p className="text-[16px] md:text-[18px] lg:text-[18px] text-gray-600 mb-6 leading-relaxed">
                            Vaxterm LLC is fully registered to support federal and state
                            procurement requirements. We adhere to strict compliance
                            standards and maintain active registration within government
                            procurement systems.
                        </p>
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="/images/Home/Section5/govermentReady.png"
                                alt="Handshake agreement"
                                className="w-full h-[194px]  object-cover"
                            />
                        </div>
                    </div>
                    {/* RIGHT SIDE CARD */}
                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6 md:p-8">
                        {/* Title */}
                        <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0B1B35] mb-4">
                            SAM.gov Registered Vendor
                        </h3>
                        {/* NAICS */}
                        <div className="mb-6">
                            <p className="font-semibold text-[16px] mb-2">NAICS Codes:</p>
                            <ul className="space-y-2 text-[16px] text-[#64748B]">
                                <li>• 541512 — Computer Systems Design Services</li>
                                <li>• 423430 — Computer & Peripheral Equipment</li>
                                <li>• 423610 — Electrical Equipment & Supplies</li>
                            </ul>
                        </div>
                        {/* Certifications */}
                        <div className="mb-6">
                            <p className="font-semibold text-[16px] mb-4">
                                Business Certifications:
                            </p>
                            <ul className="space-y-2 text-[16px] text-[#64748B]">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span>
                                    Government Contract Ready
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span>
                                    Compliance-Oriented Operations
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span>
                                    Vendor Registration Complete
                                </li>
                            </ul>
                        </div>
                        {/* Button */}
                        <button className="bg-blue-500 hover:bg-[#3B92F8] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition text-[16px]">
                            <img src="/images/Home/Section5/downloadIcon.png" alt="" /> Download Capability Statement
                        </button>
                    </div>
                </div>
            </section>
            <section className="w-full  flex items-center justify-center bg-[#031B4E]">
                <div className="max-w-[1434px]  px-4 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-10">

                    <div className="relative lg:w-[50%]">
                        <img
                            src="/images/Home/Section6/leader&expertise.png"
                            alt="Leadership team"
                            className="w-[628px] h-[550px] object-top"
                        />

                        <div className="absolute bottom-8 right-28 text-center">
                            <p className="text-white text-[45px] font-extrabold">20+</p>
                            <p className="text-blue-200 text-[20px] leading-tight">
                                Years <br /> Experienced
                            </p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-white text-4xl lg:text-[42px] font-semibold mb-12 max-w-[620px]">
                            Leadership & Expertise — A Foundation of Excellence
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-10">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/15 rounded-2xl py-10 px-4 flex flex-col items-center text-center gap-6"
                                >
                                    <div className="w-11 h-11 rounded-full bg-[#3F95F9] flex items-center justify-center">
                                        <img src="/images/Home/Section6/tick_Icon.png" alt="" />
                                    </div>

                                    <p className="text-white font-semibold text-[16px] whitespace-pre">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Home
