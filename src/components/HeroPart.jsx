import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function HeroPart() {
  const banner1 = "../assets/banner-item-01.jpg";
  return (
    <div className="container">
      <div className={`bg-banner1 ml-[130px] rounded-3xl bg-cover bg-center p-24 text-white`}>
        <span className="mb-12 inline-block rounded-3xl bg-primary px-4 py-1 uppercase">Our Courses</span>
        <h2 className="mb-10 w-3/5 text-5xl font-semibold">With Scholar Teachers, Everything Is Easier</h2>
        <p className="w-2/3 text-sm">Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.</p>

        <div className="mt-12 flex gap-5">
          <div className="rounded-3xl bg-white py-3 px-4 text-primary flex items-center w-fit">
            <span>Request Demo</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-full"><IoMdArrowDropright className="inline-block text-primary text-4xl" /></div>
            <span>What's Schloar?</span>
          </div>

        </div>
      </div>
    </div>
  );
}
