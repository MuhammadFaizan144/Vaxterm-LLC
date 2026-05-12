import React from 'react'
import { digitaltransformation, whyChoose, steps, testimonials, faqData , services } from '../Constant/solution';
import { useState, useRef } from 'react';
import { Plus, Minus,Check } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const Solutions = () => {
  const[activeTab,setActiveTab]=useState(services[0]);

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
      {/* hero */}
      <section>
        <img src="/images/Solutions/solutionHero.png" alt="" className='w-full h-[636px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[636px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4 max-xl:w-full ">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Solutions</h2>
          <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 mx-auto max-lg:w-[100%]'>Empowering government agencies and enterprise organizations with scalable cloud-based software solutions designed for efficiency, automation, and long-term performance.</p>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center mt-24'>
        <h2 className='text-[48px] text-[#011505] font-bold text-center h-auto'>Digital Transformation Through <br className='max-lg:hidden' /> Advanced SaaS</h2>
        <div className="max-w-full rounded-[58px] mt-14 flex justify-center px-3 py-2 gap-3 shadow-lg max-lg:flex-wrap">
          {services.map((service) => (
            <button key={service.id} onClick={()=>setActiveTab(service)} className={`${activeTab.id===service.id?" bg-[#3D8EF4]  text-white":"bg-white text-black"} lg:text-[24px] text-[20px] font-semibold font-dm rounded-[100px] px-7 py-5`}>
              {service.Title}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1340px] px-4 mt-20">
          <div className="px-4">
            <h2 className='text-[36px] font-medium mb-5'>{activeTab.Title}</h2>
            <p className='text-[20px] text-gray-500 mb-8'>{activeTab.description}</p>
            <div className="space-y-4 mb-8">
              {activeTab.list.map((point,index)=>(
                <div className="flex items-center gap-4" key={index}>
                  <div className="bg-[#3D8EF4] rounded-full flex items-center justify-center size-[39px]">
                    <Check className='font-bold text-white text-[38px]'/>
                  </div>
                  <p className='text-[20px] font-medium text-black'>{point}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <Link to="/solutions/enterprise" className='bg-[#0D7FFB] hover:bg-blue-600 px-7 py-4 rounded-lg shadow-gray-400 shadow-lg text-white text-[16px] font-medium'>Learn More</Link>
              <button className='bg-white hover:bg-gray-200 px-7 py-4 rounded-lg shadow-gray-400 shadow-lg text-black text-[16px] font-medium'>Start Demo</button>
              
            </div>
          </div>
          <div className="">
            <img src={activeTab.image} alt={activeTab.Title} className='w-full lg:h-[542px] h-[400px] object-cover rounded-[15px]'/>
          </div>
        </div>
              
      </section>

      {/* Why Choose Vaxterm Software Solutions */}
      <section className='flex flex-col items-center'>
        <h2 className='mt-16 text-[48px] font-bold font-dm text-[#011505] text-center'>Why Choose Vaxterm <br className='max-lg:hidden ' /> Software Solutions</h2>
        <div className="max-w-[1259px] mx-auto py-14 px-4">

          <div className="flex max-lg:flex-col gap-6 items-stretch">

            {/* Left Image */}
            <div className="h-full">
              <img
                src="/images/Solutions/section3/choseVaxtern.png"
                alt="Business Meeting"
                className="lg:w-[491px] w-full lg:h-[557px] h-[400px] object-cover rounded-[20px]"
              />
            </div>

            {/* Right Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChoose.map((item, index) => (
                <div key={index} className="bg-[#fff] max-w-[358px] rounded-[20px] p-8 border border-gray-400 h-[271px]">
                  <div className="mb-6">
                    <img
                      src={item.image}
                      alt=""
                      className="w-12 h-12"
                    />
                  </div>

                  <h3 className="text-[20px] font-semibold text-[#111827] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[16px] leading-[32px] text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              ))}




            </div>
          </div>
        </div>
      </section>
      {/* Our Implementation Approach */}
      <section
        className="relative w-full overflow-hidden bg-[#1C3260] py-16 lg:py-24"

      >
        <img src="/images/Solutions/section4/bgImage.png" alt="background" className='max-w-[1329px] min-h-[800px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        <div className="max-w-[1270px] mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight">
              Our Implementation <br className="hidden sm:block" />
              Approach
            </h2>
          </div>
          {/* Main Content */}
          <div className="grid lg:grid-cols-[520px_1fr] xl:grid-cols-[560px_1fr] gap-8 lg:gap-10 items-start">
            {/* Left Image */}
            <div className="w-full lg:min-h-[689px] h-[500px]">
              <img
                src="/images/Solutions/section4/OIA.png"
                alt="Implementation Approach"
                className="w-full h-full max-h-[690px] object-cover rounded-3xl"
              />
            </div>
            {/* Right Side Steps */}
            <div className="flex flex-col gap-5">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="bg-[#556992]/80 backdrop-blur-sm rounded-[12px] p-6 sm:p-7 flex flex-col sm:flex-row gap-4 sm:gap-8"
                >
                  {/* Step Number */}
                  <div className="">
                    <p className="text-gray-300/50 text-sm sm:text-[16px] uppercase tracking-wide mb-2">
                      Step
                    </p>
                    <h3 className="text-white text-5xl sm:text-6xl lg:text-[72px] font-bold leading-none">
                      {step.id}
                    </h3>
                  </div>
                  {/* Step Content */}
                  <div className="flex-1">
                    <h4 className="text-white text-2xl sm:text-3xl lg:text-[20px] font-semibold mb-3 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-white/90 text-base sm:text-lg lg:text-[16px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* slider */}
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
      {/* question */}
      <section className='mt-12 mb-20'>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 max-w-[1278px] items-center mx-auto">

          <div className="relative">
            <img src="images/Home/Section8/Questions.png" alt="" className='md:p-0 px-4 ' />
            <div className="absolute bottom-0 lg:right-[74px] md:right-[24px] right-8 bg-black rounded-[20px] md:w-[220px] w-[180px] p-6 md:py-6 py-4">
              <p className='text-[40px] text-white font-semibold'>10+</p>
              <p className='text-[20px] text-white'>Years Of<br /> Experinece</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-all max-w-[673.0px] duration-300 rounded-[15px] overflow-hidden border border-[#8081874F] ${isOpen ? 'bg-[#0B1422] border border-[#8081874F]' : 'bg-[#F8F9FA]'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <div className={`flex-shrink-0 size-[42px] rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-[#3B82F6] text-black' : 'bg-gray-200 text-gray-600'
                      }`}>
                      {isOpen ? <Plus size={20} /> : <Minus size={20} />}
                    </div>
                    <span className={`text-lg font-semibold ${isOpen ? 'text-white' : 'text-black'}`}>
                      {item.question}
                    </span>
                  </button>

                  <div className={`px-20 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <p className="text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <Outlet/>
    </main>
  )
}

export default Solutions
