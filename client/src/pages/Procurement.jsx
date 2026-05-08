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
              Connect with our team to discuss your technology, procurement, or enterprise infrastructure requirements.
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
              className='w-[376px] h-[487px] rounded-[25px] object-cover shadow-lg'
            />
          </div>

          {/* Content */}
          <div className="w-[140%]">


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
              className=' h-[417px] rounded-[25px] shadow-lg'
            />
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
