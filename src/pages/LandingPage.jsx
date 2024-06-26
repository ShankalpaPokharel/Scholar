import React from "react";
import { Aboutus, Facts, HeroPart, LatestCourses, Navbar, OurFeatures, Schedule, Team, Testimonials } from "../components";

export default function LandingPage() {
  return (
    <>
      <div className="bg-bannerback bg-cover bg-right bg-no-repeat pb-32">
        <Navbar />
        <HeroPart />
      </div>
      <OurFeatures />
      <Aboutus />
      <LatestCourses />
      <Facts />
      <Team />
      <Testimonials />
      <Schedule />
    </>
  );
}
