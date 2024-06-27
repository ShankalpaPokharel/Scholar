import React from "react";
import contactdec from "../assets/contact-dec-01.png";
import contactdec1 from "../assets/contact-dec-02.png";

export default function () {
  return (
    <div id="register" className="lg:contactus relative mt-16 py-12 lg:mt-20">
      <div className="container flex flex-col lg:flex-row lg:items-center">
        {/* body  */}
        <div className="mb-12 lg:mb-0 lg:mr-28 lg:w-1/2">
          <h6 className="text-sm font-semibold uppercase text-primary">Contact Us</h6>
          <h2 className="my-5 text-4xl font-semibold capitalize leading-10">Fell free to contact us Anytime</h2>
          <p className="mt-12 text-sm leading-7 text-textlight">Thank you for choosing our templates. We provide you best CSS templates at absolutely 100% free of charge. You may support us by sharing our website to your friends.</p>
          {/* specila offer  */}
          <div className="relative mt-12 rounded-3xl bg-lightbg px-[120px] py-[26px] lg:w-fit lg:bg-white">
            <span className="absolute left-0 top-0 inline-block h-[120px] w-20 rounded-l-[15px] rounded-r-[60px] bg-primary px-2 py-[30px] uppercase leading-6 text-white">
              of <br />
              <span className="text-[28px] font-semibold">50%</span>
            </span>
            <h6 className="mb-3 uppercase text-textlight">
              Valide: <span className="text-primary">24 April 2036</span>
            </h6>
            <h4 className="text-[22px] font-semibold">
              Special Offer <span className="text-primary">50%</span> OFF!
            </h4>

            <a className="absolute right-[30px] top-[35px] inline-block h-[50px] w-[50px] rounded-full bg-primary text-center leading-[50px] text-white" href="#">
              &gt;
            </a>
          </div>
        </div>
        {/* form  */}
        <div className="relative w-full rounded-3xl bg-primary p-8 lg:w-1/2 xl:p-16">
          <img src={contactdec} className="absolute left-1/2 top-0 z-0 translate-x-[-149px] opacity-50" alt="" />
          <img src={contactdec1} className=" absolute right-0 bottom-0" alt="" />
          <form action="#" className="z-10 flex flex-col gap-7">
            <div className="rounded-3xl bg-[#8D7DDE] px-6 py-3">
              <input className="bg-transparent text-white placeholder:text-white focus:outline-none w-full" type="text" placeholder="Your Name.." />
            </div>
            <div className="rounded-3xl bg-[#8D7DDE] px-6 py-3">
              <input className="bg-transparent text-white placeholder:text-white focus:outline-none w-full" type="text" placeholder="Your Email.." />
            </div>
            <div className="rounded-3xl bg-[#8D7DDE] px-6 py-3">
              <textarea className="h-32 w-full bg-transparent text-white placeholder:text-white focus:outline-none" type="text" placeholder="Your Email.." />
            </div>

            <button className="w-fit rounded-3xl bg-white px-6 py-3 font-semibold text-primary">Send Message Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
