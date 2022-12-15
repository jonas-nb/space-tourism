import React from "react";

const ArticleHome = () => {
  return (
    <div className="text-white pt-10 sm:pt-0 sm:mt-24 text-center xl:text-start flex flex-col items-center xl:items-start">
      <p className="uppercase text-[#D0d6f9] font-barlow text-[1rem] sm:text-[1.4rem] font-[500] sm:font-[300] tracking-[0.2rem]">
        So, you want to travel to
      </p>
      <h1 className="pt-4 uppercase text-6xl font-bellefair text-[6rem] sm:text-[10rem]">
        Space
      </h1>
      <p className="pt-7 w-11/12 xl:w-12/12 xl:text-start sm:w-[22rem] sm:text-xl xl:text-sm font-barlow  tracking-[0.080rem] text-[#D0d6f9]">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
  );
};

export default ArticleHome;
