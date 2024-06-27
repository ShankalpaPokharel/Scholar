import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function Banner({ banner }) {
  return (
    <div className={`${banner.bannerbg} flex min-h-[685px] flex-col items-center justify-center rounded-3xl bg-cover bg-center p-24 text-center text-white lg:items-start lg:text-left`}>
      <span className="mb-12 w-fit rounded-3xl bg-primary px-4 py-1 uppercase">{banner.category}</span>
      <h2 className="mb-10 text-4xl font-semibold lg:w-3/5 lg:text-5xl">{banner.title} </h2>
      <p className="text-sm lg:w-2/3">{banner.description}</p>

      <div className="mt-12 flex justify-center gap-5 whitespace-nowrap lg:justify-start">
        <div className="flex w-fit items-center rounded-[35px] bg-white px-6 text-sm text-primary">
          <span>{banner.button_text1}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white p-2">
            <IoMdArrowDropright className="inline-block text-5xl text-primary" />
          </div>
          <span>{banner.button_text2}</span>
        </div>
      </div>
    </div>
  );
}
