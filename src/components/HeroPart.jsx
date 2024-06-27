import React, { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Banner from "./Banner";

export default function HeroPart() {
  const [clickedbutton, setClickedbutton] = useState(0);

  const bannerData = [
    {
      id: 1,
      bannerbg: "bg-banner1",
      category: "Our Courses",
      title: "With Scholar Teachers, Everything Is Easier",
      description: "Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.",
      button_text1: "Request Demo",
      button_text2: "What's Scholar?",
      button_link: "#",
      button2_link: "#",
    },
    {
      id: 2,
      bannerbg: "bg-banner2",
      category: "Best Result",
      title: "Get the best result out of your effort",
      description: "You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.",
      button_text1: "Request Demo",
      button_text2: "What's the best result?",
      button_link: "#",
      button2_link: "#",
    },
    {
      id: 3,
      bannerbg: "bg-banner3",
      category: "Online Learning",
      title: "Online Learning helps you save the time",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.",
      button_text1: "Request Demo",
      button_text2: "What's Online Course?",
      button_link: "#",
      button2_link: "#",
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
      setClickedbutton(2);
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setClickedbutton(1);
    }
  };

  return (
    <div id="home" className="container relative pt-28 lg:pt-40">
      <Slider {...settings} className="lg:ml-[130px]" ref={sliderRef}>
        {bannerData.map((el) => (
          <Banner key={el.id} banner={el} />
        ))}
      </Slider>
      <div className="absolute bottom-10 flex w-full justify-center gap-4 text-white lg:flex-col">
        <div className={`${clickedbutton == 1 ? "bg-[rgba(215,211,238,0.40)]" : "bg-[rgba(215,211,238,0.20)]"} w-fit rounded-full p-3 lg:bg-[#9588e1]`} onClick={previous}>
          <FaChevronLeft className="" />
        </div>
        <button className={` ${clickedbutton == 2 ? "bg-[rgba(215,211,238,0.40)]" : "bg-[rgba(215,211,238,0.20)]"} w-fit rounded-full p-3`} onClick={next}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
