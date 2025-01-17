import React from "react";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const ServicesCard = forwardRef(({ icon, services, desc }, ref) => {
  return (
    <div
      ref={ref}
      className={`${
        services === "PSD/Figma to React"
          ? "!border-r-none"
          : "lg:border-r-gray-600 lg:border-r-[1px] border-opacity-10"
      } flex flex-col items-center lg:items-start   border-r-none text-white p-0 sm:p-4 `}
      // style={{borderRight: }}
    >
      <img src={icon} alt="" className="h-20" />
      <h1 className="sm:mt-12 font-bold text-xl mt-5 mb-5">{services}</h1>
      <p className="opacity-80 text-sm xs:text-base w-full md:w-[70%] lg:text-sm text-center lg:text-start lg:w-[90%]">
        {desc}
      </p>
    </div>
  );
});

export default ServicesCard;
