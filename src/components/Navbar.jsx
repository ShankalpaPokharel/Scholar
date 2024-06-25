import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

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

  return (
    <div className={`${navbarClass} z-20 flex w-full items-center text-white`}>
      {/* container */}
      <div className="container relative z-50 flex items-center">
        {/* left nav side  */}
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-medium">SCHOLAR</h1>
            <div className="h-full w-[2px] bg-gray-400"></div>
            <div className="hidden items-center rounded-3xl bg-inputbackground p-3 text-white lg:flex">
              <input type="text" placeholder="Type Something" className="w-full bg-transparent text-xs placeholder:font-extralight placeholder:text-white focus:outline-none" />
              <FaSearch className="inline-block" />
            </div>
          </div>

          {/* menu icon  */}
          <div className="text-4xl text-white md:hidden" onClick={menuClick}>
            {menuOpen ? <RxCross2 /> : <CgMenuLeft />}
          </div>
        </div>

        {/* right nav side / mobile nav  */}
        {/* <div
          className={`absolute left-0 z-[-1] right-0  mx-auto w-full max-w-[540px] rounded-b-3xl bg-secondary text-black transition-all duration-1000 ${menuOpen ? "top-20" : " -top-96"} md:static md:left-auto md:right-auto md:top-auto md:z-auto md:flex md:max-h-[80px] md:w-full md:justify-end md:rounded-none md:bg-transparent md:text-white`}
        >
          <ul className="divide-y whitespace-nowrap text-center md:flex md:gap-3 md:divide-y-0 md:font-light [&_li]:py-3">
            <li className="rounded-3xl bg-inputbackground p-3">Home</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Team</li>
            <li>Events</li>
            <li className="">Register Now!</li>
          </ul>
        </div> */}

        <div
          className={`top absolute left-0 right-0 top-[70px] z-10 mx-auto w-full max-w-[540px] rounded-b-3xl bg-secondary text-black transition-all duration-1000 md:static md:left-auto md:right-auto md:top-auto md:z-auto md:flex md:max-h-[80px] md:w-full md:justify-end md:rounded-none md:bg-transparent md:text-white ${menuOpen ? "" : "hidden md:block"}`}
        >
          <ul className="divide-y whitespace-nowrap text-center md:flex md:gap-3 md:divide-y-0 md:font-light [&_li]:py-3">
            <li className="rounded-3xl bg-inputbackground p-3">Home</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Team</li>
            <li>Events</li>
            <li className="">Register Now!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}