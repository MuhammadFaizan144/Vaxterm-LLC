import React from 'react'
import { Lightbulb, Cloud, Target, Share2, ChevronsRight } from 'lucide-react';
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
const About = () => {
  return (
    <main>
      <section className='relative'>
        <img src="/images/AboutUs/section1.png" alt="" className='w-full h-[603px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 "></div>
        <div className="z-20 absolute flex justify-center flex-col text-center top-1/2 left-1/2 -translate-x-1/2 ">
          <h1 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>About Vaxterm LLC</h1>
          <p className='lg:text-[20px] md:text-[15px] text-[16px] font-dm text-white'>Delivering Reliable Technology, Strategic Procurement, and Government Compliant Solutions.</p>
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
              <h4 className="text-[25.37px] text-white font-semibold mb-3">
                Our Identity
              </h4>

              <p className="text-[13.84px] leading-6 text-white/90">
                Vaxterm LLC is an Illinois-based strategic solutions provider dedicated
                to meeting the evolving needs of government agencies and global
                enterprises. Our mission is to simplify complex supply chains.
              </p>
            </div>

            <div className="bg-black rounded-[25px] p-6 max-w-[375px] shadow-lg">
              <h4 className="text-[25.37px] text-white font-semibold mb-3">
                Our Commitment
              </h4>

              <p className="text-[13.84px] leading-6 text-white/90">
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
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

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
    </main>
  )
}

export default About
