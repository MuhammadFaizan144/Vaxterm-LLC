import React from "react";

const ContactInfo = [
  {
    image: "/images/Contact/section2/mailUs.png",
    title: "Mail us 24/7",
    details: "no-reply@pbminfo.com\nno-reply@pbmadmin.com",
  },
  {
    image: "/images/Contact/section2/callUs.png",
    title: "Call us 24/7",
    details: "Phone : (+55) 654 - 545 - 5418\nMobile : (+01) 654 - 545 - 1235",
  },
  {
    image: "/images/Contact/section2/ourlocation.png",
    title: "Our Locations",
    details: "4821 Ride Top, Anch St, Alaska\n997998, USA main city.",
  },
];

const Contact = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative">
        <img
          src="/images/Contact/contactHero.png"
          alt="Contact Hero"
          className="w-full h-[420px] sm:h-[520px] lg:h-[636px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

        <div className="absolute z-20 top-1/2 left-1/2 w-full max-w-[850px] -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[60px] leading-tight font-dm text-white font-bold">
            Contact Us
          </h2>

          <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] font-dm text-white mt-5 sm:mt-6 mx-auto max-w-[720px]">
            Connect with our team to discuss your technology, procurement, or
            enterprise infrastructure requirements.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-[1327px] mx-auto px-4 sm:px-6 lg:px-4 py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-10">
          {ContactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 bg-white py-8 sm:py-10 shadow-md rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 min-h-[240px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[30px] h-[30px] object-contain"
              />

              <div className="flex flex-col gap-5 text-left">
                <h4 className="text-[20px] sm:text-[22px] lg:text-[26px] font-dm text-[#031B4E]">
                  {item.title}
                </h4>

                <p className="text-[14px] sm:text-[15px] lg:text-[16px] leading-[26px] font-dm text-[#6E778C] whitespace-pre-line break-words">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-[1291px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 rounded-[30px] overflow-hidden border border-gray-200">
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/images/Contact/sendMessage.png"
              alt="Send Message"
              className="w-full h-[280px] sm:h-[400px] lg:h-full min-h-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="w-full bg-white py-8 sm:py-10 px-4 sm:px-8 lg:px-10">
            <h3 className="text-[30px] sm:text-[40px] lg:text-[48px] leading-tight font-medium font-dm text-[#031B4E]">
              Send Us a Message
            </h3>

            <p className="text-[#444444] text-[15px] sm:text-[16px] leading-[26px] mt-5">
              Please complete the form below, and our team will respond to your
              inquiry promptly.
            </p>

            <form className="flex flex-col mt-8 sm:mt-10">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 sm:gap-9 w-full mb-8 sm:mb-10">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full h-[55px] p-2 text-[13px] text-[#031B4E99] border-b border-[#031B4ECC] outline-none focus:border-[#0D7FFB]"
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full h-[55px] p-2 text-[13px] text-[#031B4E99] border-b border-[#031B4ECC] outline-none focus:border-[#0D7FFB]"
                />

                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full h-[55px] p-2 text-[13px] text-[#031B4E99] border-b border-[#031B4ECC] outline-none focus:border-[#0D7FFB]"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-[55px] p-2 text-[13px] text-[#031B4E99] border-b border-[#031B4ECC] outline-none focus:border-[#0D7FFB]"
                />
              </div>

              <textarea
                placeholder="Message"
                className="w-full h-[120px] resize-none p-2 text-[13px] text-[#031B4E99] border-b border-[#031B4ECC] outline-none focus:border-[#0D7FFB]"
              />

              <button
                className="bg-[#0D7FFB] hover:bg-blue-600 transition mt-8 sm:mt-10 rounded-[8px] text-white md:w-[149px] h-[49px] w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="my-14 sm:my-20 px-4">
        <div className="max-w-[1327px] mx-auto rounded-[24px] overflow-hidden">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59870.785279543554!2d-0.08617985459588591!3d51.49007234592233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2s!4v1778240413350!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[320px] sm:h-[420px] lg:h-[578px] border-0"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;