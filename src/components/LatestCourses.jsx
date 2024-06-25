import React, { useState } from "react";
import courseimage1 from "../assets/course-01.jpg";
import CourseItem from "./CourseItem";

export default function LatestCourses() {
  const latestCourses = [
    {
      _id: 1,
      category: "WEBDESIGN",
      price: 160,
      instructor: "Stella Blair",
      title: "Learn Web Design",
      image: courseimage1,
    },
    {
      _id: 2,
      category: "DEVELOPMENT",
      price: 340,
      instructor: "Cindy Walker",
      title: "Web Development Tips",
      image: courseimage1,
    },
    {
      _id: 3,
      category: "WORDPRESS",
      price: 640,
      instructor: "David Hutson",
      title: "Latest Web Trends",
      image: courseimage1,
    },
    {
      _id: 4,
      category: "DEVELOPMENT",
      price: 450,
      instructor: "Stella Blair",
      title: "Online Learning Steps",
      image: courseimage1,
    },
    {
      _id: 5,
      category: "WORDPRESS",
      price: 320,
      instructor: "Sophia Rose",
      title: "Be a WordPress Master",
      image: courseimage1,
    },
    {
      _id: 6,
      category: "WEBDESIGN",
      price: 240,
      instructor: "David Hutson",
      title: "Full Stack Developer",
      image: courseimage1,
    },
  ];

  const [flatestCourses, setFlatestCourses] = useState(latestCourses);

  const filterCourse = (category) => {
    if (category === "all") {
      setFlatestCourses(latestCourses);
      return;
    }
    setFlatestCourses(latestCourses.filter((course) => course.category === category));
  };

  return (
    <div className="mt-24 pt-8 lg:mt-36">
      <div className="container">
        {/* heading part */}
        <div className="mb-14 text-center">
          <h6 className="text-sm font-semibold text-primary">LATEST COURSES</h6>
          <h2 className="my-5 text-4xl font-semibold capitalize text-black"></h2>
        </div>
        {/* heading part end*/}

        {/* filter start */}
        <ul className="mx-auto mb-16 flex max-w-fit items-center justify-between whitespace-nowrap rounded-[50px] bg-lightbg px-2 py-4 [&_li]:mx-4 [&_li]:cursor-pointer">
          <li onClick={() => filterCourse("all")}>Show All</li>
          <li onClick={() => filterCourse("WEBDESIGN")}>Webdesign</li>
          <li onClick={() => filterCourse("DEVELOPMENT")}>Development</li>
          <li onClick={() => filterCourse("WORDPRESS")}>Wordpress</li>
        </ul>
        {/* filter end  */}

        {/* course item start */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flatestCourses.map((el) => (
            <CourseItem course={el} key={el._id} />
          ))}
        </div>
        {/* course item end */}
      </div>
    </div>
  );
}
