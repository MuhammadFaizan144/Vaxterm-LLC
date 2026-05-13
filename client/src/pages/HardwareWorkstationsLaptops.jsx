
import React from 'react'
import { Search, ArrowRight, ChevronUp, Star } from "lucide-react";
import { useState } from 'react'
import { useRef } from 'react'
import { Plus, Minus } from 'lucide-react'

const products = [
  { img: "/images/Hardware/shop/workStation&laptop/c1r1.png", title: "VX–Pro Engineering Workstation X1", price: "$110" },
  { img: "/images/Hardware/shop/workStation&laptop/c2r1.png", title: "VX–Elite Business Laptop Pro", price: "$245" },
  { img: "/images/Hardware/shop/workStation&laptop/c3r1.png", title: "VX–Mobile Performance Laptop Z5", price: "$109" },
  { img: "/images/Hardware/shop/workStation&laptop/c1r2.png", title: "VX–Pro Engineering Workstation X1", price: "$780" },
  { img: "/images/Hardware/shop/workStation&laptop/c2r1.png", title: "VX–Elite Business Laptop Pro", price: "$110" },
  { img: "/images/Hardware/shop/workStation&laptop/c3r1.png", title: "VX–Mobile Performance Laptop Z5", price: "$152" },
  { img: "/images/Hardware/shop/workStation&laptop/c1r2.png", title: "VX–Pro Engineering Workstation X1", price: "$132" },
  { img: "/images/Hardware/shop/workStation&laptop/c2r1.png", title: "VX–Elite Business Laptop Pro", price: "$123" },
  { img: "/images/Hardware/shop/workStation&laptop/c3r1.png", title: "VX–Mobile Performance Laptop Z5", price: "$141" },
  { img: "/images/Hardware/shop/workStation&laptop/c1r4.png", title: "VX–Pro Engineering Workstation X1", price: "$110" },
  { img: "/images/Hardware/shop/workStation&laptop/c2r1.png", title: "VX–Elite Business Laptop Pro", price: "$110" },
  { img: "/images/Hardware/shop/workStation&laptop/c3r1.png", title: "VX–Mobile Performance Laptop Z5", price: "$152" },
];

const featured = [
  "/images/Hardware/shop/workStation&laptop/lp01.png",
  "/images/Hardware/shop/workStation&laptop/lp02.png",
  "/images/Hardware/shop/workStation&laptop/lp03.png",
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
const ProductCard = ({ item }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
      <img
        src={item.img}
        alt={item.title}
        className="h-[150px] w-full rounded-xl object-cover"
      />

      <div className="p-3">
        <h3 className="text-[15px] font-bold text-[#111827]">
          {item.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-[12px] text-gray-500">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span>4.5 (320 reviews)</span>
        </div>

        <p className="mt-2 text-[20px] font-bold text-black">{item.price}</p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="h-[34px] rounded-md bg-[#3B8FF3] text-[11px] font-semibold text-white">
            Get Free Quote
          </button>
          <button className="h-[34px] rounded-md border border-[#3B8FF3] text-[11px] font-semibold text-[#3B8FF3]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
const HardwareWorkstationsLaptops = () => {
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
      <section>
        <img src="/images/Hardware/shop/workStation&laptop/heroworkstation.png" alt="" className='w-full h-[636px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[636px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4 max-xl:w-full ">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Enterprise Hardware & Infrastructure Solutions</h2>
          <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 mx-auto max-lg:w-[100%]'>Delivering High-Performance IT Hardware, Industrial Power Systems, and Reliable Infrastructure for Mission-Critical Operations.</p>
        </div>
      </section>
      <section className="w-full bg-white px-4 py-10 md:px-8 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="mb-7 text-[36px] font-semibold text-black md:text-[52px]">
            All Products
          </h2>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <aside className="space-y-4">
              <div className="rounded-lg border border-gray-300 bg-white p-5">
                <h3 className="mb-5 text-[15px] font-bold text-[#0F172A]">
                  All Catagory
                </h3>

                {[
                  "Server Infrastructure",
                  "Workstations & Laptops",
                  "Data Storage Solutions",
                ].map((cat, index) => (
                  <button
                    key={cat}
                    className={`mb-3 flex h-[42px] w-full items-center justify-between rounded-full border px-4 text-[12px] font-semibold ${index === 1
                        ? "border-[#3B8FF3] bg-[#3B8FF3] text-white"
                        : "border-gray-200 bg-white text-[#0F172A]"
                      }`}
                  >
                    {cat}
                    <ArrowRight size={15} />
                  </button>
                ))}
              </div>

              <div className="rounded-lg border border-gray-300 bg-white p-5">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-[16px] font-bold">Availability</h3>
                  <ChevronUp size={16} />
                </div>

                <div className="flex gap-3">
                  <button className="rounded-full bg-[#3B8FF3] px-6 py-2 text-[12px] text-white">
                    In Stock
                  </button>
                  <button className="rounded-full border border-gray-300 px-6 py-2 text-[12px] text-black">
                    Our Of Stock
                  </button>
                </div>

                <hr className="my-6" />

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-[16px] font-bold">Price</h3>
                  <ChevronUp size={16} />
                </div>

                <input
                  type="range"
                  min="0"
                  max="200"
                  defaultValue="90"
                  className="w-full accent-[#3B8FF3]"
                />

                <div className="mt-3 flex justify-between text-[12px] font-medium">
                  <span>0</span>
                  <span>$200</span>
                </div>

                <hr className="my-6" />

                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-[16px] font-bold">Feature Products</h3>
                  <ChevronUp size={16} />
                </div>

                <div className="space-y-5">
                  {featured.map((img, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        src={img}
                        alt=""
                        className="h-[55px] w-[70px] object-contain"
                      />
                      <div>
                        <h4 className="text-[13px] font-semibold">
                          Vaxterm LLC Laptop
                        </h4>
                        <p className="text-[18px] font-bold">
                          $24.99{" "}
                          <span className="text-[12px] text-gray-400 line-through">
                            $44.99
                          </span>
                        </p>
                        <div className="flex gap-5 text-[8px] font-semibold">
                          <span>Mochallegance</span>
                          <span>15k Sold</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <img
                  src="/images/Hardware/shop/workStation&laptop/fp.png"
                  alt=""
                  className="mt-8 h-[260px] w-full rounded-xl object-cover"
                />
              </div>
            </aside>

            {/* Products */}
            <section>
              <div className="mb-8 flex flex-col gap-3 rounded-lg border border-gray-300 p-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search size={20} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search Workstations or Laptops..."
                    className="h-[46px] w-full outline-none"
                  />
                </div>
                <button className="h-[50px] rounded-md bg-[#3B8FF3] px-10 font-semibold text-white">
                  Search
                </button>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))}
              </div>
            </section>
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

export default HardwareWorkstationsLaptops
