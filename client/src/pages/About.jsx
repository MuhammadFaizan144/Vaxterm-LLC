import React, { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import { quality,staticData,icons, strategicSourcing,features,testimonials,faqData} from "../Constant/about";


const About = () => {
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
          src="/images/AboutUs/section1.png"
          alt=""
          className="w-full h-[420px] sm:h-[520px] lg:h-[603px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

        <div className="z-20 absolute flex justify-center flex-col text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <h1 className="text-[clamp(32px,7vw,60px)] leading-tight font-dm text-white font-bold">
            About Vaxterm LLC
          </h1>

          <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] font-dm text-white mt-5 max-w-[650px] mx-auto">
            Delivering Reliable Technology, Strategic Procurement, and
            Government Compliant Solutions.
          </p>
        </div>
      </section>

      {/* Bridging Technology */}
      <section className="max-w-[1218px] mx-auto mt-14 lg:mt-16 px-4">
        <div>
          <h2 className="text-[clamp(30px,6vw,48px)] leading-tight text-[#011505] font-bold">
            Bridging Technology and Operations
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#011505] max-w-[857px] mt-5 sm:mt-7 leading-relaxed">
            Vaxterm LLC combines advanced procurement capabilities with a strong
            commitment to quality and reliability. Our global sourcing network
            and direct manufacturer partnerships enable us to procure specialized
            equipment, industrial systems, and critical technology assets across
            multiple industries with precision and efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2.5fr_1fr] grid-cols-1 gap-6 lg:gap-8 mt-10 items-stretch">
          <div className="overflow-hidden rounded-[25px] shadow-lg">
            <img
              src="/images/AboutUs/section2.png"
              alt="About Us"
              className="w-full h-[280px] sm:h-[420px] lg:h-full object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-5 lg:gap-8 justify-between">
            <div className="bg-[#3D8EF4] rounded-[25px] p-5 w-full shadow-lg">
              <h4 className="text-[20px] lg:text-[25.37px] text-white font-semibold mb-3">
                Our Identity
              </h4>

              <p className="text-[14px] lg:text-[13.84px] leading-6 text-white/90">
                Vaxterm LLC is an Illinois-based strategic solutions provider
                dedicated to meeting the evolving needs of government agencies
                and global enterprises. Our mission is to simplify complex supply
                chains.
              </p>
            </div>

            <div className="bg-black rounded-[25px] p-5 sm:p-6 w-full shadow-lg">
              <h4 className="text-[20px] lg:text-[25.37px] text-white font-semibold mb-3">
                Our Commitment
              </h4>

              <p className="text-[14px] lg:text-[13.84px] leading-6 text-white/90">
                At Vaxterm LLC, we believe that successful partnerships are
                built on trust, performance, and accountability. Our operations
                are guided by a "Quality First" philosophy, ensuring that every
                hardware component and software solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Cards */}
      <section className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 max-w-[1218px] mx-auto">
          {quality.map((item, index) => (
            <div
              className="flex flex-col w-full min-h-[230px] lg:min-h-[255px] shadow-lg p-6 sm:pl-7 sm:py-9 rounded-[21.29px]"
              key={index}
            >
              <div className="bg-gradient-to-b from-[#1F90D7] to-[#1F90D7]/0 rounded-lg w-[75px] h-[68px] flex items-center justify-center mb-7 sm:mb-9">
                <img src={item.image} alt="" />
              </div>

              <p className="text-[18px] sm:text-[20px] text-[#011505] font-semibold">
                {item.desciption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16 mb-16 lg:mb-20 px-4">
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 mx-auto max-w-[1171px]  rounded-2xl overflow-hidden">
          {staticData.map((item, index) => (
            <div
              className={`flex flex-col justify-center items-center py-8 lg:py-12 border-[#3F91F6]/40 ${
                index !== 0 ? "lg:border-l" : ""
              } ${index > 0 ? "max-lg:border-t min-[420px]:max-lg:border-t-0" : ""} ${
                index % 2 === 1 ? "min-[420px]:max-lg:border-l" : ""
              } ${index > 1 ? "min-[420px]:max-lg:border-t" : ""}`}
              key={index}
            >
              <p className="text-[38px] sm:text-[48px] text-[#000000] font-bold">
                {item.number}
              </p>

              <p className="text-[16px] sm:text-[18px] text-[#6E7070] text-center">
                {item.desciption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Specialty */}
      <section className="mb-20 lg:mb-24 px-4">
        <div className="bg-white text-black flex items-center justify-center font-sans">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-24 items-center">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src="/images/AboutUs/section5/iconTitle.png" alt="" />
                <p className="text-[16px] sm:text-[18px] font-medium">
                  CORE SPECIALTY
                </p>
              </div>

              <h2 className="text-[clamp(30px,6vw,48px)] leading-tight font-bold max-w-[502px]">
                Digital Transformation & IT Solutions
              </h2>

              <div className="max-w-md">
                <p className="text-[#011505] text-[15px] sm:text-[16px] leading-[24px]">
                  At the core of our operations, Vaxterm LLC is a
                  technology-driven organization focused on delivering
                  high-performance IT ecosystems
                </p>
              </div>

              <div className="flex flex-col gap-4 w-full">
                {icons.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center rounded-xl bg-[#EEF1FF] size-[48px] sm:size-[52px]">
                      <img
                        src={item.icon}
                        alt=""
                        className="size-[32px] sm:size-[36px]"
                      />
                    </div>

                    <p className="text-[16px] sm:text-[20px] font-semibold">
                      {item.desciption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative max-w-[560px] w-full mx-auto">
              <div className="rounded-[2rem] overflow-hidden">
                <img
                  src="/images/AboutUs/section5/core_specialty.png"
                  alt="Team working on laptops"
                  className="w-full h-[320px] sm:h-[460px] object-cover opacity-90"
                />
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-6 lg:-right-10 bg-[#3D8EF4] rounded-2xl p-5 sm:p-8 w-[190px] sm:w-64 shadow-2xl">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                    <img src="/images/AboutUs/section5/80.png" alt="" />
                    <span className="absolute text-xl sm:text-2xl font-bold text-white">
                      80%
                    </span>
                  </div>

                  <p className="text-white text-[14px] sm:text-[16px] font-medium leading-tight">
                    Reliable IT. Real-Time Results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full flex items-center justify-center bg-[#031B4E] mt-10">
        <div className="max-w-[1434px] w-full px-4 sm:px-6 lg:px-16 py-14 lg:py-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="relative w-full lg:w-[50%]">
            <img
              src="/images/Home/Section6/leader&expertise.png"
              alt="Leadership team"
              className="w-full max-w-[628px] mx-auto h-[320px] sm:h-[450px] lg:h-[550px] object-cover object-top"
            />

            <div className="absolute bottom-6 right-6 sm:right-20 lg:right-28 text-center">
              <p className="text-white text-[30px] sm:text-[45px] font-extrabold">
                20+
              </p>

              <p className="text-blue-200 text-[15px] sm:text-[20px] leading-tight">
                Years <br /> Experienced
              </p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-white text-[clamp(28px,5vw,42px)] leading-tight font-semibold mb-8 lg:mb-12 max-w-[620px] max-lg:text-center">
              Leadership & Expertise — A Foundation of Excellence
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/15 rounded-2xl py-8 sm:py-10 px-4 flex flex-col items-center text-center gap-6"
                >
                  <div className="w-11 h-11 rounded-full bg-[#3F95F9] flex items-center justify-center">
                    <img src="/images/Home/Section6/tick_Icon.png" alt="" />
                  </div>

                  <p className="text-white font-semibold text-[15px] sm:text-[16px] whitespace-pre-line">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Sourcing */}
      <section className="my-16 lg:my-28 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1248px] mx-auto lg:gap-28 gap-10 items-center">
          <div>
            <h2 className="max-w-[502px] text-[clamp(30px,6vw,48px)] leading-tight font-bold">
              Strategic Sourcing — Beyond the Digital Frontier
            </h2>

            <p className="max-w-[460px] text-[15px] sm:text-[16px] text-[#011505] font-dm mt-4 leading-relaxed">
              Recognizing that operational success extends beyond software and
              hardware, Vaxterm LLC maintains a powerful global procurement
              division
            </p>

            <ul className="mt-6 space-y-4">
              {strategicSourcing.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#F5F4F4] w-full max-w-[373px] flex py-3 px-3 items-center gap-4 rounded-md"
                >
                  <div className="bg-[#3D92F7] size-[16px] flex-shrink-0 rounded-full flex justify-center items-center">
                    <img src="/images/AboutUs/section7/tick.png" alt="" />
                  </div>

                  <p className="text-[14px] sm:text-[16px] text-black font-medium font-dm">
                    {item.list}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img
              src="/images/AboutUs/section7/strategicpic.png"
              alt=""
              className="w-full h-[300px] sm:h-[400px] lg:h-[477px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h3 className="text-[clamp(32px,6vw,48px)] text-center mt-16 mb-10 lg:mb-20 font-bold leading-tight px-4">
          What Clients Say Our <br className="hidden sm:block" /> Services
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
              className="w-full max-w-full object-cover rounded-xl"
            />

            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 lg:right-[74px] bg-black rounded-[20px] w-[150px] sm:w-[180px] md:w-[220px] p-4 sm:p-6">
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
    </main>
  );
};

export default About;