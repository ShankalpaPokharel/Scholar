import React from "react";
// import courseimage1 from "../assets/course-01.jpg";

export default function CourseItem({ course }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-3xl bg-lightbg">
      <div className="relative h-[385px] w-full">
        <img className="h-[385px] rounded-3xl object-cover" src={course.image} alt="" />
        <span className="absolute left-[30px] top-[30px] rounded-3xl bg-white px-5 py-2 text-sm font-medium uppercase text-primary">{course.category}</span>

        {/* price  */}
        <div className="absolute right-[-30px] top-[-50px] inline-block h-[130px] w-[130px] rounded-full bg-primary text-3xl font-bold text-white transition duration-150 group-hover:scale-125">
          <div className="ml-[22px] mt-[72px] flex items-start">
            <span className="inline-block align-top text-[18px] font-medium leading-5">$</span>
            <h6>{course.price}</h6>
          </div>
        </div>
      </div>

      <div className="px-7 pb-6 pt-5">
        <span className="mb-2 text-sm text-primary">{course.instructor}</span>
        <h4 className="text-[22px] font-medium">{course.title}</h4>
      </div>
    </div>
  );
}
