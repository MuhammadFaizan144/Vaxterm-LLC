import React from 'react'
const ContactInfo = [
  {
    image:"/images/Contact/section2/mailUs.png",
    title:"Mail us 24/7",
    details:"no-reply@pbminfo.com\nno-reply@pbmadmin.com"
  },
  {
    image:"/images/Contact/section2/callUs.png",
    title:"Call us 24/7",
    details:"Phone : (+55) 654 - 545 - 5418\nMobile : (+01) 654 - 545 - 1235"
  },
  {
    image:"/images/Contact/section2/ourlocation.png",
    title:"Our Locations",
    details:"4821 Ride Top, Anch St, Alaska\n997998, USA main city."
  },
]
const Contact = () => {
  return (
    <main>
      <section>
        <img src="/images/Contact/contactHero.png" alt="" className='w-full h-[636px] object-cover'/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[636px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Contact Us</h2>
          <p className='lg:text-[20px] md:text-[15px] text-[16px] font-dm text-white max-w-[500px]'>Connect with our team to discuss your technology, procurement, or enterprise infrastructure requirements.</p>
        </div>
      </section>
      <section className='max-w-[1327px] h-auto mx-auto p-4'>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 mt-10">
          {ContactInfo.map((item,index)=>(
            <div key={index} className="flex flex-col gap-6 lg:gap-8 py-10 shadow-md rounded-[30px] p-8">
              <img src={item.image} alt="" className='size-[30px]'/>
              <div className="flex flex-col gap-16 text-left">
                <h4 className='lg:text-[26px] text-[20px] font-dm text-[#031B4E] mb-2'>{item.title}</h4>
                <p className='lg:text-[16px] text-[14px] font-dm text-[#6E778C] whitespace-pre'>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Contact
