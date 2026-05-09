import React from 'react'
import { capalitiesoverview, rightcapalitiesoverview } from '../Constant'
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
              Procurement Services
            </h2>

            <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 max-w-[650px] mx-auto'>
              Reliable procurement and logistics solutions designed to <br /> deliver specialized equipment and essential supplies
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
                  <button className='bg-[#0D7FFB] w-[150px] h-[49px] flex justify-center items-center text-white text-[16px] absolute bottom-0 right-0'>Download</button>
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
    </main>
  )
}

export default Capabilities
