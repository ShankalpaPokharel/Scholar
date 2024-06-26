import React from "react";
import TeamMember from "./TeamMember";
import member1 from "../assets/member-01.jpg";

export default function () {
  const teamMembers = [
    {
      _id: 1,
      field: "UX Teacher",
      name: "Sophia Rose",
      image: member1,
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    {
      _id: 2,
      field: "Graphic Teacher",
      name: "Cindy Walker",
      image: member1,
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    {
      _id: 3,
      field: "Full Stack Master",
      name: "David Hutson",
      image: member1,
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    {
      _id: 4,
      field: "Digital Animator",
      name: "Stella Blair",
      image: member1,
      facebook: "",
      twitter: "",
      linkedin: "",
    },
  ];

  return (
    <div className="container pt-36">
      <div className="grid grid-cols-1 px-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {teamMembers.map((el) => (
          <TeamMember member={el} key={el._id}/>
        ))}
      </div>
    </div>
  );
}
