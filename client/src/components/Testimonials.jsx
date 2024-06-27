import React, { useRef, useState } from "react";
import member1 from "../assets/member-01.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TestimonialBanner from "./TestimonialBanner";

export default function Testimonials() {
  const testimoni = [
    {
      _id: 1,
      name: "Thomas Jefferson",
      expertField: "UI Expert",
      testimonial: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid.”",
      image: member1,
    },
    {
      _id: 2,
      name: "Stella Blair",
      expertField: "Digital Animator",
      testimonial: "“Scholar is free website template provided by TemplateMo for educational related websites. This CSS layout is based on Bootstrap v5.3.0 framework.”",
      image: member1,
    },
    {
      _id: 3,
      name: "Claude David",
      expertField: "Full Stack Master",
      testimonial: "“Please tell your friends or collegues about TemplateMo website. Anyone can access the website to download free templates. Thank you for visiting.”",
      image: member1,
    },
  ];

  let settings = {
    // dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  let sliderRef = useRef(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="lg:testimonials relative lg:mt-36 lg:py-20">
      <div className="container relative items-center lg:flex">
        {/* banner part  */}
        <div className="relative lg:mr-16 lg:w-[58%]">
          <Slider {...settings} className="" ref={sliderRef}>
            {testimoni?.map((el) => (
              <TestimonialBanner key={el._id} banner={el} />
            ))}
            {/* <TestimonialBanner/>
            <TestimonialBanner/> */}
          </Slider>

          {/* sliding button */}
          <div className="absolute -right-5 top-1/2 hidden -translate-y-7 flex-col justify-center gap-4 text-white lg:flex">
            <div className={`w-fit rounded-full bg-white p-3`} onClick={previous}>
              <FaChevronLeft className="text-primary" />
            </div>
            <button className={`w-fit rounded-full bg-white p-3`} onClick={next}>
              <FaChevronRight className="text-primary" />
            </button>
          </div>
        </div>
        {/* body part  */}
        <div className="mt-10 lg:mt-0 lg:w-[41%]">
          <span className="text-sm font-semibold uppercase text-primary">testimonials</span>
          <h2 className="my-5 text-4xl font-semibold capitalize leading-10">What they say about us?</h2>
          <p className="mt-12 text-sm leading-7 text-textlight">You can search free CSS templates on Google using different keywords such as templatemo portfolio, templatemo gallery, templatemo blue color, etc.</p>
        </div>
      </div>
    </div>
  );
}
