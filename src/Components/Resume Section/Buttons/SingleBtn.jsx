import React from "react";

const SingleBtn = ({ title, numbers, isActive, onClick }) => {
  return (
    <button
      className={`w-full py-5 sm:py-2 px-3 sm:w-1/3 rounded-full h-full flex items-center justify-center text-white bg-[#00000081] ${
        isActive ? "bg-light-pink" : "sm:bg-transparent"
      } uppercase hover:bg-light-pink duration-500 gap-4`}
      onClick={onClick}
    >
      <span className=" text-sm lg:text-base font-bold">{title}</span>
      <span className="w-6 h-[1px] opacity-80 bg-white inline-block"></span>
      <span className="text-lg lg:text-2xl font-bold">0{numbers}</span>
    </button>
  );
};

export default SingleBtn;
