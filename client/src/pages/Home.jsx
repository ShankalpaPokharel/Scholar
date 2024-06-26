import React, { useState } from "react";

import { Outlet, NavLink, useNavigate } from "react-router-dom";


import { FaBook } from "react-icons/fa";
import { BsCalendarEventFill } from "react-icons/bs";
import { AddCourse, AddTeacher, AddUpcomingCourse } from "../components/admin";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.removeItem("jwt")
    navigate("/")
    
  }

  return (
    <div className="relative">
      <div onClick={(e) => setMenuOpen(!menuOpen)} className="absolute z-50 ms-3 mt-2 inline-flex items-center rounded-lg bg-gray-500 p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden">
        {menuOpen ? <RxCross2 className="text-xl text-white" /> : <IoMdMenu className="text-xl text-white" />}
      </div>

      <div className={`fixed left-0 top-0 z-40 h-screen w-64 ${!menuOpen && "-translate-x-full"} transition-transform sm:translate-x-0`}>
        <div className="h-full overflow-y-auto bg-primary px-3 py-4">
          <ul className="space-y-2 font-medium">
            <li className="px-2 py-7 text-4xl font-semibold text-white">
              <NavLink to={""}>
                <span>SCHOLAR</span>
              </NavLink>
            </li>
            <li>
             
              <NavLink to={"addteacher"} className={({ isActive }) => `group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`}>
                <svg className="h-5 w-5 flex-shrink-0 text-gray-900 transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">Add Teacher</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"addcourse"} className={({ isActive }) => `group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`}>
                <FaBook className="inline-block text-black" />
                <span className="ms-3 flex-1 whitespace-nowrap">Add Course</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"addupc"} className={({ isActive }) => `group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 ${isActive ? "bg-gray-100" : ""}`}>
                <BsCalendarEventFill className="inline-block text-black" />
                <span className="ms-3 flex-1 whitespace-nowrap">Upcoming Course</span>
              </NavLink>
            </li>
            <li>
              <span onClick={handleLogout}  className="group cursor-pointer flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100">
                <svg className="h-5 w-5 flex-shrink-0 text-black transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">Logout</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex min-h-screen flex-1 flex-col sm:ml-64">
        {/* <AddTeacher /> */}
        {/* <AddUpcomingCourse/> */}
        {/* <AddCourse/> */}
        <Outlet />
      </div>
    </div>
  );
}
// {({ isActive }) => (isActive ? "bg-gray-100" : "")} to={"addteacher"}
