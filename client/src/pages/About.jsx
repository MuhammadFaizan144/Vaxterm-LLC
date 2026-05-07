import React from 'react'

const About = () => {
  return (
    <main>
      <section className='relative'>
        <img src="/images/AboutUs/AboutHero.png" alt="" className='w-full h-[603px] object-cover'/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 "></div>
        <div className="z-20 absolute flex justify-center flex-col text-center top-1/2 left-1/2 -translate-x-1/2 ">
          <h1 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>About Vaxterm LLC</h1>
          <p className='lg:text-[20px] md:text-[15px] text-[16px] font-dm text-white'>Delivering Reliable Technology, Strategic Procurement, and Government Compliant Solutions.</p>
        </div>
      </section>
    </main>
  )
}

export default About
