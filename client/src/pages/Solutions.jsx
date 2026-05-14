import React, { useState, useRef } from "react";
import {
  digitaltransformation,
  whyChoose,
  steps,
  testimonials,
  faqData,
  services,
} from "../Constant/solution";
import { Plus, Minus, Check } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(services[0]);
  const [openIndex, setOpenIndex] = useState(0);
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollTo = (index) => {
    const container = scrollRef.current;

    if (!container) return;

    const card = container.children[index];

    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }

    setActiveDot(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;

    if (!container || !container.children[0]) return;

    const cardWidth = container.children[0].offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);

    setActiveDot(index);
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative">
        <img
          src="/images/Solutions/solutionHero.png"
          alt=""
          className="w-full h-[420px] sm:h-[520px] lg:h-[636px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

        <div className="absolute z-20 top-1/2 left-1/2 w-full max-w-[950px] -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[60px] leading-tight font-dm text-white font-bold">
            Solutions
          </h2>

          <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] font-dm text-white mt-5 sm:mt-6 mx-auto max-w-[850px]">
            Empowering government agencies and enterprise organizations with
            scalable cloud-based software solutions designed for efficiency,
            automation, and long-term performance.
          </p>
        </div>
      </section>

      {/* Digital Transformation */}
      <section className="flex flex-col justify-center items-center mt-16 lg:mt-24 px-4">
        <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] leading-tight text-[#011505] font-bold text-center">
          Digital Transformation Through <br className="hidden lg:block" />
          Advanced SaaS
        </h2>

        {/* Tabs */}
        <div className="w-full max-w-[1100px] rounded-[28px] sm:rounded-[58px] mt-8 sm:mt-14 flex justify-center px-3 py-3 gap-3 shadow-lg flex-wrap">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service)}
              className={`${
                activeTab.id === service.id
                  ? "bg-[#3D8EF4] text-white"
                  : "bg-white text-black"
              } text-[15px] sm:text-[18px] lg:text-[24px] font-semibold font-dm rounded-full px-4 sm:px-6 lg:px-7 py-3 sm:py-4 lg:py-5 transition`}
            >
              {service.Title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-[1340px] w-full mt-12 lg:mt-20">
          <div className="w-full">
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] leading-tight font-medium mb-5">
              {activeTab.Title}
            </h2>

            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-500 mb-8 leading-relaxed">
              {activeTab.description}
            </p>

            <div className="space-y-4 mb-8">
              {activeTab.list.map((point, index) => (
                <div className="flex items-start gap-3 sm:gap-4" key={index}>
                  <div className="bg-[#3D8EF4] rounded-full flex-shrink-0 flex items-center justify-center w-[30px] h-[30px] sm:w-[39px] sm:h-[39px] mt-1">
                    <Check size={20} className="text-white" />
                  </div>

                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-black leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/solutions/enterprise"
                className="bg-[#0D7FFB] hover:bg-blue-600 px-7 py-4 rounded-lg shadow-gray-400 shadow-lg text-white text-[16px] font-medium text-center"
              >
                Learn More
              </Link>

              <button className="bg-white hover:bg-gray-200 px-7 py-4 rounded-lg shadow-gray-400 shadow-lg text-black text-[16px] font-medium">
                Start Demo
              </button>
            </div>
          </div>

          <div className="w-full">
            <img
              src={activeTab.image}
              alt={activeTab.Title}
              className="w-full h-[280px] sm:h-[400px] lg:h-[542px] object-cover rounded-[15px]"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Vaxterm Software Solutions */}
      <section className="flex flex-col items-center px-4">
        <h2 className="mt-16 text-[30px] sm:text-[40px] lg:text-[48px] leading-tight font-bold font-dm text-[#011505] text-center">
          Why Choose Vaxterm <br className="hidden lg:block" />
          Software Solutions
        </h2>

        <div className="max-w-[1259px] w-full mx-auto py-10 sm:py-14">
          <div className="grid lg:grid-cols-[491px_1fr] gap-6 items-stretch">
            <div className="w-full">
              <img
                src="/images/Solutions/section3/choseVaxtern.png"
                alt="Business Meeting"
                className="w-full h-[300px] sm:h-[430px] lg:h-full min-h-[300px] object-cover rounded-[20px]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-white w-full rounded-[20px] p-5 sm:p-8 border border-gray-400 min-h-[240px] lg:min-h-[271px]"
                >
                  <div className="mb-5 sm:mb-6">
                    <img src={item.image} alt="" className="w-12 h-12" />
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#111827] mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] leading-[26px] sm:leading-[32px] text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Implementation Approach */}
      <section className="relative w-full overflow-hidden bg-[#1C3260] py-16 lg:py-24">
        <img
          src="/images/Solutions/section4/bgImage.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
        />

        <div className="relative z-10 max-w-[1270px] mx-auto px-4">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-white text-[32px] sm:text-[48px] lg:text-[64px] font-bold leading-tight">
              Our Implementation <br className="hidden sm:block" />
              Approach
            </h2>
          </div>

          <div className="grid lg:grid-cols-[520px_1fr] xl:grid-cols-[560px_1fr] gap-8 lg:gap-10 items-start">
            <div className="w-full">
              <img
                src="/images/Solutions/section4/OIA.png"
                alt="Implementation Approach"
                className="w-full h-[320px] sm:h-[500px] lg:h-[689px] object-cover rounded-3xl"
              />
            </div>

            <div className="flex flex-col gap-5">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="bg-[#556992]/80 backdrop-blur-sm rounded-[12px] p-5 sm:p-7 flex flex-col sm:flex-row gap-4 sm:gap-8"
                >
                  <div className="flex-shrink-0">
                    <p className="text-gray-300/50 text-sm sm:text-[16px] uppercase tracking-wide mb-2">
                      Step
                    </p>

                    <h3 className="text-white text-[44px] sm:text-[60px] lg:text-[72px] font-bold leading-none">
                      {step.id}
                    </h3>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-white text-[22px] sm:text-[26px] lg:text-[20px] font-semibold mb-3 leading-tight">
                      {step.title}
                    </h4>

                    <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] text-center mt-16 mb-10 lg:mb-20 font-bold leading-tight px-4">
          What Clients Say Our <br className="hidden sm:block" />
          Services
        </h3>

        <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[88%] sm:min-w-[70%] md:min-w-[45%] lg:min-w-[39%] snap-center bg-[#F4F7F9] rounded-[24px] p-5 sm:p-8 md:p-10 relative flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full object-cover"
                  />

                  <img
                    src="/images/Home/Section7/quote_Icon.png"
                    alt=""
                    className="w-[34px] h-[28px] sm:w-[42px] sm:h-[34px]"
                  />
                </div>

                <p className="text-[#0B1422] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-relaxed mb-10">
                  "{item.text}"
                </p>

                <div>
                  <h4 className="text-[16px] font-bold leading-[26px] text-[#0B1422] mb-2">
                    {item.name}
                  </h4>

                  <div className="flex gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-6 flex-wrap">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`transition-all duration-300 rounded-full border-2 ${
                  activeDot === i
                    ? "w-4 h-4 bg-[#3B82F6] border-[#3B82F6]"
                    : "w-3 h-3 bg-white border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 mb-20 px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-[1278px] items-center mx-auto">
          <div className="relative">
            <img
              src="/images/Home/Section8/Questions.png"
              alt=""
              className="w-full max-w-full h-auto object-cover rounded-xl"
            />

            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 lg:right-[74px] bg-black rounded-[20px] w-[145px] sm:w-[180px] md:w-[220px] p-4 sm:p-6">
              <p className="text-[28px] sm:text-[40px] text-white font-semibold">
                10+
              </p>

              <p className="text-[15px] sm:text-[20px] text-white">
                Years Of
                <br /> Experience
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`transition-all w-full duration-300 rounded-[15px] overflow-hidden border border-[#8081874F] ${
                    isOpen ? "bg-[#0B1422]" : "bg-[#F8F9FA]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left"
                  >
                    <div
                      className={`flex-shrink-0 w-[38px] h-[38px] sm:size-[42px] rounded-lg flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[#3B82F6] text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </div>

                    <span
                      className={`text-[15px] sm:text-lg font-semibold leading-snug ${
                        isOpen ? "text-white" : "text-black"
                      }`}
                    >
                      {item.question}
                    </span>
                  </button>

                  <div
                    className={`pl-[65px] pr-4 sm:pl-20 sm:pr-6 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[260px] pb-6 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-400 text-[14px] sm:text-[16px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Outlet />
    </main>
  );
};

export default Solutions;