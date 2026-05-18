import React, { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Hardware", link: "/hardware" },
    { name: "Procurement", link: "/procurement" },
    { name: "Capabilities", link: "/capabilities" },
    { name: "Contact", link: "/contact" },
  ];

  const solutionLinks = [
    {
      name: "Enterprise Systems",
      link: "/solutions?tab=enterprise-systems",
    },
    {
      name: "Financial Tech",
      link: "/solutions?tab=financial-tech",
    },
    {
      name: "Lifecycle Management",
      link: "/solutions?tab=lifecycle-management",
    },
    {
      name: "Cloud Hosting",
      link: "/solutions?tab=cloud-hosting",
    },
    {
      name: "Software Solutions",
      link: "/solutions?tab=software-solutions",
    },
  ];

  const activeLink = ({ isActive }) =>
    isActive
      ? "text-[#0D7FFB]"
      : "text-[#0D0D0C] hover:text-[#0D7FFB]";

  return (
    <header className="flex justify-center">
      <nav className="mt-6 absolute w-[90%] lg:w-[95%] flex items-center justify-between lg:py-3 py-2 lg:px-16 sm:px-10 px-5 lg:rounded-[100px] rounded-3xl bg-[#f5f7f9] z-50">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/whitelogo.png"
            alt="logo"
            className="max-w-[172px] xl:h-[64px] h-[50px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center xl:gap-8 gap-4 text-[16px]">
          <li>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={activeLink}>
              About
            </NavLink>
          </li>

          {/* Solutions Dropdown */}
          <li
            className="relative"
          >
            <button
              type="button"
              onClick={() => setSolutionOpen(!solutionOpen)}
              className="flex items-center gap-2 text-[#0D0D0C] hover:text-[#0D7FFB]"
            >
              Solutions
              <FaChevronDown
                className={`text-[12px] transition-transform ${
                  solutionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionOpen && (
              <div className="absolute top-8 left-0 w-[260px] bg-white rounded-[18px] shadow-xl py-3 z-50">
                {solutionLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => {
                      setSolutionOpen(false);
                      setOpen(false);
                    }}
                    className="block px-5 py-3 text-[15px] text-[#0D0D0C] hover:bg-[#0D7FFB] hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {links.slice(2).map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={activeLink}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <Link
          to="/get-free-quote"
          className="hidden shadow-lg shadow-gray-400 lg:block bg-[#0D7FFB] text-white rounded-[8px] text-[16px] xl:py-3 py-2 xl:px-5 px-3"
        >
          Get Free Quote
        </Link>

        {/* Hamburger Button Mobile */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-24 w-[90%] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 lg:hidden z-40">
          <NavLink
            to="/"
            className={activeLink}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={activeLink}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>

          {/* Mobile Solutions Dropdown */}
          <div>
            <button
              type="button"
              onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
              className="w-full flex items-center justify-between text-[#0D0D0C] hover:text-[#0D7FFB]"
            >
              Solutions
              <FaChevronDown
                className={`text-[12px] transition-transform ${
                  mobileSolutionOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileSolutionOpen && (
              <div className="mt-3 ml-3 flex flex-col gap-3 border-l-2 border-[#0D7FFB] pl-4">
                {solutionLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="text-[15px] text-[#0D0D0C] hover:text-[#0D7FFB]"
                    onClick={() => {
                      setOpen(false);
                      setMobileSolutionOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.slice(2).map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={activeLink}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/get-free-quote"
            className="bg-[#0D7FFB] text-white text-center rounded-[8px] py-3"
            onClick={() => setOpen(false)}
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;