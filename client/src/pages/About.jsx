import React from 'react'
import { Lightbulb, Cloud, Target, Share2, ChevronsRight } from 'lucide-react';
import { useState } from 'react'
import { useRef } from 'react'
import { Plus, Minus } from 'lucide-react';
const quality = [
  {
    image: "/images/AboutUs/section3.png",
    desciption: "Illinois-Based Strategic Technology Provider"
  },
  {
    image: "/images/AboutUs/section3.png",
    desciption: "Government & Enterprise-Focused Operations"
  },
  {
    image: "/images/AboutUs/section3.png",
    desciption: "Mission-Critical Infrastructure Delivery"
  },
  {
    image: "/images/AboutUs/section3.png",
    desciption: "Reliable Supply Chain Solutions"
  }
]
const staticData = [
  {
    number: "8K",
    desciption: "Project Completed"
  }, {
    number: "260K",
    desciption: "Skilled Experts"
  }, {
    number: "60K",
    desciption: "Media Activities"
  }, {
    number: "19K",
    desciption: "Skilled Experts"
  }
]
const icons = [{
  icon: "/images/AboutUs/section5/idea.png",
  desciption: "Enterprise Server Infrastructure"
}, {
  icon: "/images/AboutUs/section5/sassdevelopment.png",
  desciption: "SaaS Deployment & Integration"
}, {
  icon: "/images/AboutUs/section5/secure.png",
  desciption: "Secure IT Architecture"
}, {
  icon: "/images/AboutUs/section5/sassdevelopment.png",
  desciption: "Cloud-Based ERP & CRM Systems"
}
]
const strategicSourcing = [
  {
    list: "Global Manufacturer Partnerships"
  },
  {
    list: "Industrial Equipment Procurement"
  },
  {
    list: "Medical & Technical Equipment Sourcing"
  },
  {
    list: "Logistics & Delivery Coordination"
  }
]
const features = [
  { label: "Knowledge of Federal\n& State Procurement" },
  { label: "Regulatory\nCompliance Expertise" },
  { label: "Transparent Business\nOperations" },
  { label: "Strategic Contract\nManagement" },
];
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
const About = () => {
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
      <section className='relative'>
        <img src="/images/AboutUs/section1.png" alt="" className='w-full h-[603px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 "></div>
        <div className="z-20 absolute flex justify-center flex-col text-center top-1/2 left-1/2 -translate-x-1/2 ">
          <h1 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>About Vaxterm LLC</h1>
          <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 max-w-[650px] mx-auto'>Delivering Reliable Technology, Strategic Procurement, and Government Compliant Solutions.</p>
        </div>
      </section>
      <section className='max-w-[1218px] mx-auto mt-16 lg:px-0 px-4'>
        <div className="">
          <h2 className='text-[48px] text-[#011505] font-bold'>Bridging Technology and Operations</h2>
          <p className='text-[16px] text-[#011505] max-w-[857px] mt-7'>Vaxterm LLC combines advanced procurement capabilities with a strong commitment to quality and reliability. Our global sourcing network and direct manufacturer partnerships enable us to procure specialized equipment, industrial systems, and critical technology assets across multiple industries with precision and efficiency.</p>
        </div>
        <div className="grid md:grid-cols-[2.5fr_1fr] grid-cols-1 gap-8 mt-10 items-stretch">

          {/* Left Image */}
          <div className="overflow-hidden rounded-[25px] shadow-lg">
            <img
              src="/images/AboutUs/section2.png"
              alt="About Us"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Right Content */}
          <div className="flex md:flex-col flex-row gap-8 justify-between">

            <div className="bg-[#3D8EF4] rounded-[25px] p-5 max-w-[375px] shadow-lg">
              <h4 className="lg:text-[25.37px] text-[16px] text-white font-semibold mb-3">
                Our Identity
              </h4>

              <p className="lg:text-[13.84px] text-[10px] leading-6 text-white/90">
                Vaxterm LLC is an Illinois-based strategic solutions provider dedicated
                to meeting the evolving needs of government agencies and global
                enterprises. Our mission is to simplify complex supply chains.
              </p>
            </div>

            <div className="bg-black rounded-[25px] p-6 max-w-[375px] shadow-lg">
              <h4 className="lg:text-[25.37px] text-[16px] text-white font-semibold mb-3">
                Our Commitment
              </h4>

              <p className="lg:text-[13.84px] text-[10px] leading-6 text-white/90">
                At Vaxterm LLC, we believe that successful partnerships are built on
                trust, performance, and accountability. Our operations are guided by a
                "Quality First" philosophy, ensuring that every hardware component and
                software solution.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 max-w-[1218px] mx-auto">
          {quality.map((item, index) => (
            <div className="flex flex-col  w-full lg:h-[255px] shadow-lg pl-7 py-9 rounded-[21.29px]" key={index}>
              <div className="bg-gradient-to-b from-[#1F90D7] to-[#1F90D7]/0 rounded-lg w-[75px] h-[68px] flex items-center justify-center mb-9">
                <img src={item.image} alt="" />
              </div>
              <p className='text-[20px] text-[#011505] font-semibold'>{item.desciption}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='mt-16  mb-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto h-auto lg:h-[237px] max-w-[1171px]">
          {staticData.map((item, index) => (
            <div className={`flex flex-col justify-center items-center border-l border-[#3F91F6] ${index === 0 ? 'border-l-0' : ''}`} key={index}>
              <p className='text-[48px] text-[#000000] font-bold'>{item.number}</p>
              <p className='text-[18px] text-[#6E7070]'>{item.desciption}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='mb-24'>
        <div className=" bg-white text-black flex items-center justify-center px-8 font-sans ">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-x-24 items-center">

            {/* Left Content Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src="/images/AboutUs/section5/iconTitle.png" alt="" /><p className='text-[18px] font-medium'>CORE SPECIALTY</p>
              </div>
              <h2 className='text-[48px] font-bold max-w-[502px]'>
                Digital Transformation & IT Solutions
              </h2>

              <div className="max-w-md">
                <p className="text-[#011505] text-[16px] leading-[23px]">
                  At the core of our operations, Vaxterm LLC is a technology-driven organization focused on delivering high-performance IT ecosystems
                </p>
              </div>

              {/* Vertical Icon Menu */}
              <div className="flex flex-col gap-4 w-fit">
                {icons.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="flex items-center justify-center rounded-xl bg-[#EEF1FF] size-[52px]">
                      <img src={item.icon} alt="" className='size-[36px] ' />

                    </div>
                    <p className='text-[20px] font-semibold'>{item.desciption}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Card Section */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="rounded-[2rem] overflow-hidden">
                <img
                  src="/images/AboutUs/section5/core_specialty.png"
                  alt="Team working on laptops"
                  className="w-full sm:max-w-[495px] h-full object-cover opacity-90"
                />
              </div>

              {/* Overlapping Stat Card */}
              <div className="absolute bottom-10 -right-4 md:-right-20 bg-[#3D8EF4] rounded-2xl p-8 w-64 shadow-2xl">
                <div className="flex flex-col items-center text-center gap-4">
                  {/* Radial Progress Simulation */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <img src="/images/AboutUs/section5/80.png" alt="" />
                    <span className="absolute text-2xl font-bold text-white">80%</span>
                  </div>

                  <p className="text-white font-medium leading-tight">
                    Reliable IT. Real-Time Results.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Leadership & Expertise  */}
      <section className="w-full  flex items-center justify-center bg-[#031B4E] mt-10">
        <div className="max-w-[1434px]  px-4 lg:px-16 py-20 flex flex-col lg:flex-row items-center gap-10">

          <div className="relative lg:w-[50%]">
            <img
              src="/images/Home/Section6/leader&expertise.png"
              alt="Leadership team"
              className="w-[628px] sm:h-[550px] h-[360px] object-top"
            />

            <div className="absolute bottom-8 md:right-28 right-10 text-center">
              <p className="text-white sm:text-[45px] text-[30px] font-extrabold">20+</p>
              <p className="text-blue-200 sm:text-[20px] text-[16px] leading-tight">
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
      {/* Strategic Sourcing  */}
      <section className='my-28 lg:mb-0 mb-[600px]'>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[477px] max-w-[1248px] mx-auto lg:gap-28 gap-10 px-10">
          <div>
            <h2 className='max-w-[502px] text-[48px] font-bold'>Strategic Sourcing — Beyond the Digital Frontier</h2>
            <p className='max-w-[460px] text-[16px] text-[#011505] font-dm'>Recognizing that operational success extends beyond software and hardware, Vaxterm LLC maintains a powerful global procurement division </p>
            <div className="">
              <ul>
                {strategicSourcing.map((item, index) => (
                  <li key={index} className='bg-[#F5F4F4] w-[373px] flex py-[5px] px-2 mt-4
                   items-center gap-4'>
                    <div className='bg-[#3D92F7] size-[16px] rounded-full flex justify-center items-center'><img src="/images/AboutUs/section7/tick.png" alt="" /></div>
                    <p className='text-[16px] text-black font-medium font-dm'>{item.list}</p>
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className="">
            <img src="/images/AboutUs/section7/strategicpic.png" alt="" className='xl:max-w-[633px] lg:h-[477px] h-[400px]'/>
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

export default About
