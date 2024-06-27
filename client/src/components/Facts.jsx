import React from "react";
import contactdec from "../assets/contact-dec-01.png";
import CounterAnimation from "./CounterAnimation";

export default function Facts() {
  return (
    <div className="relative mt-[120px] w-[95%] rounded-r-[500px] bg-primary pb-20 pt-[120px]">
      <div className="container mb-10 grid grid-cols-1 gap-10 text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <CounterAnimation initialValue={0} targetValue={150} text="Happy Student" />
        <CounterAnimation initialValue={0} targetValue={804} text="Course Hours" />
        <CounterAnimation initialValue={0} targetValue={150} text="Employed Students" />
        <CounterAnimation initialValue={0} targetValue={15} text="Years Experience" />
      </div>
      <img className="absolute left-[15%] top-0 opacity-50" src={contactdec} alt="" />
    </div>
  );
}
