import React from 'react'
import { globalOperation } from '../Constant/hardware'
const Hardware = () => {
  return (
    <main>
      <section>
        <img src="/images/Hardware/hardwarehero.png" alt="" className='w-full h-[636px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[636px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4 max-xl:w-full ">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Contact Us</h2>
          <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 mx-auto max-lg:w-[100%]'>Connect with our team to discuss your technology,<br className='max-xl:hidden'/> procurement, or enterprise infrastructure <br className='max-xl:hidden'/> requirements.</p>
        </div>
      </section>
      <section className='px-4 my-24'>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center">
          <div className="lg:max-w-[707px] w-full">
            <img src="/images/Hardware/globalOperation.png" alt="" />
          </div>
          <div className="lg:max-w-[502px] w-full">
            <div className="flex gap-2 items-center mb-4">
              <img src="/images/Hardware/iconTitle.png" alt="" className='w-[26px] h-[13px]'/>
              <h5 className='font-dm text-[16px] text-[#011505] uppercase'>Global Operations</h5>
            </div>
            <h2 className="font-dm text-[40px] font-medium text-[#000000] mb-4">Mission Critical Hardware for Global Operations</h2>
            <p className='font-dm text-[16px] text-[#011505] mt-4'>Vaxterm LLC delivers the physical backbone required to support complex digital and industrial ecosystems. We specialize in the procurement and supply of high performance IT hardware and industrial grade electrical infrastructure tailored for demanding environments</p>
            <div className="mt-4">
              <ul>
                {globalOperation.map((item,index)=>(
                  <li key={index} className={`flex items-center gap-[8px] rounded-[42px] bg-[#3D92F7] max-w-[373px] px-[10px] min-h-[32px] mb-4 ${item.side?"lg:ml-5":""} `}>
                    <img src={item.icon} alt=""className='size-[16px]'/>
                    <p className='text-white '>{item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Hardware
