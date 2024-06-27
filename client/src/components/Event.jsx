import React from "react";

export default function Event({ course }) {
  return (
    <div id="events" className="relative mb-16 items-center rounded-3xl bg-lightbg p-10 lg:flex">
      <div className="relative lg:w-[25%]">
        <img className="-mt-20 w-full rounded-3xl object-cover lg:absolute lg:-top-[100px] lg:mt-0 lg:max-w-[260px]" src={course.image} alt="" />
      </div>
      <ul className="flex h-fit flex-wrap items-center justify-between lg:w-[75%] lg:px-12 xl:pr-16">
        <li className="mb-7 w-full border-b border-b-white pb-7 lg:mb-0 lg:w-auto lg:border-none lg:pb-0">
          <span className="mb-5 mt-6 flex w-fit items-center justify-center rounded-3xl bg-white px-6 py-2 font-normal text-primary lg:mb-3 lg:mt-0">{course.category}</span>
          <h4 className="text-xl font-semibold capitalize">{course.title}</h4>
        </li>

        <li>
          <span className="text-textlight">Date:</span>
          <h6 className="text-sm font-semibold text-primary">{course.date}</h6>
        </li>
        <li>
          <span className="text-textlight">Duration:</span>
          <h6 className="text-sm font-semibold text-primary">{course.duration} Hours</h6>
        </li>
        <li>
          <span className="text-textlight">Price:</span>
          <h6 className="text-sm font-semibold text-primary">${course.price}</h6>
        </li>
      </ul>
      <a className="absolute bottom-32 right-0 inline-block h-[120px] w-[60px] items-center rounded-l-[60px] bg-primary text-center text-xl leading-[120px] text-white lg:bottom-5" href="#">
        {" "}
        <span>&gt; </span>
      </a>
    </div>
  );
}
