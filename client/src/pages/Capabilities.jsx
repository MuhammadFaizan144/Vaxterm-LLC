import React from 'react'

import { capalitiesoverview, rightcapalitiesoverview, services } from '../Constant'
const naicsData = [

  {
    code: "541511",
    title: "Custom Computer Programming Services",
    icon: "/images/Capabilities/section4/PAC01.png",
  },
  {
    code: "541512",
    title: "Computer Systems Design Services",
    icon: "/images/Capabilities/section4/PAC02.png",
  },
  {
    code: "423430",
    title: "Computer & Peripheral Equipment",
    icon: "/images/Capabilities/section4/PAC03.png",
  },
  {
    code: "423610",
    title: "Electrical Equipment & Supplies",
    icon: "/images/Capabilities/section4/PAC04.png",
  },
  {
    code: "423450",
    title: "Medical Equipment & Supplies",
    icon: "/images/Capabilities/section4/PAC05.png",
  },
  {
    code: "423830",
    title: "Industrial Machinery & Equipment",
    icon: "/images/Capabilities/section4/PAC06.png",
  },
  {
    code: "423420",
    title: "Office Equipment & Supplies",
    icon: "/images/Capabilities/section4/PAC07.png",
    fullWidth: true,
  },
];
const Capabilities = () => {
  return (
    <main>
      {/* hero */}
      <section className='relative w-full overflow-hidden'>

        {/* Background Image */}
        <img
          src="/images/Capabilities/capabilitiesHero.png"
          alt="Procurement Hero"
          className='w-full h-[603px] object-cover'
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">

          <div className="max-w-[800px]">

            <h2 className='lg:text-[60px] md:text-[50px] text-[38px] leading-tight font-dm text-white font-bold'>
              Government Capabilities Statement
            </h2>

            <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 max-w-[650px] mx-auto'>
             A Trusted Partner for Federal, State, and Enterprise Technology Solutions
            </p>

          </div>

        </div>

      </section>
      {/* Company Overview */}
      <section className='mt-20 max-lg:p-4'>
        <div className="flex justify-center text-[48px] font-bold">

          <h2 className='text-[48px] font-bold text-[#0F172A]'>Company Overview</h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 max-w-[1200px] place-items-center mt-14 mx-auto">
          <div className="max-w-[584px]  flex flex-col ">
            <p className='mb-8 text-[#334155] text-[18px]'>Vaxterm LLC is a U.S.-based strategic solutions provider specializing in IT infrastructure, enterprise software, and global procurement services.</p>
            <img src="/images/Capabilities/section2/companyoverview.png" alt="" className='w-full h-[287px] mb-6' />
            {/* groupbox */}
            <div className="w-full p-10  bg-[#F0F3F7] border border-[#E2E8F0] rounded-2xl">
              <div className="flex gap-[12px] mb-10 items-center">
                <div className="rounded-xl size-[48px] flex justify-center items-center bg-[#3B91F7]">
                  <img src="/images/Capabilities/section2/companyInformation.png" alt="" />
                </div>

                <h3 className='text-[24px] text-black font-bold'>Company Information</h3>
              </div>
              <div className="relative">
                <ul>
                  {capalitiesoverview.map((item, index) => (
                    <li key={index}>
                      <div className="flex gap-[16px] mb-5">
                        <div className="size-[40px] border border-gray-300 rounded-lg flex justify-center items-center bg-white">

                          <img src={item.image} alt="" />
                        </div>
                        <div className="">
                          <h5 className='text-[14px] font-bold text-[#64748B]'>{item.name}</h5>
                          <p className='text-[18px] font-bold text-black'>{item.detail}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                  <button className='bg-[#0D7FFB] w-[150px] h-[49px] flex justify-center items-center text-white text-[16px] absolute bottom-0 right-0 rounded-lg shadow-gray-400 shadow-lg'>Download</button>
                </ul>

              </div>


            </div>
          </div>
          <div className="max-w-[584px]">

            {rightcapalitiesoverview.map((item, index) => (
              <div className="h-[266px] rounded-2xl px-11 py-6 shadow-lg mb-5 border border-[#E2E8F0]" key={index}>
                <div className="size-[64px] rounded-2xl mb-6 flex items-center justify-center" style={{ backgroundColor: item.color }}>
                  <img src={item.image} alt="" />
                </div>
                <h5 className='text-[20px] font-bold text-[#0F172A] mb-8'>{item.title}</h5>
                <p className='text-[16px]  text-[#475569]'>{item.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Our Core strength */}
      <section className='flex flex-col items-center mt-16'>
        <div className="flex flex-col items-center lg:px-0 px-6">

          <h3 className='text-[48px] text-[#0B1422] font-bold'>Our Core strength</h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-[1182px] h-auto mt-16">
          {services.map((item, index) => (
            <div className={`max-w-[356px] h-[295px] py-5 px-6 rounded-[21.29px] shadow-lg bg-white ${index === 1 ? 'lg:mt-20' : ''}`} key={index}>
              <div className="bg-[#3B91F7] rounded-lg size-[80px] flex items-center justify-center mb-4">
                <img src={item.image} alt="service" />
              </div>
              <h4 className='text-[26.62px] mt-7 font-semibold'>{item.title}</h4>
              <p className='text-[17.03px] mt-2 text-[#7A7A7A] max-w-[301px]'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Primary NAICS Codes */}
      <section className=" py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-[#0F172A] text-[36px] md:text-[48px] font-bold">
              Primary NAICS Codes
            </h2>
            <p className="text-[#475569] mt-5 text-base md:text-[18px] leading-8 max-w-2xl mx-auto">
              Vaxterm LLC operates under the following North American
              Industry Classification System (NAICS) codes:
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {naicsData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-[#ffffff] rounded-2xl  border-[2.25px] border-[#E5E7EB] p-6 flex items-start gap-5 min-h-[150px]
                ${item.fullWidth ? "md:col-span-2" : ""}`}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#3B82F6] flex items-center justify-center shrink-0">
                    <img src={item.icon} alt="icon" />
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-[#3B82F6] text-[27px] font-bold">
                      {item.code}
                    </h3>
                    <p className="text-[#111827] text-[18px] font-semibold mt-3 leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* last Section */}
      <section className='py-24 px-4 md:px-8 bg-[#1C3260] mt-8 mb-24'>
        <div className="flex flex-col items-center">

          <h5 className='text-4xl md:text-5xl font-bold text-white mb-6 text-center'>
            Ready to Partner with Vaxterm?
          </h5>

          <p className='text-[#DBEAFE] text-[16px] md:text-[20px] leading-7 max-w-[768px] text-center mb-8'>
            Let's discuss how we can support your mission-critical operations with
            compliant, reliable technology solutions.
          </p>

          <div className="flex md:flex-row flex-col w-full max-w-4xl justify-center gap-[18px]">

            <button className='flex items-center justify-center gap-3 text-[18px] w-full md:w-auto px-8 min-h-[64px] text-[#3D8EF4] bg-white rounded-xl'>
              <img
                src="/images/Capabilities/section5/pdf.png"
                alt=""
                className='w-[18px] h-[18px]'
              />
              Download Full Capability Statement
            </button>

            <button className='flex items-center justify-center gap-3 text-[18px] w-full md:w-auto px-14 min-h-[64px] bg-[#3D8EF4] text-white rounded-xl'>
              <img
                src="/images/Capabilities/section5/call.png"
                alt=""
                className='w-[18px] h-[18px]'
              />
              Schedule a Consultation
            </button>

          </div>
        </div>
      </section>

    </main>
  )
}

export default Capabilities
