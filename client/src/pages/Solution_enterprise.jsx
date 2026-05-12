import React from 'react'
import {faqs,services,solutions} from '../Constant/solution_enterprise'
const Solution_enterprise = () => {
  return (
    <main>
      <section>
        <img src="/images/Solutions/subpages/enterprise/subsolutionhero.png" alt="" className='w-full h-[636px] object-cover' />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 h-[636px]"></div>
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] text-center px-4 w-[70%] max-xl:w-full ">
          <h2 className='lg:text-[60px] md:text-[40px] text-[40px] font-dm text-white font-bold'>Enterprise Systems & Business Management Platforms</h2>
          </div>
      </section>
      <section className="bg-[#F7F7F7] min-h-screen py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
        {/* LEFT CONTENT */}
        <div>
          {/* HERO IMAGE */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/Solutions/subpages/enterprise/enterpriseSytem.png"
              alt="Enterprise"
              className="w-full h-[240px] sm:h-[320px] lg:h-[420px] object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-[34px] font-bold text-[#040B2F] font-dm leading-tight">
              Comprehensive Enterprise System Solutions
            </h2>

            <p className="font-dm text-[#8a8787] text-[20px] md:text-base leading-7 mt-5">
              Modern organizations require reliable systems that integrate
              business functions into a unified digital environment. Vaxterm LLC
              provides customized enterprise systems that bring together data,
              workflows, and operational tools into a single centralized
              platform.
            </p>

            <p className="font-dm text-[#8a8787] text-[20px] md:text-base leading-7 mt-4">
              Our solutions are designed to enhance productivity, reduce
              operational complexity, and improve data visibility across
              departments. By integrating CRM, ERP, and project management tools
              into cohesive platforms, we enable organizations to operate with
              greater efficiency and accuracy.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-sm font-semibold text-gray-500">
                  {item.id}
                </div>

                <img className="size-[50px]" src={item.icons} alt={item.title}/>
                 

                <h3 className="text-[28px] font-medium text-[##040B2F] mt-5">
                  {item.title}
                </h3>

                <p className="text-[#444444] leading-6 text-[16px] mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BENEFITS */}
          <div className="mt-14">
            <h3 className="text-2xl md:text-[34px] font-bold text-[#1E2A4A] font-dm">
              Key Benefits of Our Enterprise Systems
            </h3>

            <p className="font-dm text-[#8a8787]  text-[20px] md:text-base leading-7 mt-4">
              Vaxterm LLC ensures that enterprise systems integrate smoothly
              with existing infrastructure and third-party platforms. Our
              integration capabilities allow organizations to maintain
              continuity while upgrading systems for improved performance.
            </p>

            <ul className="space-y-4 mt-8">
              {[
                "Automate workflows and reduce manual processes to improve productivity.",
                "Access critical business information from a single unified system.",
                "Use real-time analytics to support informed decision-making.",
                "Expand system capabilities as organizational requirements grow.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[#8a8787] ">
                  <img src='/images/Solutions/subpages/enterprise/bluetick.png' className=" mt-1 size-[16px]"/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            <img
              src="/images/Solutions/subpages/enterprise/keybenefit01.png"
              alt="Business"
              className="rounded-2xl w-full h-[220px] object-cover"
            />

            <img
              src="/images/Solutions/subpages/enterprise/keybenefit02.png"
              alt="Team"
              className="rounded-2xl w-full h-[220px] object-cover"
            />
          </div>

          {/* FAQ */}
          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden group"
                open={index === 0}
              >
                <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between text-[#1E2A4A] font-semibold">
                  {faq.question}

                  <div className="w-8 h-8 rounded-full bg-[#EEF4FF] text-[#0D7FFB] flex items-center justify-center text-lg">
                    +
                  </div>
                </summary>

                <div className="px-6 pb-6 text-gray-600 leading-7 text-sm md:text-base">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="space-y-8">
          {/* SOLUTIONS */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 top-6">
            <h4 className="text-[24px]  text-[#040B2F] mb-6">
              📌 All Solutions
            </h4>

            <div className="space-y-4">
              {solutions.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center justify-between rounded-full px-5 py-4 text-[16px] font-medium transition-all duration-300 ${
                    item === "Enterprise Systems"
                      ? "bg-[#0D7FFB] text-white"
                      : "bg-white border border-[#DCDCDC] hover:bg-[#E8F1FF] text-[#040B2F]"
                  }`}
                >
                  {item}
                  <span>→</span>
                </button>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200">
            <h4 className="text-[24px] text-[#1E2A4A] mb-6">
              📌 Contact Us
            </h4>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-12 rounded-xl border border-[#DCDCDC] px-4 outline-none focus:border-[#0D7FFB]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-[#0D7FFB]"
              />

              <input
                type="text"
                placeholder="Phone"
                className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-[#0D7FFB]"
              />

              <select className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-[#0D7FFB] text-gray-500">
                <option>Select Service</option>
                <option>CRM Solution</option>
                <option>ERP Solution</option>
                <option>Project Management</option>
              </select>

              <textarea
                rows="5"
                placeholder="Type Your Message"
                className="w-full rounded-xl border border-gray-200 px-4 py-4 outline-none focus:border-[#0D7FFB] resize-none"
              ></textarea>

              <button className="max-w-[220px] bg-[#3D8EF4] hover:bg-blue-600 text-white h-12 rounded-lg px-5 font-medium text-[16px] transition-all duration-300">
                Submit Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Solution_enterprise
