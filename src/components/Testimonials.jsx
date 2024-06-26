import React, { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TestimonialBanner from "./TestimonialBanner";

export default function Testimonials() {
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
    <div className="lg:testimonials relative mt-36 py-20">
      <div className="container relative flex items-center ">
        {/* banner part  */}
        <div className="relative lg:mr-16 lg:w-[58%]">
          <Slider {...settings} className="" ref={sliderRef}>
            {/* {bannerData.map((el) => (
                <Banner key={el.id} banner={el} />
              ))} */}
            <TestimonialBanner />
            <TestimonialBanner />
          </Slider>

          {/* sliding button */}
          <div className="absolute hidden -right-5 top-1/2 -translate-y-7 flex-col justify-center gap-4 text-white lg:flex">
            <div className={`w-fit rounded-full bg-white p-3`} onClick={previous}>
              <FaChevronLeft className="text-primary" />
            </div>
            <button className={`w-fit rounded-full bg-white p-3`} onClick={next}>
              <FaChevronRight className="text-primary" />
            </button>
          </div>
        </div>
        {/* body part  */}
        <div className="lg:w-[41%]">
          <span className="text-sm font-semibold uppercase text-primary">testimonials</span>
          <h2 className="my-5 text-4xl font-semibold capitalize leading-10">What they say about us?</h2>
          <p className="mt-12 text-sm leading-7 text-textlight">You can search free CSS templates on Google using different keywords such as templatemo portfolio, templatemo gallery, templatemo blue color, etc.</p>
        </div>
      </div>
    </div>
  );
}
