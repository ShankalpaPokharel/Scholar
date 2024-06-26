import React from "react";
import member1 from "../assets/member-01.jpg";

export default function () {
  return (
    <div className="rounded-3xl bg-primary p-20 text-white">
      <p className="mb-10 text-lg font-light italic leading-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente qui tenetur praesentium nostrum maxime ipsa dignissimos enim ipsam et, laudantium rerum.</p>
      <div className="flex items-center">
        <img className="max-w-[100px] mr-6 rounded-full" src={member1} alt="" />
        <div>
          <span className="text-sm">Full Stack Master</span>
          <h4 className="mt-2 text-xl font-semibold">skdfsd fsdlkfj</h4>
        </div>
      </div>
    </div>
  );
}
