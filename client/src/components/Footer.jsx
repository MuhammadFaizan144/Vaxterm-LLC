import React from "react"
import {
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"

const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaWhatsapp />, href: "#" },
]

const usefulLinks = [
    "Home",
    "About us",
    "Our Service",
    "Terms of Service",
    "News & Media",
]
const contactData = [
    {
        icon: "/images/phone.png",
        lines: ["+01 234 567 890", "+09 876 543 210"],
        
    },
    {
        icon: "/images/mail.png",
        lines: ["mailinfo00@atek.com", "support24@atek.com"],
    },
    {
        icon: "/images/location.png",
        lines: ["789 Inner Lane", "Holy park, California, USA"],
    },
]
const businessInfo = [
    { label: "EIN/TIN", value: "421993651" },
    { label: "UEI", value: "****" },
    { label: "CAGE Code", value: "****" },
    { label: "DUNS", value: "145004686" },
    { label: "Primary NAICS", value: "541512" },
]
const Footer = () => {
    return (
        <footer className="flex justify-center my-8">
            <div className="bg-[#0a0a0f] text-white pt-8 relative overflow-hidden rounded-tl-[24px] rounded-tr-[24px] w-[96%]">

                <div className="max-w-[1,351px] mx-auto px-16">

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">

                        {/* BRAND */}
                        <div className='max-w-[259px]'>
                            <div className="flex items-center gap-3 mb-4">
                                <img src="/images/footerLogo.png" alt="logo" className="max-w-[195px] h-[74px]" />


                            </div>

                            <p className="text-[#B1B8C3] text-[16px] leading-6 mb-7">
                                Delivering dependable solutions and maintaining long-term relationships with government and enterprise clients worldwide.
                            </p>

                            <div className="flex gap-3 ">
                                {socialLinks.map((s, i) => (
                                    <a
                                        key={i}
                                        href={s.href}
                                        className="size-[32px] flex items-center justify-center rounded-full border border-gray-500 text-white hover:text-blue-500 hover:border-blue-500 transition"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* LINKS */}
                        <div>
                            <h3 className="text-[24px] uppercase  mb-6 relative ">
                                Useful Links
                            </h3>

                            <ul className="space-y-[14px] text-[#B1B8C3] text-[16px]">
                                {usefulLinks.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className="hover:text-white hover:pl-1 transition flex items-center gap-2"
                                        >
                                            <span className="text-white">›</span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONTACT */}
                        <div>
                            <h3 className="text-[24px] uppercase mb-6">
                                Get In Touch
                            </h3>

                            <div className="space-y-5 text-[#B1B8C3] text-[16px]">

                                {contactData.map((item, index) => (
                                    <div key={index} className="flex gap-3 items-center">

                                        {/* Icon */}
                                        <div className="rounded-full bg-[#1a1a1f] size-[40px] flex items-center justify-center border border-gray-500">
                                            
                                            <img src={item.icon} alt="icon" className="w-[19px] h-[18px]" />
                                        </div>
                                       

                                        {/* Text Lines */}
                                        <div className="flex flex-col gap-[3px]">
                                            {item.lines.map((text, i) => (
                                                <p key={i}>{text}</p>
                                            ))}
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* BUSINESS */}
                        <div className="">
                            <h3 className="text-[16px] uppercase tracking-widest font-semibold mb-6">
                                Business Information
                            </h3>

                            <div className="flex flex-col text-[16px] text-[#B1B8C3]">
                                {businessInfo.map((item, index) => (
                                    <div key={index} className="flex justify-between mb-3 flex-col">
                                        <span>{item.label}</span>
                                        <span className="text-white mt-2">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                    {/* BOTTOM */}
                    <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row justify-between gap-4 text-[#ffffff] text-[16px]">
                        <p>© 2026 Vaxterm LLC. All Rights Reserved.</p>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-red-500">Terms & Conditions</a>
                            <a href="#" className="hover:text-red-500">Careers</a>
                            <a href="#" className="hover:text-red-500">Privacy Policy</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer