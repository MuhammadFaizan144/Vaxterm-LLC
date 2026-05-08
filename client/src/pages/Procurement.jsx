import React from 'react'
import { useState, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
const listStrategic = [
  {
    image: '/images/Procurement/section2/tickPro.png',
    description: "Comprehensive Procurement Solutions"
  },
  {
    image: '/images/Procurement/section2/tickPro.png',
    description: "Medical & Healthcare Equipment"
  }, {
    image: '/images/Procurement/section2/tickPro.png',
    description: "Industrial Machinery Procurement"
  }
]
const testimonials = [
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
const faqData = [
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
const Procurement = () => {
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
      <section className='relative w-full overflow-hidden'>

        {/* Background Image */}
        <img
          src="/images/Procurement/procurementHero.png"
          alt="Procurement Hero"
          className='w-full h-[603px] object-cover'
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">

          <div className="max-w-[800px]">

            <h2 className='lg:text-[60px] md:text-[50px] text-[38px] leading-tight font-dm text-white font-bold'>
              Procurement Services
            </h2>

            <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 max-w-[650px] mx-auto'>
              Reliable procurement and logistics solutions designed to <br/> deliver specialized equipment and essential supplies 
            </p>

          </div>

        </div>

      </section>
      <section className='max-w-[1400px] mx-auto px-4 py-20'>

        <div className="flex md:flex-row flex-col gap-16">

          {/* Left Image */}
          <div className="w-full">
            <img
              src="/images/Procurement/section2/strategicSourcingPro.png"
              alt=""
              className='md:w-[376px] w-full h-[487px] rounded-[25px] object-cover shadow-lg'
            />
          </div>

          {/* Content */}
          <div className="md:w-[140%] w-full">


            <h3 className='lg:text-[48px] md:text-[40px] text-[32px] leading-[50px] text-black font-bold mt-4 max-w-[413px]'>
              Strategic Sourcing & Global Logistics
            </h3>

            <p className='text-[16px] leading-tight text-[#414243] mt-6 max-w-[507px]'>
              Vaxterm LLC provides end-to-end procurement and logistics services that simplify sourcing processes and ensure reliable delivery of mission-critical equipment. Our global supplier network and logistics expertise enable organizations to access high-quality products with efficiency, compliance, and precision.
            </p>

            {/* List */}
            <ul className='bg-[#F0F3F7] py-4 px-4 rounded-[20px] mt-8 space-y-2 max-w-[480px]'>

              {listStrategic.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center gap-4'
                >
                  <img
                    src={item.image}
                    alt=""
                    className='w-[21px] h-[21px]'
                  />

                  <p className='text-[18px] md:text-[20px] text-[#0B1422] font-medium'>
                    {item.description}
                  </p>
                </li>
              ))}

            </ul>

            {/* Button */}
            <button className='bg-[#0D7FFB] text-[16px] py-3 px-7 rounded-lg shadow-gray-400 shadow-xl text-white mt-6 hover:bg-[#005fd1] transition-all duration-300'>
              View Our Capabilities
            </button>

          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="/images/Procurement/section2/strategicSourcingPro2.png"
              alt=""
              className=' h-[417px] md:w-[306px] w-full rounded-[25px] shadow-lg object-cover'
            />
          </div>

        </div>
      </section>
      <section className='bg-[#1C3260] w-full p-10'>
        <div className=" flex justify-center">
          <h2 className='text-center font-dm font-bold text-[40px] text-white mb-10'>Overview of <br /> Procurement Support</h2>
        </div>
        {/* Inner section 1 */}
        <div className="flex flex-col mb-14">
          <div className="flex lg:flex-row flex-col gap-10 justify-center">
            <div className="max-w-[815px] bg-white/15 rounded-[20px] p-10">
              <div className="bg-[#3D92F7] size-[50px] flex justify-center items-center rounded-[10px] mb-6">
                <img src="/images/Procurement/section3/IconOoP01.png" alt="" />
              </div>
              <h2 className='text-[28px] text-white font-bold mb-6'>Comprehensive Procurement Solutions</h2>
              <p className='text-[16px] text-white/80 mb-6'>Vaxterm LLC delivers comprehensive procurement services that support government agencies and enterprise organizations in sourcing specialized equipment and operational supplies. Our procurement strategies are built around quality assurance, supplier reliability, and cost efficiency.</p>
              <div className="border-b mb-6"></div>
              <div className="">
                <ul className='text-[20px] font-medium text-white'>
                  <li className='flex items-center gap-4' ><img src="/images/Procurement/section3/tickPro.png" alt="" /> we manage sourcing processes</li>
                   <li className='flex items-center gap-4'><img src="/images/Procurement/section3/tickPro.png" alt="" />Materials are delivered securely and efficiently</li>
                </ul>
              </div>
            </div>
            <img src="/images/Procurement/section3/OoP01.png" alt="" className='lg:max-w-[428px]  max-lg:h-[300px] object-cover rounded-[13px]'/>
          </div>
        </div>
        {/* Inner section 2 */}
        <div className="flex flex-col mb-14">
          <div className="flex lg:flex-row flex-col gap-10 justify-center">
            <img src="/images/Procurement/section3/OoP02.png" alt="" className='lg:max-w-[428px]  max-lg:h-[300px] object-cover rounded-[13px]'/>
            <div className="max-w-[815px] bg-white/15 rounded-[20px] p-10">
              <div className="bg-[#3D92F7] size-[50px] flex justify-center items-center rounded-[10px] mb-6">
                <img src="/images/Procurement/section3/IconOoP02.png" alt="" />
              </div>
              <h2 className='text-[28px] text-white font-bold mb-6'>Medical & Healthcare Equipment</h2>
              <p className='text-[16px] text-white/80 mb-6'>Vaxterm LLC supports healthcare facilities and government institutions by sourcing specialized medical equipment and laboratory instruments. We collaborate with trusted manufacturers to provide reliable medical technology that meets strict regulatory and safety standards.</p>
              <div className="border-b mb-6"></div>
              <div className="">
                <ul className='text-[20px] font-medium text-white'>
                  <li className='flex items-center gap-4' ><img src="/images/Procurement/section3/tickPro.png" alt="" />Medical Devices & Instruments</li>
                   <li className='flex items-center gap-4'><img src="/images/Procurement/section3/tickPro.png" alt="" />Healthcare Facility Equipment</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        {/* Inner section 3 */}
         <div className="flex flex-col mb-14">
          <div className="flex lg:flex-row flex-col gap-10 justify-center">
            <div className="max-w-[815px] bg-white/15 rounded-[20px] p-10">
              <div className="bg-[#3D92F7] size-[50px] flex justify-center items-center rounded-[10px] mb-6">
                <img src="/images/Procurement/section3/IconOoP03.png" alt="" />
              </div>
              <h2 className='text-[28px] text-white font-bold mb-6'>Industrial Machinery Procurement</h2>
              <p className='text-[16px] text-white/80 mb-6'>Vaxterm LLC provides sourcing services for industrial machinery and heavy-duty equipment required for operational facilities. Our procurement capabilities include forklifts, lifting systems, and material handling equipment used across industrial and logistics environments.</p>
              <div className="border-b mb-6"></div>
              <div className="">
                <ul className='text-[20px] font-medium text-white'>
                  <li className='flex items-center gap-4' ><img src="/images/Procurement/section3/tickPro.png" alt="" />Forklifts and Material Handling Equipment</li>
                   <li className='flex items-center gap-4'><img src="/images/Procurement/section3/tickPro.png" alt="" />Heavy Industrial Machinery</li>
                </ul>
              </div>
            </div>
            <img src="/images/Procurement/section3/OoP03.png" alt="" className='lg:max-w-[428px]  max-lg:h-[300px] object-cover rounded-[13px]'/>
          </div>
        </div>
        {/* Inner section 4 */}
        <div className="flex flex-col mb-14">
          <div className="flex lg:flex-row flex-col gap-10 justify-center">
            <img src="/images/Procurement/section3/OoP04.png" alt="" className='lg:max-w-[428px]  max-lg:h-[300px] object-cover rounded-[13px]'/>
            <div className="max-w-[815px] bg-white/15 rounded-[20px] p-10">
              <div className="bg-[#3D92F7] size-[50px] flex justify-center items-center rounded-[10px] mb-6">
                <img src="/images/Procurement/section3/IconOoP04.png" alt="" />
              </div>
              <h2 className='text-[28px] text-white font-bold mb-6'>General Supplies & Facility Equipment</h2>
              <p className='text-[16px] text-white/80 mb-6'>Vaxterm LLC supports organizations by sourcing general operational supplies required for daily business and facility management. Our team handles bulk procurement of office materials, furniture, and commercial-grade appliances to ensure consistent availability of essential resources.</p>
              <div className="border-b mb-6"></div>
              <div className="">
                <ul className='text-[20px] font-medium text-white'>
                  <li className='flex items-center gap-4' ><img src="/images/Procurement/section3/tickPro.png" alt="" />Office Furniture & Equipment</li>
                   <li className='flex items-center gap-4'><img src="/images/Procurement/section3/tickPro.png" alt="" /> Logistics & Inventory Coordination</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        {/* Inner section 5 */}
         <div className="flex flex-col mb-14">
          <div className="flex lg:flex-row flex-col gap-10 justify-center">
            <div className="max-w-[815px] bg-white/15 rounded-[20px] p-10">
              <div className="bg-[#3D92F7] size-[50px] flex justify-center items-center rounded-[10px] mb-6">
                <img src="/images/Procurement/section3/IconOoP05.png" alt="" />
              </div>
              <h2 className='text-[28px] text-white font-bold mb-6'>Direct Manufacturer Sourcing</h2>
              <p className='text-[16px] text-white/80 mb-6'>Vaxterm LLC maintains strong relationships with global manufacturers, enabling direct sourcing of specialized equipment and materials. Our end-to-end supply chain management approach ensures quality control, cost transparency, and reliable delivery timelines.</p>
              <div className="border-b mb-6"></div>
              <div className="">
                <ul className='text-[20px] font-medium text-white'>
                  <li className='flex items-center gap-4' ><img src="/images/Procurement/section3/tickPro.png" alt="" />Direct Manufacturer Coordination</li>
                   <li className='flex items-center gap-4'><img src="/images/Procurement/section3/tickPro.png" alt="" />Shipment Tracking & Logistics</li>
                </ul>
              </div>
            </div>
            <img src="/images/Procurement/section3/OoP05.png" alt="" className='lg:max-w-[428px]  max-lg:h-[300px] object-cover rounded-[13px]'/>
          </div>
        </div>
      </section>
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
    </main>
  )
}

export default Procurement
