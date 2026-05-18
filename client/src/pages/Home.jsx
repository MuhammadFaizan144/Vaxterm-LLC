import React, { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Link } from 'react-router-dom'
import {
    heroData,
    faqData,
    features,
    industries,
    services,
    testimonials,
    aboutTabs
} from "../Constant/home";

const Home = () => {
    // about
    const [activeTab, setActiveTab] = useState("mission");

    const currentTab = aboutTabs[activeTab];

    const [openIndex, setOpenIndex] = useState(0);
    const scrollRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);

    const scrollTo = (index) => {
        const container = scrollRef.current;

        if (container) {
            const card = container.children[index];

            if (card) {
                container.scrollTo({
                    left: card.offsetLeft - container.offsetLeft,
                    behavior: "smooth",
                });
            }

            setActiveDot(index);
        }
    };

    const handleScroll = () => {
        const container = scrollRef.current;

        if (container) {
            const cardWidth = container.children[0]?.offsetWidth || 1;
            const index = Math.round(container.scrollLeft / cardWidth);
            setActiveDot(index);
        }
    };

    return (
        <main className="overflow-x-hidden">
            {/* Hero */}
            <section className='relative'>
                <div className="absolute inset-0 bg-black/40 z-10 h-[877px]"></div>
                <img src="/images/hero.png" alt="hero" className='w-full h-[877px] object-cover' />
                <div className="text-white z-20 pl-12 py-5 max-w-[571px] absolute top-1/2 sm:left-28 left-4 lg:-translate-y-1/2 -translate-y-[100%]">
                    <img src="images/Home/Section1Hero/heroborder.png" alt="" className='absolute lg:-left-2 -left-0 -top-4 lg:h-[458px] h-[408px] -z-10' />
                    <p className="lg:text-[60px] px-2 md:text-[40px] text-[35px] lg:leading-[71px] leading-[45px] font-bold font-dm">Innovative IT Infrastructure & Enterprise Software Solutions</p>
                    <div className="flex gap-4 mt-8 flex-wrap ">
                        <Link to="/contact" >
                            <button className="bg-blue-500  hover:bg-blue-600 text-white max-sm:w-[80%] py-4 px-4 rounded">Get Free Consultation</button>

                        </Link>
                        <Link to="/procurement">
                            <button className="bg-white hover:bg-gray-200 text-black py-4 max-sm:w-[80%] sm:px-4 px-6 rounded">Explore Our Service</button>
                        </Link>
                    </div>
                </div>
                <div className="max-w-[1141px] mx-auto px-4 -mt-10 relative z-10">
                    <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {heroData.map((item, index) => (<li key={index} className="flex flex-col items-center justify-center bg-white rounded-2xl py-8 px-4 gap-4 shadow-lg" >
                            <div className="bg-[#3F91F6] rounded-lg p-4">
                                <img src={item.image} alt={item.description} className="w-8 h-8" />
                            </div>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-outfit font-semibold"> {item.number} </p>
                                <p className="text-[16px] md:text-[18px] font-dm"> {item.description} </p>
                            </div>
                        </li>))}
                    </ul>
                </div>
            </section>

            {/* About Us */}
            <section className="px-4">

                <div className="max-w-[1141px] w-full bg-white mx-auto rounded-2xl mt-16 lg:mt-24">

                    <div className="flex flex-col lg:flex-row">

                        {/* Left Image */}

                        <div className="w-full lg:w-1/2 p-0 sm:p-4 lg:p-0">

                            <img

                                src="/images/Home/Section2/aboutUsHome.png"

                                alt="team"

                                className="w-full h-[300px] sm:h-[420px] lg:h-full object-cover rounded-[12px]"

                            />

                        </div>

                        {/* Right Content */}

                        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-10 flex flex-col justify-center">

                            <p className="text-[#191D28] text-[16px] sm:text-[18px] mb-4 flex items-center gap-2">

                                <img src="/images/Home/Section2/iconTitle.png" alt="" />

                                ABOUT US

                            </p>

                            {/* Functional Buttons */}

                            <div className="flex flex-wrap gap-2 bg-gray-100 rounded-3xl sm:rounded-full px-2 py-2 max-w-[503px] mb-6 border border-gray-400 text-[14px] sm:text-[16px] md:text-[20px]">

                                {Object.entries(aboutTabs).map(([key, tab]) => (

                                    <button

                                        key={key}

                                        onClick={() => setActiveTab(key)}

                                        className={`flex-1 min-w-[120px] px-4 py-2 rounded-full transition-all duration-300 ${activeTab === key

                                            ? "bg-[#388EF6] text-white"

                                            : "text-[#191D28] hover:bg-[#388EF6] hover:text-white"

                                            }`}

                                    >

                                        {tab.label}

                                    </button>

                                ))}

                            </div>

                            {/* Dynamic Text */}

                            <p className="text-gray-700 text-[15px] sm:text-[17px] lg:text-[18px] mb-6 leading-relaxed">

                                {currentTab.description}

                            </p>

                            {/* Dynamic Points */}

                            <div className="space-y-3">

                                {currentTab.points.map((text, index) => (

                                    <div

                                        key={index}

                                        className="flex items-start gap-3 text-[15px] sm:text-[18px] lg:text-[20px] text-gray-800"

                                    >

                                        <span className="w-5 h-5 mt-1 flex-shrink-0 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm">

                                            ✓

                                        </span>

                                        <span>{text}</span>

                                    </div>

                                ))}

                            </div>
                            <Link to="/about">
                                <button className="p-3 bg-[#388EF6] text-white w-[123px] rounded-[7.95px] mt-8 lg:mt-12 shadow-lg shadow-gray-400">
                                    Learn More
                                </button>

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* Our Core Service */}
            <section className="flex flex-col items-center mt-16 px-4">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/Home/Section3/iconTitle.png"
                            alt=""
                            className="w-[26px] h-[13px]"
                        />
                        <h2 className="text-[16px] sm:text-[18px] text-[#051649]">
                            SERVICE
                        </h2>
                    </div>

                    <h3 className="text-[clamp(32px,6vw,48px)] text-[#0B1422] text-center font-semibold">
                        OUR CORE SERVICE
                    </h3>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8 max-w-[1182px] w-full mt-10 lg:mt-16">
                    {services.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <div
                                className={`w-full max-w-[356px] mx-auto min-h-[295px] py-5 px-6 rounded-[21.29px] shadow-lg bg-white ${index === 1 ? "lg:mt-20" : ""
                                    }`}

                            >
                                <div className="bg-gradient-to-b from-[#1F90D7] to-[#1F90D7]/0 rounded-lg w-[75px] h-[68px] flex items-center justify-center mb-4">
                                    <img src={item.image} alt="service" />
                                </div>
                                <h4 className="text-[22px] sm:text-[26.62px] mt-4 font-semibold">
                                    {item.title}
                                </h4>
                                <p className="text-[15px] sm:text-[17.03px] mt-4 text-[#7A7A7A] max-w-[261px]">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="px-4 sm:px-6 lg:px-0 mt-20 lg:mt-28">
                <h2 className="text-[clamp(32px,6vw,48px)] text-center font-semibold">
                    Industries We Serve
                </h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-[1341px] mx-auto mt-10">
                    {industries.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={item.image}
                                alt="industry"
                                className="w-full h-[300px] sm:h-[420px] lg:h-[488px] rounded-[13px] object-cover"
                            />

                            <p className="text-[#0B1422] text-[20px] sm:text-[24px] text-center mt-3 mb-4">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Government Procurement Ready */}
            <section className="px-4 py-12">
                <div className="max-w-[1218px] mx-auto grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-[clamp(30px,6vw,48px)] max-lg:text-center font-bold text-[#0B1B35] leading-tight mb-4">
                            Government <br /> Procurement Ready
                        </h2>

                        <p className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-600 mb-6 leading-relaxed">
                            Vaxterm LLC is fully registered to support federal and state
                            procurement requirements. We adhere to strict compliance standards
                            and maintain active registration within government procurement
                            systems.
                        </p>

                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="/images/Home/Section5/govermentReady.png"
                                alt="Handshake agreement"
                                className="w-full h-[190px] sm:h-[230px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6 md:p-8">
                        <div className=" mb-4 flex items-center gap-1">
                            <div className="">
                                <div className="size-3 rounded-full bg-green-500"></div>
                            </div>
                            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0B1B35]">SAM.gov Registered Vendor</h3>
                        </div>
                        <div className="mb-6">
                            <p className="font-semibold text-[16px] mb-2">NAICS Codes:</p>
                            <ul className="space-y-2 text-[14px] sm:text-[16px] text-[#64748B]">
                                <li>• 541512 — Computer Systems Design Services</li>
                                <li>• 423430 — Computer & Peripheral Equipment</li>
                                <li>• 423610 — Electrical Equipment & Supplies</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <p className="font-semibold text-[16px] mb-4">
                                Business Certifications:
                            </p>

                            <ul className="space-y-2 text-[14px] sm:text-[16px] text-[#64748B]">
                                {[
                                    "Government Contract Ready",
                                    "Compliance-Oriented Operations",
                                    "Vendor Registration Complete",
                                ].map((text, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-green-500">✓</span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link to="/capabilities/download">
                            <button className="bg-blue-500 hover:bg-[#3B92F8] text-white px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition text-[14px] sm:text-[16px] w-full sm:w-auto">
                                <img src="/images/Home/Section5/downloadIcon.png" alt="" />
                                Download Capability Statement
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Leadership & Expertise */}
            <section className="w-full flex items-center justify-center bg-[#031B4E] mt-10">
                <div className="max-w-[1434px] w-full px-4 sm:px-6 lg:px-16 py-14 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
                    <div className="relative w-full lg:w-[50%]">
                        <img
                            src="/images/Home/Section6/leader&expertise.png"
                            alt="Leadership team"
                            className="w-full max-w-[628px] mx-auto h-[320px] sm:h-[450px] lg:h-[550px] object-cover"
                        />

                        <div className="absolute bottom-6 right-6 sm:right-20 lg:right-28 text-center">
                            <p className="text-white text-[28px] sm:text-[40px] lg:text-[45px] font-extrabold">
                                10+
                            </p>
                            <p className="text-blue-200 text-[14px] sm:text-[18px] lg:text-[20px] leading-tight">
                                Years <br /> Experienced
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <h2 className="text-white text-[clamp(28px,5vw,42px)] font-semibold mb-8 lg:mb-12 max-w-[620px] max-lg:text-center">
                            Leadership & Expertise <br />A Foundation of Excellence
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/15 rounded-2xl py-8 sm:py-10 px-4 flex flex-col items-center text-center gap-6"
                                >
                                    <div className="w-11 h-11 rounded-full bg-[#3F95F9] flex items-center justify-center">
                                        <img src="/images/Home/Section6/tick_Icon.png" alt="" />
                                    </div>

                                    <p className="text-white font-semibold text-[15px] sm:text-[16px] whitespace-pre-line">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <h3 className="text-[clamp(32px,6vw,48px)] text-center mt-16 mb-10 lg:mb-20 font-bold leading-tight px-4">
                    What Clients Say Our <br className="hidden sm:block" /> Services
                </h3>

                <div className="max-w-7xl mx-auto px-4 sm:px-5 py-5 sm:py-8 lg:py-10">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-8"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="
                    min-w-[90%]
                    sm:min-w-[68%]
                    md:min-w-[48%]
                    lg:min-w-[38%]
                    xl:min-w-[34%]
                    snap-center
                    bg-[#F4F7F9]
                    rounded-[20px] sm:rounded-[24px]
                    p-5 sm:p-7 md:p-8
                    relative
                    flex
                    flex-col
                "
                            >
                                <div className="flex justify-between items-start mb-6 sm:mb-7">
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="
                            w-[70px] h-[70px]
                            sm:w-[90px] sm:h-[90px]
                            md:w-[105px] md:h-[105px]
                            rounded-full
                            object-cover
                        "
                                    />

                                    <img
                                        src="/images/Home/Section7/quote_Icon.png"
                                        alt=""
                                        className="
                            w-[30px] h-[25px]
                            sm:w-[36px] sm:h-[30px]
                            md:w-[40px] md:h-[33px]
                        "
                                    />
                                </div>

                                <p
                                    className="
                        text-[#0B1422]
                        text-[14px]
                        sm:text-[16px]
                        md:text-[17px]
                        lg:text-[18px]
                        font-medium
                        leading-[24px]
                        sm:leading-[28px]
                        md:leading-[30px]
                        mb-8 sm:mb-10
                    "
                                >
                                    "{item.text}"
                                </p>

                                <div className="mt-auto">
                                    <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-bold leading-[24px] text-[#0B1422] mb-2">
                                        {item.name}
                                    </h4>

                                    <div className="flex gap-1 text-orange-400 text-[15px] sm:text-[17px]">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-2.5 mt-5 sm:mt-6 flex-wrap">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => scrollTo(i)}
                                className={`transition-all duration-300 rounded-full border-2 ${activeDot === i
                                        ? "w-4 h-4 bg-[#3B82F6] border-[#3B82F6]"
                                        : "w-3 h-3 bg-white border-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="mt-12 mb-20 px-4 sm:px-5">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-[1278px] items-center mx-auto">
                    <div className="relative">
                        <img
                            src="/images/Home/Section8/Questions.png"
                            alt=""
                            className="w-full max-w-full object-cover rounded-xl"
                        />

                        <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 lg:right-[74px] bg-black rounded-[20px] w-[150px] sm:w-[180px] md:w-[220px] p-4 sm:p-6">
                            <p className="text-[28px] sm:text-[40px] text-white font-semibold">
                                10+
                            </p>
                            <p className="text-[15px] sm:text-[20px] text-white">
                                Years Of
                                <br /> Experience
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`transition-all w-full duration-300 rounded-[15px] overflow-hidden border border-[#8081874F] ${isOpen ? "bg-[#0B1422]" : "bg-[#F8F9FA]"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="w-full flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left"
                                    >
                                        <div
                                            className={`flex-shrink-0 w-[38px] h-[38px] sm:size-[42px] rounded-lg flex items-center justify-center transition-colors ${isOpen
                                                ? "bg-[#3B82F6] text-white"
                                                : "bg-gray-200 text-gray-600"
                                                }`}
                                        >
                                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                        </div>

                                        <span
                                            className={`text-[15px] sm:text-lg font-semibold leading-snug ${isOpen ? "text-white" : "text-black"
                                                }`}
                                        >
                                            {item.question}
                                        </span>
                                    </button>

                                    <div
                                        className={`pl-[65px] pr-4 sm:pl-20 sm:pr-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[220px] pb-6 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-400 text-[14px] sm:text-[16px] leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;