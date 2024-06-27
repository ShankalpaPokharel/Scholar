import React from "react";
import contactdec from "../assets/contact-dec-01.png";

export default function Footer() {
  return (
    <div className="relative mt-36 rounded-t-[150px] bg-primary align-middle">
      <div className="container">
        <p className="text-center leading-[150px] text-white">
          Copyright © 2036 Scholar Organization. All rights reserved. &nbsp;&nbsp;&nbsp; Design:{" "}
          <a href="#" rel="nofollow" target="_blank">
            TemplateMo
          </a>{" "}
          Distribution:{" "}
          <a href="#" rel="nofollow" target="_blank">
            ThemeWagon
          </a>
        </p>
      </div>
      <img className="absolute bottom-0 left-[30px] rotate-180" src={contactdec} alt="" />
    </div>
  );
}
