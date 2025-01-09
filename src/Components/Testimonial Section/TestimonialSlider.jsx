import React from "react";

const TestimonialSlider = ({ img, desc, name, specialization }) => {
  return (
    <div className="flex flex-col items-center py-16 justify-center">
      <div className="w-[250px] relative z-[1] before:bg-light-pink before:rounded-full before:w-[250px]  before:z-[-1] before:h-[250px] before:inline-block before:absolute  before:left-1/2 before:bottom-0 before:translate-x-[-50%] rounded-br-full rounded-bl-full overflow-hidden">
        <img src={img} alt="" className=" object-cover" />
      </div>
      <p className="opacity-80 text-white text-center w-full lg:w-[70%] my-10 lg:leading-8 lg:text-xl text-base font-bold">
        {desc}
      </p>
      <h4 className="text-xl mt-3 text-white font-bold">{name}</h4>
      <h5 className="text-[#ff014f] mt-1 text-base font-bold">
        {specialization}
      </h5>
    </div>
  );
};

export default TestimonialSlider;
