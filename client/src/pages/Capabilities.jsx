import React from "react";
import { Link } from "react-router-dom";
import {
  capalitiesoverview,
  rightcapalitiesoverview,
  services,
} from "../Constant";

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
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/Capabilities/capabilitiesHero.png"
          alt="Capabilities Hero"
          className="w-full h-[430px] sm:h-[520px] lg:h-[603px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-[850px]">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[60px] leading-tight font-dm text-white font-bold">
              Government Capabilities Statement
            </h1>

            <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] font-dm text-white mt-5 sm:mt-6 max-w-[650px] mx-auto">
              A Trusted Partner for Federal, State, and Enterprise Technology
              Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="mt-14 sm:mt-20 px-4">
        <div className="text-center">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] leading-tight font-bold text-[#0F172A]">
            Company Overview
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 max-w-[1200px] place-items-center mt-10 sm:mt-14 mx-auto">
          {/* Left */}
          <div className="max-w-[584px] w-full flex flex-col">
            <p className="mb-6 sm:mb-8 text-[#334155] text-[15px] sm:text-[18px] leading-relaxed">
              Vaxterm LLC is a U.S.-based strategic solutions provider
              specializing in IT infrastructure, enterprise software, and global
              procurement services.
            </p>

            <img
              src="/images/Capabilities/section2/companyoverview.png"
              alt="Company Overview"
              className="w-full h-[220px] sm:h-[287px] mb-6 object-cover rounded-2xl"
            />

            <div className="w-full p-5 sm:p-8 lg:p-10 bg-[#F0F3F7] border border-[#E2E8F0] rounded-2xl">
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <div className="rounded-xl w-[44px] h-[44px] sm:size-[48px] flex-shrink-0 flex justify-center items-center bg-[#3B91F7]">
                  <img
                    src="/images/Capabilities/section2/companyInformation.png"
                    alt=""
                  />
                </div>

                <h3 className="text-[20px] sm:text-[24px] text-black font-bold">
                  Company Information
                </h3>
              </div>

              <div>
                <ul className="space-y-5">
                  {capalitiesoverview.map((item, index) => (
                    <li key={index}>
                      <div className="flex items-start gap-4">
                        <div className="w-[40px] h-[40px] flex-shrink-0 border border-gray-300 rounded-lg flex justify-center items-center bg-white">
                          <img src={item.image} alt="" />
                        </div>

                        <div className="min-w-0">
                          <h5 className="text-[13px] sm:text-[14px] font-bold text-[#64748B]">
                            {item.name}
                          </h5>

                          <p className="text-[15px] sm:text-[18px] leading-snug font-bold text-black break-words">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <button className="bg-[#0D7FFB] w-full sm:w-[150px] h-[49px] flex justify-center items-center text-white text-[16px] mt-8 rounded-lg shadow-gray-400 shadow-lg">
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="max-w-[584px] w-full">
            {rightcapalitiesoverview.map((item, index) => (
              <div
                className="min-h-[230px] lg:min-h-[266px] rounded-2xl px-5 sm:px-8 lg:px-11 py-6 shadow-lg mb-5 border border-[#E2E8F0]"
                key={index}
              >
                <div
                  className="w-[56px] h-[56px] sm:size-[64px] rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <img src={item.image} alt="" />
                </div>

                <h5 className="text-[18px] sm:text-[20px] font-bold text-[#0F172A] mb-4 sm:mb-8">
                  {item.title}
                </h5>

                <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Strength */}
      <section className="flex flex-col items-center mt-16 px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-[30px] sm:text-[40px] lg:text-[48px] leading-tight text-center text-[#0B1422] font-bold">
            Our Core Strength
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8 max-w-[1182px] w-full mt-10 lg:mt-16">
          {services.map((item, index) => (
            <div
              className={`w-full max-w-[356px] mx-auto min-h-[295px] py-5 px-6 rounded-[21.29px] shadow-lg bg-white ${
                index === 1 ? "lg:mt-20" : ""
              }`}
              key={index}
            >
              <div className="bg-[#3B91F7] rounded-lg w-[72px] h-[72px] sm:size-[80px] flex items-center justify-center mb-4">
                <img src={item.image} alt="service" />
              </div>

              <h4 className="text-[22px] sm:text-[26.62px] leading-tight mt-7 font-semibold">
                {item.title}
              </h4>

              <p className="text-[15px] sm:text-[17.03px] leading-relaxed mt-2 text-[#7A7A7A] max-w-[301px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Primary NAICS Codes */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-[#0F172A] text-[30px] sm:text-[36px] md:text-[48px] leading-tight font-bold">
              Primary NAICS Codes
            </h2>

            <p className="text-[#475569] mt-4 sm:mt-5 text-[15px] md:text-[18px] leading-7 sm:leading-8 max-w-2xl mx-auto">
              Vaxterm LLC operates under the following North American Industry
              Classification System (NAICS) codes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {naicsData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-[2.25px] border-[#E5E7EB] p-5 sm:p-6 flex items-start gap-4 sm:gap-5 min-h-[140px] ${
                  item.fullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt="icon" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[#3B82F6] text-[22px] sm:text-[27px] font-bold break-words">
                    {item.code}
                  </h3>

                  <p className="text-[#111827] text-[16px] sm:text-[18px] font-semibold mt-2 sm:mt-3 leading-snug break-words">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-8 bg-[#1C3260] mt-8 mb-16 lg:mb-24">
        <div className="flex flex-col items-center">
          <h5 className="text-[30px] sm:text-4xl md:text-5xl leading-tight font-bold text-white mb-6 text-center">
            Ready to Partner with Vaxterm?
          </h5>

          <p className="text-[#DBEAFE] text-[15px] md:text-[20px] leading-7 max-w-[768px] text-center mb-8">
            Let's discuss how we can support your mission-critical operations
            with compliant, reliable technology solutions.
          </p>

          <div className="flex md:flex-row flex-col w-full max-w-4xl justify-center gap-[18px]">
            <Link
              to="/capabilities/download"
              className="flex items-center justify-center gap-3 text-[15px] sm:text-[18px] text-center w-full md:w-auto px-5 sm:px-8 min-h-[60px] sm:min-h-[64px] text-[#3D8EF4] bg-white rounded-xl"
            >
              <img
                src="/images/Capabilities/section5/pdf.png"
                alt=""
                className="w-[18px] h-[18px] flex-shrink-0"
              />
              <span>Download Full Capability Statement</span>
            </Link>

            <button className="flex items-center justify-center gap-3 text-[15px] sm:text-[18px] text-center w-full md:w-auto px-5 sm:px-14 min-h-[60px] sm:min-h-[64px] bg-[#3D8EF4] text-white rounded-xl">
              <img
                src="/images/Capabilities/section5/call.png"
                alt=""
                className="w-[18px] h-[18px] flex-shrink-0"
              />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Capabilities;