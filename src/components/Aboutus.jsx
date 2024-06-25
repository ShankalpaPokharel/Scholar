import React, { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

export default function Aboutus() {
  const [openSection, setOpenSection] = useState(null);

  const accordionContent = [
    {
      id: "headingOne",
      question: "Where shall we begin?",
      answer: "Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "headingTwo",
      question: "How do we work together?",
      answer: "Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "headingThree",
      question: "Why SCHOLAR is the best?",
      answer: "There are more than one hundred responsive HTML templates to choose from <strong>Template</strong>Mo website. You can browse by different tags or categories.",
    },
    {
      id: "headingFour",
      question: "Do we get the best support?",
      answer: "You can also search on Google with specific keywords such as <code>templatemo business templates, templatemo gallery templates, admin dashboard templatemo, 3-column templatemo, etc.</code>",
    },
  ];

  const handleToggle = (id) => {
    setOpenSection(openSection === id ? null : id);
  };
  const parseAnswer = (answer) => {
    const html = answer.replace(/<code>/g, '<code class="text-[#d63384]">').replace(/<strong>/g, '<strong class="font-bold">');
    return html;
  };

  return (
    <div className="relative mt-32">
      <div className="lg:about-us container">
        <div className="lg:flex">
          {/* accordion container */}

          <div className="lg:ml-[8%] lg:w-1/2">
            <div className="-my-10 rounded-[40px] bg-primary px-6 pb-4 pt-10 lg:px-12 lg:pb-12 lg:pt-20">
              {accordionContent.map((el) => (
                <div className="mb-7 rounded-[40px] bg-white" key={el.id}>
                  {/* title  */}
                  <div className="flex items-center justify-between px-6 py-4 text-base font-semibold">
                    <h2 className="text-black">{el.question}</h2>
                    <div className="flex items-center justify-center rounded-full bg-primary p-2 text-white" onClick={() => handleToggle(el.id)}>
                      {openSection == el.id ? <FaMinus className="inline-block" /> : <FaPlus className="inline-block" />}
                    </div>
                  </div>
                  {/* body  */}
                  <div className={`px-6 pb-6 ${el.id == openSection ? "block" : "hidden"}`}>
                    {/* <p className="text-sm">{el.answer}</p> */}
                    <p className="text-sm text-textlight" dangerouslySetInnerHTML={{ __html: parseAnswer(el.answer) }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* accordion container end */}

          {/* about us container  */}
          <div className="lg:w-[42%]">
            <div className="mt-32 lg:ml-[60px] lg:mt-0">
              <h6 className="text-sm font-semibold text-primary">ABOUT US</h6>
              <h2 className="my-5 text-4xl font-semibold capitalize leading-10">What make us the best academy online?</h2>
              <p className="mt-7 text-sm leading-7 text-textlight lg:mt-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid risus commodo.</p>
              <div className="mt-7 flex w-fit items-center justify-center rounded-3xl bg-primary px-6 text-white lg:mt-12 lg:bg-white lg:text-primary">
                <span className="text-sm font-medium leading-10">Discover More</span>
              </div>
            </div>
          </div>
          {/* about us container end  */}
        </div>
      </div>
    </div>
  );
}
