import React, { useState, useEffect } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { FaSearch } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const [navbarClass, setNavbarClass] = useState("absolute md:top-10");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setNavbarClass("fixed bg-primary top-0 rounded-b-3xl shadow-2xl");
      } else {
        setNavbarClass("absolute top-5");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const currentHash = location.hash;

  const getLinkClassName = (hash) => {
    return currentHash === hash ? "rounded-3xl bg-inputbackground p-3" : "text-white";
  };

  return (
    <div className={`${navbarClass} z-20 flex w-full items-center text-white`}>
      {/* container */}
      <div className="container relative z-50 flex items-center">
        {/* left nav side */}
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-medium">SCHOLAR</h1>
            <div className="h-full w-[2px] bg-gray-400"></div>
            <div className="hidden items-center rounded-3xl bg-inputbackground p-3 text-white lg:flex">
              <input type="text" placeholder="Type Something" className="w-full bg-transparent text-xs placeholder:font-extralight placeholder:text-white focus:outline-none" />
              <FaSearch className="inline-block" />
            </div>
          </div>

          {/* menu icon */}
          <div className="text-4xl text-white md:hidden" onClick={menuClick}>
            {menuOpen ? <RxCross2 /> : <CgMenuLeft />}
          </div>
        </div>

        {/* right nav side / mobile nav */}
        <div
          className={`top absolute left-0 right-0 top-[70px] z-10 mx-auto w-full max-w-[540px] rounded-b-3xl bg-secondary text-black transition-all duration-1000 md:static md:left-auto md:right-auto md:top-auto md:z-auto md:flex md:max-h-[80px] md:w-full md:justify-end md:rounded-none md:bg-transparent md:text-white ${menuOpen ? "" : "hidden md:block"}`}
        >
          <ul className="divide-y whitespace-nowrap text-center md:flex md:gap-3 md:divide-y-0 md:font-light [&_li]:py-3">
            <li className="">
              <NavLink smooth to="#home" className={getLinkClassName("#home")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink smooth to="#services" className={getLinkClassName("#services")}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink smooth to="#courses" className={getLinkClassName("#courses")}>
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink smooth to="#team" className={getLinkClassName("#team")}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink smooth to="#events" className={getLinkClassName("#events")}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink smooth to="#register" className={getLinkClassName("#register")}>
                Register Now!
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
