import React from "react";
import service1 from "../assets/service-01.png";
import service2 from "../assets/service-02.png";
import service3 from "../assets/service-03.png";

export default function OurFeatures() {
  return (
    <div className="mt-20 pt-7 lg:mt-32">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* item 1  */}
        <div className="relative ">
          {/* icon  */}
          <div className="absolute right-0 top-0 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-primary">
            <img className="max-w-[86px] delay-150 hover:-translate-y-1" src={service1} alt="" />
          </div>
          {/* content  */}
          <div className="mb-8 mr-20 rounded-3xl bg-[#F1F0FE] px-8 pb-12 pt-20 text-black mt-[95px]">
            <h4 className="mb-4 text-2xl font-semibold">Online Degrees</h4>
            <p className="mb-6 text-sm text-[#4a4a4a]">Whenever you need free templates in HTML CSS, you just remember TemplateMo website.</p>
            <div className="flex w-fit items-center justify-center rounded-3xl bg-white px-6 text-sm font-medium leading-10 text-primary">
              <span>Read More</span>
            </div>
          </div>
        </div>
        {/* item end  */}


        {/* item 2 */}
        <div className="relative ">
          {/* icon  */}
          <div className="absolute right-0 top-0 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-primary">
            <img className="max-w-[86px] delay-150 hover:-translate-y-1" src={service2} alt="" />
          </div>
          {/* content  */}
          <div className="mb-8 mr-20 rounded-3xl bg-[#F1F0FE] px-8 pb-12 pt-20 text-black mt-[95px]">
            <h4 className="mb-4 text-2xl font-semibold">Short Courses</h4>
            <p className="mb-6 text-sm text-[#4a4a4a]">You can browse free templates based on different tags such as digital marketing, etc.</p>
            <div className="flex w-fit items-center justify-center rounded-3xl bg-white px-6 text-sm font-medium leading-10 text-primary">
              <span>Read More</span>
            </div>
          </div>
        </div>
        {/* item end  */}


        {/* item  */}
        <div className="relative ">
          {/* icon  */}
          <div className="absolute right-0 top-0 flex h-[170px] w-[170px] items-center justify-center rounded-full bg-primary">
            <img className="max-w-[86px] delay-150 hover:-translate-y-1"  src={service3} alt="" />
          </div>
          {/* content  */}
          <div className="mb-8 mr-20 rounded-3xl bg-[#F1F0FE] px-8 pb-12 pt-20 text-black mt-[95px]">
            <h4 className="mb-4 text-2xl font-semibold">Web Experts</h4>
            <p className="mb-6 text-sm text-[#4a4a4a]">You can start learning HTML CSS by modifying free templates from our website too.

</p>
            <div className="flex w-fit items-center justify-center rounded-3xl bg-white px-6 text-sm font-medium leading-10 text-primary">
              <span>Read More</span>
            </div>
          </div>
        </div>
        {/* item end  */}
        

       
      </div>
    </div>
  );
}
