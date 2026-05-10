import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Plus, Minus } from 'lucide-react';
import { globalOperation, testimonials, enterprisecomputing, IndustrialPower, networking, facility } from '../Constant/hardware'
const Hardware = () => {
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
        <img src="/images/Hardware/hardwarehero.png" alt="" className='w-full h-[636px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[636px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4 max-xl:w-full ">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Enterprise Hardware & Infrastructure Solutions</h2>
          <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 mx-auto max-lg:w-[100%]'>Delivering High-Performance IT Hardware, Industrial Power Systems, and Reliable Infrastructure for Mission-Critical Operations.</p>
        </div>
      </section>
      <section className='px-4 my-24'>
        <div className=" grid lg:grid-cols-2 grid-cols-1 place-items-center mx-auto max-w-[1285px]">
          <div className="lg:max-w-[707px] w-full">
            <img src="/images/Hardware/globalOperation.png" alt="" />
          </div>
          <div className="lg:max-w-[502px] w-full">
            <div className="flex gap-2 items-center mb-4">
              <img src="/images/Hardware/iconTitle.png" alt="" className='w-[26px] h-[13px]' />
              <h5 className='font-dm text-[16px] text-[#011505] uppercase'>Global Operations</h5>
            </div>
            <h2 className="font-dm text-[40px] font-medium text-[#000000] mb-4">Mission Critical Hardware for Global Operations</h2>
            <p className='font-dm text-[16px] text-[#011505] mt-4'>Vaxterm LLC delivers the physical backbone required to support complex digital and industrial ecosystems. We specialize in the procurement and supply of high performance IT hardware and industrial grade electrical infrastructure tailored for demanding environments</p>
            <div className="mt-4">
              <ul>
                {globalOperation.map((item, index) => (
                  <li key={index} className={`flex items-center gap-[8px] rounded-[42px] bg-[#3D92F7] max-w-[373px] px-[10px] min-h-[32px] mb-4 ${item.side ? "lg:ml-5" : ""} `}>
                    <img src={item.icon} alt="" className='size-[16px]' />
                    <p className='text-white '>{item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
      {/* enterprisecomputing */}
      <section className=''>
        <div className="text-center flex justify-center text-[#110F0F] text-[30px] font-semibold font-dm mb-10 px-4 lg:text-[40px] sm:text-[35px]">
          Enterprise Computing & Data <br /> Center Solutions
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center max-w-[1277px] mx-auto gap-5 px-4 ">
          {enterprisecomputing.map((item, index) => (
            <div className="max-w-[409px] lg:mb-48 sm:mb-28 mb-32 relative" key={index}>
              <img src={item.image} alt="" className='w-full rounded-[10px]' />
              <div className="absolute  -bottom-28 right-0">
                <div className="absolute w-[59px] h-[56px] bg-[#3D92F7] flex justify-center items-center rounded-full right-8 -top-8">
                  <img src="images/Hardware/arrow.png" alt="arrow" className='size-[19px ]' />
                </div>
                <div className="bg-white flex flex-col justify-center gap-3 max-w-[368px] h-[253px] border border-gray-200 shadow-lg rounded-b-[17.44px] rounded-tl-[17.44px]  pl-8 pr-4 overflow-hidden">
                  <h3 className='text-[#110F0F text-[24px] font-semibold font-dm'>{item.title}</h3>
                  <p className='text-[#110F0F] text-[16px] font-dm'>{item.description}</p>
                  <button className='text-white bg-[#3D92F7] rounded-[8px] text-[16px] font-medium px-5 py-2 w-[149px] shadow-lg shadow-gray-400'>
                    View Product
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
      {/* IndustrialPower */}
      <section className=''>
        <div className="text-center flex justify-center text-[#110F0F] text-[30px] font-semibold font-dm mb-10 px-4 lg:text-[40px] sm:text-[35px]">
          Industrial Power & Energy<br className='max-lg:hidden' /> Systems
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center max-w-[1277px] mx-auto gap-5 px-4 ">
          {IndustrialPower.map((item, index) => (
            <div className="max-w-[409px] lg:mb-48 sm:mb-28 mb-32 relative" key={index}>
              <img src={item.image} alt="" className='w-full rounded-[10px]' />
              <div className="absolute  -bottom-28 right-0">
                <div className="absolute w-[59px] h-[56px] bg-[#3D92F7] flex justify-center items-center rounded-full right-8 -top-8">
                  <img src="images/Hardware/arrow.png" alt="arrow" className='size-[19px ]' />
                </div>
                <div className="bg-white flex flex-col justify-center gap-3 max-w-[368px] h-[253px] border border-gray-200 shadow-lg rounded-b-[17.44px] rounded-tl-[17.44px]  pl-8 pr-4 overflow-hidden">
                  <h3 className='text-[#110F0F text-[24px] font-semibold font-dm'>{item.title}</h3>
                  <p className='text-[#110F0F] text-[16px] font-dm'>{item.description}</p>
                  <button className='text-white bg-[#3D92F7] rounded-[8px] text-[16px] font-medium px-5 py-2 w-[149px] shadow-lg shadow-gray-400'>
                    View Product
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
      {/* networking */}
      <section className=''>
        <div className="text-center flex justify-center text-[#110F0F] text-[30px] font-semibold font-dm mb-10 px-4 lg:text-[40px] sm:text-[35px]">
          Networking & Connectivity<br className='max-lg:hidden' /> Hardware
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center max-w-[1277px] mx-auto gap-5 px-4 ">
          {networking.map((item, index) => (
            <div className="max-w-[409px] lg:mb-48 sm:mb-28 mb-32 relative" key={index}>
              <img src={item.image} alt="" className='w-full rounded-[10px]' />
              <div className="absolute  -bottom-28 right-0">
                <div className="absolute w-[59px] h-[56px] bg-[#3D92F7] flex justify-center items-center rounded-full right-8 -top-8">
                  <img src="images/Hardware/arrow.png" alt="arrow" className='size-[19px ]' />
                </div>
                <div className="bg-white flex flex-col justify-center gap-3 max-w-[368px] h-[253px] border border-gray-200 shadow-lg rounded-b-[17.44px] rounded-tl-[17.44px]  pl-8 pr-4 overflow-hidden">
                  <h3 className='text-[#110F0F text-[24px] font-semibold font-dm'>{item.title}</h3>
                  <p className='text-[#110F0F] text-[16px] font-dm'>{item.description}</p>
                  <button className='text-white bg-[#3D92F7] rounded-[8px] text-[16px] font-medium px-5 py-2 w-[149px] shadow-lg shadow-gray-400'>
                    View Product
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
      {/* facility */}
      <section className=''>
        <div className="text-center flex justify-center text-[#110F0F] text-[30px] font-semibold font-dm mb-10 px-4 lg:text-[40px] sm:text-[35px]">
          Facility & Commercial<br className='max-lg:hidden' /> Appliances
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center max-w-[1277px] mx-auto gap-5 px-4 ">
          {facility.map((item, index) => (
            <div className="max-w-[409px] lg:mb-48 sm:mb-28 mb-32 relative" key={index}>
              <img src={item.image} alt="" className='w-full rounded-[10px]' />
              <div className="absolute  -bottom-28 right-0">
                <div className="absolute w-[59px] h-[56px] bg-[#3D92F7] flex justify-center items-center rounded-full right-8 -top-8">
                  <img src="images/Hardware/arrow.png" alt="arrow" className='size-[19px ]' />
                </div>
                <div className="bg-white flex flex-col justify-center gap-3 max-w-[368px] h-[253px] border border-gray-200 shadow-lg rounded-b-[17.44px] rounded-tl-[17.44px]  pl-8 pr-4 overflow-hidden">
                  <h3 className='text-[#110F0F text-[24px] font-semibold font-dm'>{item.title}</h3>
                  <p className='text-[#110F0F] text-[16px] font-dm'>{item.description}</p>
                  <button className='text-white bg-[#3D92F7] rounded-[8px] text-[16px] font-medium px-5 py-2 w-[149px] shadow-lg shadow-gray-400'>
                    View Product
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
      {/* last section */}
      
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

export default Hardware
