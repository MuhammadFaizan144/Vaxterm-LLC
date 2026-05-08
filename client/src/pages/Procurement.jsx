import React from 'react'
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
const Procurement = () => {
  return (
    <main>
      <section>
        <img src="/images/Procurement/procurementHero.png" alt="" className='w-full h-[603px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[603px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Contact Us</h2>
          <p className='lg:text-[20px] md:text-[15px] text-[16px] font-dm text-white lg:max-w-[500px] w-[400px]'>Connect with our team to discuss your technology, procurement, or enterprise infrastructure requirements.</p>
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
    </main>
  )
}

export default Procurement
