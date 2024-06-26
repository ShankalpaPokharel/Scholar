import React from "react";
import contactdec from "../assets/contact-dec-01.png";
import CounterAnimation from "./CounterAnimation";

export default function Facts() {
  return (
    <div className="relative mt-[120px] w-[95%] rounded-r-[500px] bg-primary pb-20 pt-[120px]">
      <div className="container mb-10 grid grid-cols-1 gap-10 text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {/* <div className="text-center">
          <h2 className="text-5xl font-bold">150 +</h2>
          <p className="test-sm mt-4 font-medium leading-7">Happy Student</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold">804 +</h2>
          <p className="test-sm mt-4 font-medium leading-7">Course Hours</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold">150 +</h2>
          <p className="test-sm mt-4 font-medium leading-7">Employed Students</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold">15 +</h2>
          <p className="test-sm mt-4 font-medium leading-7">Years Experience</p>
        </div> */}
        <CounterAnimation initialValue={0} targetValue={150} text="Happy Student" />
<CounterAnimation initialValue={0} targetValue={804} text="Course Hours" />
<CounterAnimation initialValue={0} targetValue={150} text="Employed Students" />
<CounterAnimation initialValue={0} targetValue={15} text="Years Experience" />

      </div>
      <img className=" absolute left-[15%] top-0 opacity-50" src={contactdec} alt="" />
    </div>
  );
}
