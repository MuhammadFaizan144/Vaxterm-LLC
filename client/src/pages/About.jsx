import React from 'react'

const About = () => {
  return (
    <main>
      <section className='relative'>
        <img src="/images/AboutUs/AboutHero.png" alt="" className='w-full h-[603px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 "></div>
        <div className="z-20 absolute flex justify-center flex-col text-center top-1/2 left-1/2 -translate-x-1/2 ">
          <h1 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>About Vaxterm LLC</h1>
          <p className='lg:text-[20px] md:text-[15px] text-[16px] font-dm text-white'>Delivering Reliable Technology, Strategic Procurement, and Government Compliant Solutions.</p>
        </div>
      </section>
      <section className='max-w-[1218px] mx-auto mt-16 lg:px-0 px-4 mb-8'>
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
    </main>
  )
}

export default About
