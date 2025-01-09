import React from "react";

const Skills = () => {
  return (
    <div className="w-full h-full flex items-center justify-between gap-20">
      <div className="hidden lg:inline-block lg:min-w-[40%]">
       
        <div className="flex items-center gap-10 text-white text-xl font-bold my-6">
          <div className="w-16 h-16 rounded-full bg-dark-blue">
            <img src="/react.png" alt="" className="w-full h-full p-3" />
          </div>
          <h1>Front-End with React</h1>
        </div>
        <div className="flex items-center gap-10 text-white text-xl font-bold ">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#e9532d]">
            {/* <i class="ri-html5-fill text-4xl"></i> */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white overflow-hidden">
            {/* <i class="ri-stack-fill text-4xl text-white"></i> */}
            <img src="/nextjs.png" alt="" className="w-full h-full" />
          </div>
          </div>
          <h1 className="">NextJS Development</h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-14">
       
        <div className="flex items-center justify-center gap-5">
          <span className="text-white font-bold text-2xl xs:text-3xl">94%</span>
          <span className="w-full inline-block h-2 before:rounded-full before:bg-light-pink before:w-[84%] before:absolute before:left-0 before:h-full before:top-0 relative bg-white  rounded-full">
            <h1 className="text-white absolute lg:hidden block -top-6 xs:text-sm text-xs">
              Front-End with React
            </h1>
          </span>
        </div>
        <div className="flex items-center justify-center gap-5">
          <span className="text-white font-bold text-2xl xs:text-3xl">92%</span>
          <span className="w-full inline-block h-2 before:rounded-full before:bg-light-pink before:w-[92%] before:absolute before:left-0 before:h-full before:top-0 relative bg-white  rounded-full">
            <h1 className="text-white absolute lg:hidden block -top-6 xs:text-sm text-xs">
              NextJS Development
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
