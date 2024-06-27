import React from "react";
import member1 from "../assets/member-01.jpg";

export default function ({ banner }) {
  return (
    <div className="rounded-3xl bg-primary p-10 text-white lg:p-20">
      <p className="mb-10 text-lg font-light italic leading-10">{banner.testimonial}</p>
      <div className="flex items-center">
        <img className="mr-6 max-w-[100px] rounded-full" src={banner.image} alt="" />
        <div>
          <span className="text-sm">{banner.expertField}</span>
          <h4 className="mt-2 text-xl font-semibold">{banner.name}</h4>
        </div>
      </div>
    </div>
  );
}
