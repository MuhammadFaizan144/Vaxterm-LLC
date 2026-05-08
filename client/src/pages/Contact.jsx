import React from 'react'
const ContactInfo = [
  {
    image: "/images/Contact/section2/mailUs.png",
    title: "Mail us 24/7",
    details: "no-reply@pbminfo.com\nno-reply@pbmadmin.com"
  },
  {
    image: "/images/Contact/section2/callUs.png",
    title: "Call us 24/7",
    details: "Phone : (+55) 654 - 545 - 5418\nMobile : (+01) 654 - 545 - 1235"
  },
  {
    image: "/images/Contact/section2/ourlocation.png",
    title: "Our Locations",
    details: "4821 Ride Top, Anch St, Alaska\n997998, USA main city."
  },
]
const Contact = () => {
  return (
    <main>
      <section>
        <img src="/images/Contact/contactHero.png" alt="" className='w-full h-[636px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[636px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Contact Us</h2>
          <p className='lg:text-[20px] md:text-[18px] text-[16px] leading-[30px] font-dm text-white mt-6 mx-auto'>Connect with our team to discuss your technology,<br/> procurement, or enterprise infrastructure <br/> requirements.</p>
        </div>
      </section>
      <section className='max-w-[1327px] h-auto mx-auto p-4'>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 mt-10">
          {ContactInfo.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 lg:gap-8 py-10 shadow-md rounded-[30px] p-8">
              <img src={item.image} alt="" className='size-[30px]' />
              <div className="flex flex-col gap-16 text-left">
                <h4 className='lg:text-[26px] text-[20px] font-dm text-[#031B4E] mb-2'>{item.title}</h4>
                <p className='lg:text-[16px] text-[14px] font-dm text-[#6E778C] whitespace-pre'>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* contact Form */}
      <section className='max-w-[1291px] mx-auto '>
        <div className="grid lg:grid-cols-2 ">
          <div className="w-full md:py-0 max-lg:py-9 px-10">
            <img src="/images/Contact/sendMessage.png" alt="" className='w-full object-cover max-xl:h-[400px] max-xl:rounded-[50px]' />
          </div>
          <div className="w-full border rounded-tr-[30px] rounded-br-[30px] py-9 px-10">
            <h3 className='text-[48px] font-medium font-dm text-[#031B4E]'>Send Us a Message</h3>
            <p className='text-[#444444] mt-5'>Please complete the form below, and our team will<br /> respond to your inquiry promptly.</p>
            <form className="flex flex-col mt-10">
              <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 gap-9 w-full mb-10">
                <input type="text" placeholder='Your Name *' className='h-[55px] p-2 text-[12px] text-[#031B4E99] border-b border-[#031B4ECC]' />
                <input type="text" placeholder='Your Email *' className='h-[55px] p-2 text-[12px] text-[#031B4E99] border-b border-[#031B4ECC]' />
                <input type="text" placeholder='Your Phone *' className='h-[55px] p-2 text-[12px] text-[#031B4E99] border-b border-[#031B4ECC]' />
                <input type="text" placeholder='Subject' className='h-[55px]  p-2 text-[12px] text-[#031B4E99] border-b border-[#031B4ECC]' />
              </div>
              <textarea type="text" placeholder='Message' className='h-[100px] p-2 text-[12px] text-[#031B4E99] border-b border-[#031B4ECC] ' />
              <button className='bg-[#0D7FFB] mt-10 rounded-[8px] text-white md:w-[149px] h-[49px] w-full' type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      {/* location */}
      <section className='my-20'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59870.785279543554!2d-0.08617985459588591!3d51.49007234592233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2s!4v1778240413350!5m2!1sen!2s" width="100%" height="578" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </main>
  )
}

export default Contact
