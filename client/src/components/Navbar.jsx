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
      
      <nav className="mt-6 absolute w-[90%] lg:w-[95%] flex items-center lg:justify-evenly justify-around lg:py-6 py-4 lg:px-0 px-10 lg:rounded-[100px] rounded-3xl bg-white z-50">

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="logo"
          className="max-w-[172px] h-[64px]"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-[16px]">
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
          to="/free-quote"
          className="hidden lg:block bg-[#0D7FFB] text-white rounded-[8px] text-[16px] py-3 px-5"
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
        <div className="absolute top-32 w-[90%] bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 lg:hidden z-40">
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
            to="/free-quote"
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