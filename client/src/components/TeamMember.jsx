import React from "react";

import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function TeamMember({ member }) {
  return (
    <div className="group relative mb-[140px] rounded-3xl bg-lightbg px-[30px] pb-10 pt-[125px] text-center lg:mb-0">
      <img className="absolute -top-20 left-1/2 max-w-[180px] translate-x-[-90px] rounded-full duration-200 group-hover:-translate-y-2" src={member.image} alt="" />
      <span className="text-sm text-primary">{member.field}</span>
      <h4 className="mb-4 mt-2 text-xl font-semibold">{member.name}</h4>
      <div className="flex items-center justify-center gap-1">
        {/* social link  */}

        <a href={member.facebook} target="_blank" className="flex w-fit items-center justify-center rounded-full bg-white p-2 hover:bg-primary">
          <FaFacebook className="text-primary hover:text-white" />
        </a>
        <a href={member.twitter} target="_blank" className="flex w-fit items-center justify-center rounded-full bg-white p-2 hover:bg-primary">
          <FaTwitter className="text-primary hover:text-white" />
        </a>
        <a href={member.linkedin} target="_blank" className="flex w-fit items-center justify-center rounded-full bg-white p-2 hover:bg-primary">
          <FaLinkedin className="text-primary hover:text-white" />
        </a>
      </div>
    </div>
  );
}
