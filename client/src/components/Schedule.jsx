import React from "react";
import Event from "./Event";

import courseimage1 from "../assets/course-01.jpg";

export default function Schedule() {
  const courses = [
    {
      _id: 1,
      category: "WEB DESIGN",
      title: "UI Best Practices",
      date: "16 Feb 2036",
      duration: "22",
      price: "120",
      image: courseimage1,
    },
    {
      _id: 2,
      category: "FRONT END",
      title: "New Design Trend",
      date: "24 Feb 2036",
      duration: "30",
      price: "320",
      image: courseimage1,
    },
    {
      _id: 3,
      category: "FULL STACK",
      title: "Web Programming",
      date: "12 Mar 2036",
      duration: "48",
      price: "440",
      image: courseimage1,
    },
  ];

  return (
    <div className="container mt-28">
      <div className="mb-24 text-center">
        <h4 className="text-sm font-semibold uppercase text-primary">Schedule</h4>
        <h2 className="my-4 text-4xl font-semibold capitalize leading-10">Upcoming Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-1">
        {courses?.map((el) => (
          <Event key={el._id} course={el} />
        ))}
      </div>
    </div>
  );
}
