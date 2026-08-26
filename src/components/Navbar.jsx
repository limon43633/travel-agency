import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets, menuLinks } from '../assets/assets'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {

  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative flex items-center justify-between gap-4 max-w-7xl mx-auto px-6 md:px-10 py-5 font-[Plus_Jakarta_Sans]">
      {/* Logo */}
      <div onClick={() => navigate('/')} className="flex-shrink-0 flex items-center gap-2.5 pl-4 pr-6 py-2.5 ">
        <img src={assets.logo} alt="TripNest" className="h-12 w-12" />
        <span className="Mon-font text-xl font-semibold text-[#15170F] tracking-tight">TripNest</span>
      </div>

      {/* Center links - desktop only */}
      <div className="hidden md:flex items-center gap-0.5 bg-white rounded-full p-2 shadow-[0_8px_24px_rgba(20,25,15,0.14)]">
        {menuLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `whitespace-nowrap rounded-full px-4.5 py-2.5 text-sm tracking-wide transition-colors duration-200 ${isActive
                ? 'bg-[#F1F2EC] text-[#15170F] font-medium'
                : 'text-[#9A9C90] font-normal hover:text-[#15170F]'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Right actions */}
      <div className="flex-shrink-0 flex items-center gap-2.5">
        <button className="hidden md:inline-block bg-white text-[#9A9C90] hover:text-[#15170F] font-normal text-sm rounded-full px-7 py-3 shadow-[0_8px_24px_rgba(20,25,15,0.14)] transition-all active:scale-95">
          Log in
        </button>
        <button className="hidden md:block bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] font-medium text-sm rounded-full px-7 py-3 shadow-[0_8px_24px_rgba(20,25,15,0.14)] transition-all active:scale-95">
          Explore
        </button>

        {/* Burger - mobile only */}
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col items-center justify-center gap-1 w-11 h-11 rounded-full bg-white shadow-[0_8px_24px_rgba(20,25,15,0.14)]"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="md:hidden absolute top-[78px] left-4 right-4 z-20 flex flex-col gap-0.5 bg-white rounded-[20px] p-2.5 shadow-[0_8px_24px_rgba(20,25,15,0.14)]">
          {menuLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3.5 text-[15px] font-normal ${isActive ? 'bg-[#F1F2EC] text-[#15170F]' : 'text-[#15170F] hover:bg-[#F1F2EC]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="h-px bg-[#EDEEE6] my-1.5 mx-1"></div>
          <div className="flex gap-2 px-1.5 pt-1 pb-0.5">
            <button className="flex-1 bg-[#F1F2EC] text-[#15170F] text-sm font-medium rounded-full py-3">
              Log in
            </button>
            <button className="flex-1 bg-[#A6F24A] hover:bg-[#93DB3D] text-[#1C3308] text-sm font-medium rounded-full py-3">
              Explore
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar