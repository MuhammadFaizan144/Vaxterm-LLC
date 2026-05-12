import React from "react";
import {
  Building2,
  MapPin,
  Mail,
  Globe,
  Server,
  Code2,
  Truck,
  GitBranch,
  ShieldCheck,
  DollarSign,
  Earth,
} from "lucide-react";
import { competencies,differentiators,naicsCodes } from "../Constant/capabilities_download";

const Capabilities_download = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-[#001f3f] text-white">
        <div className="max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h1 className="text-[28px] sm:text-[34px] font-bold tracking-wide">
                VAXTERM LLC
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                Innovative Solutions & Strategic Procurement
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <img src="/images/Capabilities/download/download01.png" alt="location" className="w-[12px] h-[18px] "/>
                <span>1330 Brummel St Apt 2, Evanston, IL 60202-3740</span>
              </div>

              <div className="flex items-center gap-2">
                <img src="/images/Capabilities/download/download02.png" alt="location" className="w-[20px] h-[18px]"/>
                <span>info@vaxterm.com</span>
              </div>

              <div className="flex items-center gap-2">
                <img src="/images/Capabilities/download/download03.png" alt="location" className="w-[18px] h-[18px]"/>
                <span>www.vaxterm.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-[320px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Point of Contact */}
            <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                   <img src="/images/Capabilities/download/building.png" alt="" className="size-[20px]"/>
                </div>
                <h2 className="text-lg font-bold">Point of Contact</h2>
              </div>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="text-slate-500 font-medium">CEO</p>
                  <p className="font-bold text-slate-900 mt-1">Shakeel Ahmed</p>
                </div>

                <div>
                  <p className="text-slate-500 font-medium">Address</p>
                  <p className="font-medium text-slate-700 mt-1">
                    Evanston, Illinois, USA
                  </p>
                </div>

                <div>
                  <p className="text-slate-500 font-medium">Email</p>
                  <p className="font-medium text-blue-500 mt-1">
                    mailinfo0@atk.com
                  </p>
                </div>
              </div>
            </div>

            {/* Business Identifiers */}
            <div className="bg-[#071225] text-white rounded-xl p-7 shadow-2xl">
              <h2 className="text-lg font-bold mb-7">Business Identifiers</h2>

              <div className="space-y-5 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">UEI</span>
                  <span className="font-bold tracking-widest">••••</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">CAGE CODE</span>
                  <span className="font-bold tracking-widest">••••</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">EIN / TIN</span>
                  <span className="font-bold">42-1993651</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">DUNS</span>
                  <span className="font-bold">145004686</span>
                </div>
              </div>
            </div>

            {/* Corporate Information */}
            <div>
              <h2 className="text-lg font-bold mb-4">Corporate Information</h2>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden text-sm">
                <div className="flex justify-between px-4 py-4 border-b border-slate-100">
                  <span className="text-slate-500">Legal Name</span>
                  <span className="font-bold">Vaxterm LLC</span>
                </div>

                <div className="flex justify-between px-4 py-4 border-b border-slate-100">
                  <span className="text-slate-500">Entity Type</span>
                  <span className="font-bold text-right">
                    Limited Liability Company
                  </span>
                </div>

                <div className="flex justify-between px-4 py-4 border-b border-slate-100">
                  <span className="text-slate-500">Socio-Economic</span>
                  <span className="font-bold text-green-600">
                    Minority-Owned SB
                  </span>
                </div>

                <div className="flex justify-between px-4 py-4">
                  <span className="text-slate-500">SAM Registration</span>
                  <span className="font-bold text-green-600">Active</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Content */}
          <section className="space-y-14">
            {/* Company Overview */}
            <div>
              <div className="flex items-center gap-5 mb-6">
                <span className="w-1 h-10 bg-blue-500 rounded-full"></span>
                <h2 className="text-[28px] sm:text-[34px] font-bold">
                  Company Overview
                </h2>
              </div>

              <p className="text-slate-500 text-base sm:text-lg leading-8 max-w-[760px]">
                Vaxterm LLC is a U.S.-based strategic solutions provider
                specializing in IT infrastructure, enterprise software, and
                global procurement services. We deliver reliable, scalable, and
                compliant IT solutions to enterprise and government clients
                worldwide. Our mission is to bridge the gap between complex
                technological needs and streamlined, cost-effective acquisition.
              </p>

              <img
                src="/images/Capabilities/download/companyOver.png"
                alt="Company Overview"
                className="w-full h-[220px] sm:h-[260px] object-cover rounded-xl mt-8"
              />
            </div>

            {/* Core Competencies */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="w-1 h-10 bg-blue-500 rounded-full"></span>
                <h2 className="text-[28px] sm:text-[34px] font-bold">
                  Core Competencies
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {competencies.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm hover:shadow-md transition"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-7 ${item.color}`}
                    >
                      <img src={item.icon} alt="" className="size-[24px]"/>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div>
              <div className="flex items-center gap-5 mb-8">
                <span className="w-1 h-10 bg-blue-500 rounded-full"></span>
                <h2 className="text-[28px] sm:text-[34px] font-bold">
                  Key Differentiators
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className={`border rounded-xl p-6 ${item.color}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-current flex items-center justify-center mb-5">
                      <img src={item.icon} alt="" className="size-[20px]"/>
                    </div>

                    <h3 className="font-bold mb-3 text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* NAICS */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="text-center mb-10">
                <h2 className="text-[28px] sm:text-[34px] font-bold">
                  Primary NAICS Codes
                </h2>
                <p className="text-slate-500 mt-3">
                  Classification System for Vaxterm LLC Operations
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {naicsCodes.map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl p-5 flex items-center gap-6"
                  >
                    <div className="min-w-[95px] h-[55px] bg-blue-50 text-blue-500 rounded-md flex items-center justify-center text-2xl font-bold">
                      {item.code}
                    </div>

                    <h3 className="font-bold leading-6">{item.title}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-blue-500 text-white rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="w-[110px] h-[55px] bg-white/15 rounded-md flex items-center justify-center text-2xl font-bold">
                  423420
                </div>
                <h3 className="font-bold text-lg">
                  Office Equipment & Supplies - Key Procurement Focus
                </h3>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-[#001f3f] text-white mt-16">
        <div className="max-w-[900px] mx-auto text-center px-4 py-24 sm:py-28">
          <h2 className="text-[34px] sm:text-[48px] font-bold">
            Partner With Vaxterm LLC
          </h2>

          <p className="text-slate-300 text-base sm:text-xl leading-8 max-w-[680px] mx-auto mt-8">
            Connect with our team to explore how our solutions can support your
            organization's operational and procurement needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-md font-bold flex items-center justify-center gap-2">
              <img src="/images/Capabilities/download/msg.png" alt="mail" className="w-[18px] h-[18px]"/>
              Contact Us
            </button>

            <button className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-md font-bold flex items-center justify-center gap-2">
               <img src="/images/Capabilities/download/world.png" alt="" className="w-[18px] h-[18px]"/>
              Visit Website
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities_download;
