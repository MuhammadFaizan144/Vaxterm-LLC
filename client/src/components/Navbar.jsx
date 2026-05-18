import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Solutions", link: "/solutions" },
    { name: "Hardware", link: "/hardware" },
    { name: "Procurement", link: "/procurement" },
    { name: "Capabilities", link: "/capabilities" },
    { name: "Contact", link: "/contact" },

  ]

  const activeLink = ({ isActive }) =>
    isActive ? "text-[#0D7FFB]" : "text-[#0D0D0C] hover:text-[#0D7FFB]"

  return (
    <header className="flex justify-center">
      
      <nav className="mt-6 absolute w-[90%] lg:w-[95%] flex items-center  justify-between lg:py-3 py-2 lg:px-16 sm:px-10 px-5 lg:rounded-[100px] rounded-3xl bg-[#f5f7f9] z-50">

        {/* Logo */}
        <img
          src="/images/whitelogo.png"
          alt="logo"
          className="max-w-[172px] xl:h-[64px] h-[50px]"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center xl:gap-8 gap-4 text-[16px]">
          {links.map((item, index) => (
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

        {/* CTA Button (Desktop) */}
        <Link
          to="/get-free-quote"
          className="hidden shadow-lg shadow-gray-400 lg:block bg-[#0D7FFB] text-white rounded-[8px] text-[16px] xl:py-3 py-2 xl:px-5 px-3"
        >
          Get Free Quote
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden text-3xl "
          onClick={() => setOpen(!open)}
        >
            {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-24 w-[90%] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 lg:hidden z-40">
          {links.map((item, index) => (
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
  )
}

export default Navbar