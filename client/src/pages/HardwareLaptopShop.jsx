
import React, { useState } from "react";
import { useRef } from 'react'
import { Plus, Minus, Heart, Star  } from 'lucide-react'
// import {} from "lucide-react";

const thumbs = [
    "/images/Hardware/ProductDetails/laptop01.png",
    "/images/Hardware/ProductDetails/laptop02.png",
    "/images/Hardware/ProductDetails/laptop03.png",
];

const reviews = [
    { percent: 70, width: "70%" },
    { percent: 15, width: "45%" },
    { percent: 10, width: "32%" },
    { percent: 3, width: "14%" },
    { percent: 2, width: "7%" },
];

export const testimonials = [
    { id: 1, name: "ENGINEER. LONDON", text: "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.", image: "/images/Home/Section7/scroll01.png" },
    { id: 2, name: "ENGINEER. SWITZERLAND", text: "Our IT consulting services are tailored to help businesses optimize their technology strategies and streamline for greater efficiency.", image: "/images/Home/Section7/scroll02.png" },
    { id: 3, name: "FOUNDER. LONDON", text: "Our IT consulting services are designed to empower businesses in enhancing their technology strategies.", image: "/images/Home/Section7/scroll03.png" },
    { id: 4, name: "ENGINEER. LONDON", text: "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.", image: "/images/Home/Section7/scroll01.png" },
    { id: 5, name: "ENGINEER. SWITZERLAND", text: "Our IT consulting services are tailored to help businesses optimize their technology strategies and streamline for greater efficiency.", image: "/images/Home/Section7/scroll02.png" },
    { id: 6, name: "FOUNDER. LONDON", text: "Our IT consulting services are designed to empower businesses in enhancing their technology strategies.", image: "/images/Home/Section7/scroll03.png" },
    { id: 7, name: "ENGINEER. LONDON", text: "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.", image: "/images/Home/Section7/scroll01.png" },
    { id: 8, name: "ENGINEER. SWITZERLAND", text: "Our IT consulting services are tailored to help businesses optimize their technology strategies and streamline for greater efficiency.", image: "/images/Home/Section7/scroll02.png" },
    { id: 9, name: "FOUNDER. LONDON", text: "Our IT consulting services are designed to empower businesses in enhancing their technology strategies.", image: "/images/Home/Section7/scroll03.png" }

];
export const faqData = [
    {
        question: "What bookkeeping services do you offer?",
        answer: "We offer a full range of bookkeeping services including day-to-day transaction recording, bank reconciliation, financial reporting, and outsourced bookkeeping solutions tailored to your business needs."
    },
    { question: "Do you work with small businesses?", answer: "Yes, we specialize in scaling solutions for startups and small enterprises." },
    { question: "How does outsourced bookkeeping work?", answer: "We integrate with your existing tools to manage your books remotely and securely." },
    { question: "How secure is my financial data?", answer: "We use bank-grade encryption and strict internal protocols to ensure your data remains private." },
    { question: "Can your services scale as my business grows?", answer: "Absolutely. Our packages are designed to grow alongside your transaction volume." },
    { question: "How often will I receive financial reports?", answer: "Standard reporting is monthly, but we offer weekly or real-time dashboards as well." }
];
const HardwareLaptopShop = () => {
    const [qty, setQty] = useState(2);
    const [size, setSize] = useState("S");

    // testimonials
    const [openIndex, setOpenIndex] = useState(0);
    const scrollRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);

    // Function to scroll to a specific index
    const scrollTo = (index) => {
        const container = scrollRef.current;
        if (container) {
            const cardWidth = container.offsetWidth / 3; // Approximation for desktop
            container.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth',
            });
            setActiveDot(index);
        }
    };

    // Sync dots if user scrolls manually
    const handleScroll = () => {
        const container = scrollRef.current;
        if (container) {
            const index = Math.round(container.scrollLeft / (container.offsetWidth / 3));
            setActiveDot(index);
        }
    };
    return (
        <main>
            {/* Product Details */}
            <section className="w-full bg-white px-4 py-8 mt-20 md:px-8 lg:px-16">
                <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Left Images */}
                        <div className="relative rounded-[10px]  overflow-hidden">
                            <img
                                src="/images/Hardware/ProductDetails/mainLaptop.png"
                                alt="Laptop"
                                className="h-[420px] w-full lg:w-[623px] rounded-[16px] object-cover lg:h-[907px]"
                            />

                            <div className="absolute mt-3 grid grid-cols-3 gap-3 left-3 right-3 bottom-5">
                                {thumbs.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt=""
                                        className="h-[110px] w-full lg:max-w-[191px] rounded-[8px] object-cover lg:h-[185px]"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="pt-2">
                            <span className="inline-flex h-[58px] w-[190px] items-center justify-center rounded-full border border-gray-300 text-[24px] font-bold">
                                LAPTOP
                            </span>

                            <h1 className="mt-5 text-[26px] font-extrabold uppercase leading-tight text-black md:text-[30px]">
                                VX-ELITE BUSINESS LAPTOP PRO
                            </h1>

                            <p className="mt-3 max-w-[560px] text-[15px] font-medium leading-5 text-gray-500">
                                Reliable and secure laptop built for corporate environments and
                                administrative operations.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-[22px] font-bold text-gray-400 line-through">
                                        $44.99
                                    </span>
                                    <span className="text-[32px] font-bold text-black">$24.99</span>
                                </div>

                                <div className="flex h-[38px] overflow-hidden rounded-md border border-gray-400">
                                    <button
                                        onClick={() => setQty(Math.max(1, qty - 1))}
                                        className="w-[42px] text-[22px]"
                                    >
                                        <Minus size={18} className="mx-auto" />
                                    </button>
                                    <div className="flex w-[60px] items-center justify-center border-x border-gray-400 text-[20px] font-semibold">
                                        {qty}
                                    </div>
                                    <button
                                        onClick={() => setQty(qty + 1)}
                                        className="w-[42px] bg-black text-white"
                                    >
                                        <Plus size={20} className="mx-auto" />
                                    </button>
                                </div>
                            </div>

                            <h3 className="mt-7 text-[24px] font-bold">Select Size</h3>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {["S", "M", "L", "XL", "XXL"].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setSize(item)}
                                        className={`h-[52px] min-w-[100px] rounded-full text-[22px] font-semibold ${size === item
                                                ? "bg-black text-white"
                                                : "bg-[#F5F5F5] text-black"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-7 flex items-center gap-3">
                                <button className="h-[64px] flex-1 rounded-md bg-[#3B8FF3] text-[18px] font-semibold text-white shadow-lg">
                                    Get Free Quote
                                </button>

                                <button className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-gray-300">
                                    <Heart size={28} />
                                </button>
                            </div>

                            <div className="mt-7 rounded-[18px] border border-gray-300 p-6 md:p-7">
                                <h3 className="text-[24px] font-bold">Description</h3>

                                <p className="mt-5 text-[18px] leading-[30px] text-gray-500">
                                    The VX–Elite Business Laptop Pro is a dependable and
                                    performance-driven computing solution designed to meet the
                                    evolving demands of modern corporate environments. Engineered
                                    with a focus on reliability, security, and operational
                                    efficiency, this laptop is ideal for professionals handling
                                    administrative tasks, business applications, and enterprise
                                    workflows.
                                </p>

                                <p className="mt-2 text-[18px] leading-[30px] text-gray-500">
                                    Built to deliver consistent performance, the VX–Elite Business
                                    Laptop Pro supports multitasking across productivity tools
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="mt-16">
                        <h2 className="text-[34px] font-extrabold text-black md:text-[40px]">
                            Rating & Reviews
                        </h2>

                        <div className="mt-8 grid gap-4 lg:grid-cols-[298px_542px]">
                            <div className="flex h-[230px] flex-col items-center justify-center rounded-md bg-white shadow-lg">
                                <h3 className="text-[56px] font-bold">4.8</h3>

                                <div className="mt-2 flex gap-1">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={18}
                                            className="fill-black text-black"
                                        />
                                    ))}
                                </div>

                                <p className="mt-4 text-[16px] font-medium">Product Rating</p>
                            </div>

                            <div className="rounded-md bg-white h-[230px] p-8 shadow-lg">
                                <div className="space-y-3">
                                    {reviews.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="h-[5px] flex-1 rounded-full bg-gray-300">
                                                <div
                                                    className="h-full rounded-full bg-[#39A9E8]"
                                                    style={{ width: item.width }}
                                                />
                                            </div>

                                            <div className="flex min-w-[78px] gap-[2px]">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={11}
                                                        className="fill-black text-black"
                                                    />
                                                ))}
                                            </div>

                                            <span className="w-[38px] text-[16px] font-medium text-[#6A8CEB]">
                                                {item.percent}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Clients Say Our Services */}
            <section>
                <h3 className="text-[48px] text-center mt-16 mb-20 font-bold leading-tight ">
                    What Clients Say Our <br /> Services
                </h3>
                <div className="max-w-7xl mx-auto px-4 py-10">
                    {/* Scroll Container */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[90%] md:min-w-[45%] lg:min-w-[39%] snap-center bg-[#F4F7F9] rounded-[24px] p-8 md:p-10 relative flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <img src={item.image} alt="" className="size-[120px] rounded-full" />
                                    <img src="/images/Home/Section7/quote_Icon.png" alt="" className='w-[42px] h-[34px]' />
                                </div>

                                <p className="text-[#0B1422] text-[20px] font-medium leading-relaxed mb-10">
                                    "{item.text}"
                                </p>

                                <div>
                                    <h4 className="text-[16px] font-bold leading-[26px] text-[#0B1422] mb-2">{item.name}</h4>
                                    <div className="flex gap-1 text-orange-400">
                                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center gap-3 mt-8">
                        {[...Array(8)].map((_, i) => (
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
        </main>
    )
}

export default HardwareLaptopShop
