import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  globalOperation,
  testimonials,
  enterprisecomputing,
  IndustrialPower,
  networking,
  facility,
} from "../Constant/hardware";

const ProductSection = ({ title, items, type = "link" }) => {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="text-center text-[#110F0F] text-[28px] sm:text-[35px] lg:text-[40px] leading-tight font-semibold font-dm mb-10 px-4">
        {title}
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[1277px] mx-auto gap-8 px-4">
        {items.map((item, index) => (
          <div
            className="w-full max-w-[409px] mx-auto bg-white rounded-[17px] shadow-lg overflow-hidden border border-gray-100"
            key={index}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] sm:h-[280px] lg:h-[300px] object-cover rounded-t-[10px]"
              />

              <div className="absolute right-6 bottom-[-28px] w-[56px] h-[56px] bg-[#3D92F7] flex justify-center items-center rounded-full shadow-lg">
                <img
                  src="/images/Hardware/arrow.png"
                  alt="arrow"
                  className="w-[19px] h-[19px] object-contain"
                />
              </div>
            </div>

            <div className="pt-12 pb-7 px-5 sm:px-8 flex flex-col gap-3 min-h-[250px]">
              <h3 className="text-[#110F0F] text-[20px] sm:text-[24px] leading-tight font-semibold font-dm">
                {item.title}
              </h3>

              <p className="text-[#110F0F] text-[15px] sm:text-[16px] leading-relaxed font-dm">
                {item.description}
              </p>

              {type === "link" ? (
                <Link
                  to={item.ProductButton || "#"}
                  className="mt-auto text-white bg-[#3D92F7] rounded-[8px] text-[15px] sm:text-[16px] font-medium px-5 py-2 w-[149px] text-center shadow-lg shadow-gray-300"
                >
                  View Product
                </Link>
              ) : (
                <button className="mt-auto text-white bg-[#3D92F7] rounded-[8px] text-[15px] sm:text-[16px] font-medium px-5 py-2 w-[149px] shadow-lg shadow-gray-300">
                  View Product
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Hardware = () => {
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
          src="/images/Hardware/hardwarehero.png"
          alt="Enterprise Hardware"
          className="w-full h-[460px] sm:h-[540px] lg:h-[636px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

        <div className="absolute z-20 top-1/2 left-1/2 w-full max-w-[980px] -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="text-[32px] sm:text-[42px] lg:text-[60px] leading-tight font-dm text-white font-bold">
            Enterprise Hardware & Infrastructure Solutions
          </h1>

          <p className="text-[15px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] font-dm text-white mt-5 sm:mt-6 mx-auto max-w-[850px]">
            Delivering High-Performance IT Hardware, Industrial Power Systems,
            and Reliable Infrastructure for Mission-Critical Operations.
          </p>
        </div>
      </section>

      {/* Global Operations */}
      <section className="px-4 my-16 lg:my-24">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-14 items-center mx-auto max-w-[1285px]">
          <div className="w-full">
            <img
              src="/images/Hardware/globalOperation.png"
              alt="Global Operations"
              className="w-full h-[300px] sm:h-[430px] lg:h-auto object-cover rounded-2xl"
            />
          </div>

          <div className="w-full lg:max-w-[502px]">
            <div className="flex gap-2 items-center mb-4">
              <img
                src="/images/Hardware/iconTitle.png"
                alt=""
                className="w-[26px] h-[13px]"
              />

              <h5 className="font-dm text-[15px] sm:text-[16px] text-[#011505] uppercase">
                Global Operations
              </h5>
            </div>

            <h2 className="font-dm text-[30px] sm:text-[36px] lg:text-[40px] leading-tight font-medium text-[#000000] mb-4">
              Mission Critical Hardware for Global Operations
            </h2>

            <p className="font-dm text-[15px] sm:text-[16px] leading-relaxed text-[#011505] mt-4">
              Vaxterm LLC delivers the physical backbone required to support
              complex digital and industrial ecosystems. We specialize in the
              procurement and supply of high performance IT hardware and
              industrial grade electrical infrastructure tailored for demanding
              environments
            </p>

            <ul className="mt-6 space-y-4">
              {globalOperation.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start sm:items-center gap-2 rounded-[42px] bg-[#3D92F7] w-full max-w-[373px] px-3 py-2 min-h-[36px] ${
                    item.side ? "lg:ml-5" : ""
                  }`}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-[16px] h-[16px] mt-1 sm:mt-0 flex-shrink-0"
                  />

                  <p className="text-white text-[14px] sm:text-[16px] leading-snug">
                    {item.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ProductSection
        title={
          <>
            Enterprise Computing & Data <br className="hidden sm:block" />
            Center Solutions
          </>
        }
        items={enterprisecomputing}
        type="link"
      />

      <ProductSection
        title={
          <>
            Industrial Power & Energy <br className="hidden lg:block" />
            Systems
          </>
        }
        items={IndustrialPower}
        type="button"
      />

      <ProductSection
        title={
          <>
            Networking & Connectivity <br className="hidden lg:block" />
            Hardware
          </>
        }
        items={networking}
        type="button"
      />

      <ProductSection
        title={
          <>
            Facility & Commercial <br className="hidden lg:block" />
            Appliances
          </>
        }
        items={facility}
        type="button"
      />

      {/* Testimonials */}
      <section>
        <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] text-center mt-12 sm:mt-16 mb-10 lg:mb-20 font-bold leading-tight px-4">
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
    </main>
  );
};

export default Hardware;