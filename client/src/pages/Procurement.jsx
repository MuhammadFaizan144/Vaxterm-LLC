import React, { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const listStrategic = [
  {
    image: "/images/Procurement/section2/tickPro.png",
    description: "Comprehensive Procurement Solutions",
  },
  {
    image: "/images/Procurement/section2/tickPro.png",
    description: "Medical & Healthcare Equipment",
  },
  {
    image: "/images/Procurement/section2/tickPro.png",
    description: "Industrial Machinery Procurement",
  },
];

const testimonials = [
  {
    id: 1,
    name: "ENGINEER. LONDON",
    text: "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.",
    image: "/images/Home/Section7/scroll01.png",
  },
  {
    id: 2,
    name: "ENGINEER. SWITZERLAND",
    text: "Our IT consulting services are tailored to help businesses optimize their technology strategies and streamline for greater efficiency.",
    image: "/images/Home/Section7/scroll02.png",
  },
  {
    id: 3,
    name: "FOUNDER. LONDON",
    text: "Our IT consulting services are designed to empower businesses in enhancing their technology strategies.",
    image: "/images/Home/Section7/scroll03.png",
  },
  {
    id: 4,
    name: "ENGINEER. LONDON",
    text: "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.",
    image: "/images/Home/Section7/scroll01.png",
  },
  {
    id: 5,
    name: "ENGINEER. SWITZERLAND",
    text: "Our IT consulting services are tailored to help businesses optimize their technology strategies and streamline for greater efficiency.",
    image: "/images/Home/Section7/scroll02.png",
  },
  {
    id: 6,
    name: "FOUNDER. LONDON",
    text: "Our IT consulting services are designed to empower businesses in enhancing their technology strategies.",
    image: "/images/Home/Section7/scroll03.png",
  },
  {
    id: 7,
    name: "ENGINEER. LONDON",
    text: "Our IT consulting services are customized to empower businesses in enhancing their technology strategies and achieved.",
    image: "/images/Home/Section7/scroll01.png",
  },
  {
    id: 8,
    name: "ENGINEER. SWITZERLAND",
    text: "Our IT consulting services are tailored to help businesses optimize their technology strategies and streamline for greater efficiency.",
    image: "/images/Home/Section7/scroll02.png",
  },
  {
    id: 9,
    name: "FOUNDER. LONDON",
    text: "Our IT consulting services are designed to empower businesses in enhancing their technology strategies.",
    image: "/images/Home/Section7/scroll03.png",
  },
];

const faqData = [
  {
    question: "What bookkeeping services do you offer?",
    answer:
      "We offer a full range of bookkeeping services including day-to-day transaction recording, bank reconciliation, financial reporting, and outsourced bookkeeping solutions tailored to your business needs.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, we specialize in scaling solutions for startups and small enterprises.",
  },
  {
    question: "How does outsourced bookkeeping work?",
    answer:
      "We integrate with your existing tools to manage your books remotely and securely.",
  },
  {
    question: "How secure is my financial data?",
    answer:
      "We use bank-grade encryption and strict internal protocols to ensure your data remains private.",
  },
  {
    question: "Can your services scale as my business grows?",
    answer:
      "Absolutely. Our packages are designed to grow alongside your transaction volume.",
  },
  {
    question: "How often will I receive financial reports?",
    answer:
      "Standard reporting is monthly, but we offer weekly or real-time dashboards as well.",
  },
];

const supportItems = [
  {
    icon: "/images/Procurement/section3/IconOoP01.png",
    image: "/images/Procurement/section3/OoP01.png",
    title: "Comprehensive Procurement Solutions",
    description:
      "Vaxterm LLC delivers comprehensive procurement services that support government agencies and enterprise organizations in sourcing specialized equipment and operational supplies. Our procurement strategies are built around quality assurance, supplier reliability, and cost efficiency.",
    points: [
      "We manage sourcing processes",
      "Materials are delivered securely and efficiently",
    ],
    reverse: false,
  },
  {
    icon: "/images/Procurement/section3/IconOoP02.png",
    image: "/images/Procurement/section3/OoP02.png",
    title: "Medical & Healthcare Equipment",
    description:
      "Vaxterm LLC supports healthcare facilities and government institutions by sourcing specialized medical equipment and laboratory instruments. We collaborate with trusted manufacturers to provide reliable medical technology that meets strict regulatory and safety standards.",
    points: ["Medical Devices & Instruments", "Healthcare Facility Equipment"],
    reverse: true,
  },
  {
    icon: "/images/Procurement/section3/IconOoP03.png",
    image: "/images/Procurement/section3/OoP03.png",
    title: "Industrial Machinery Procurement",
    description:
      "Vaxterm LLC provides sourcing services for industrial machinery and heavy-duty equipment required for operational facilities. Our procurement capabilities include forklifts, lifting systems, and material handling equipment used across industrial and logistics environments.",
    points: [
      "Forklifts and Material Handling Equipment",
      "Heavy Industrial Machinery",
    ],
    reverse: false,
  },
  {
    icon: "/images/Procurement/section3/IconOoP04.png",
    image: "/images/Procurement/section3/OoP04.png",
    title: "General Supplies & Facility Equipment",
    description:
      "Vaxterm LLC supports organizations by sourcing general operational supplies required for daily business and facility management. Our team handles bulk procurement of office materials, furniture, and commercial-grade appliances to ensure consistent availability of essential resources.",
    points: ["Office Furniture & Equipment", "Logistics & Inventory Coordination"],
    reverse: true,
  },
  {
    icon: "/images/Procurement/section3/IconOoP05.png",
    image: "/images/Procurement/section3/OoP05.png",
    title: "Direct Manufacturer Sourcing",
    description:
      "Vaxterm LLC maintains strong relationships with global manufacturers, enabling direct sourcing of specialized equipment and materials. Our end-to-end supply chain management approach ensures quality control, cost transparency, and reliable delivery timelines.",
    points: ["Direct Manufacturer Coordination", "Shipment Tracking & Logistics"],
    reverse: false,
  },
];

const Procurement = () => {
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
      <section className="relative w-full overflow-hidden">
        <img
          src="/images/Procurement/procurementHero.png"
          alt="Procurement Hero"
          className="w-full h-[430px] sm:h-[520px] lg:h-[603px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-[800px]">
            <h1 className="text-[32px] sm:text-[44px] lg:text-[60px] leading-tight font-dm text-white font-bold">
              Strategic Sourcing &
              <br className="hidden sm:block" /> Global Logistics
            </h1>

            <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] font-dm text-white mt-5 sm:mt-6 max-w-[650px] mx-auto">
              Reliable procurement and logistics solutions designed to deliver
              specialized equipment and essential supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Sourcing */}
      <section className="max-w-[1400px] mx-auto px-4 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[376px_1fr_306px] gap-8 lg:gap-12 items-center">
          <div className="w-full">
            <img
              src="/images/Procurement/section2/strategicSourcingPro.png"
              alt="Strategic Sourcing"
              className="w-full h-[280px] sm:h-[420px] lg:h-[487px] rounded-[25px] object-cover shadow-lg"
            />
          </div>

          <div className="w-full">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] leading-tight text-black font-bold max-w-[500px]">
              Strategic Sourcing & Global Logistics
            </h2>

            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#414243] mt-5 sm:mt-6 max-w-[560px]">
              Vaxterm LLC provides end-to-end procurement and logistics services
              that simplify sourcing processes and ensure reliable delivery of
              mission-critical equipment. Our global supplier network and
              logistics expertise enable organizations to access high-quality
              products with efficiency, compliance, and precision.
            </p>

            <ul className="bg-[#F0F3F7] py-4 px-4 rounded-[20px] mt-8 space-y-3 max-w-[520px]">
              {listStrategic.map((item, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[21px] h-[21px] flex-shrink-0 mt-1"
                  />

                  <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-snug text-[#0B1422] font-medium">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <button className="bg-[#0D7FFB] text-[15px] sm:text-[16px] py-3 px-7 rounded-lg shadow-gray-400 shadow-xl text-white mt-6 hover:bg-[#005fd1] transition-all duration-300 w-full sm:w-auto">
              View Our Capabilities
            </button>
          </div>

          <div className="w-full">
            <img
              src="/images/Procurement/section2/strategicSourcingPro2.png"
              alt="Global Logistics"
              className="w-full h-[260px] sm:h-[380px] lg:h-[417px] rounded-[25px] shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#1C3260] w-full px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
        <div className="flex justify-center">
          <h2 className="text-center font-dm font-bold text-[30px] sm:text-[36px] lg:text-[40px] leading-tight text-white mb-10">
            Overview of <br /> Procurement Support
          </h2>
        </div>

        <div className="max-w-[1280px] mx-auto space-y-10 sm:space-y-14">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-[1fr_428px] gap-6 lg:gap-10 items-stretch ${
                item.reverse ? "lg:grid-cols-[428px_1fr]" : ""
              }`}
            >
              {item.reverse && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[320px] lg:h-full object-cover rounded-[13px] order-1"
                />
              )}

              <div
                className={`bg-white/15 rounded-[20px] p-5 sm:p-8 lg:p-10 order-2 ${
                  item.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="bg-[#3D92F7] w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] flex justify-center items-center rounded-[10px] mb-6">
                  <img src={item.icon} alt="" />
                </div>

                <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] leading-tight text-white font-bold mb-5 sm:mb-6">
                  {item.title}
                </h3>

                <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/80 mb-6">
                  {item.description}
                </p>

                <div className="border-b border-white/30 mb-6"></div>

                <ul className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-white space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <img
                        src="/images/Procurement/section3/tickPro.png"
                        alt=""
                        className="w-[20px] h-[20px] flex-shrink-0 mt-1"
                      />

                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {!item.reverse && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[320px] lg:h-full object-cover rounded-[13px] order-1 lg:order-2"
                />
              )}
            </div>
          ))}
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
                    alt={item.name}
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
    </main>
  );
};

export default Procurement;