import React, { useState } from "react";
import SingleBtn from "./SingleBtn";

const Buttons = ({setActiveButtonData}) => {
  const [activeButton, setActiveButton] = useState("Biography");

  const handleButtonClick = (title) => {
    setActiveButton(title);
    setActiveButtonData(title)
  };

  return (
    <div className="sm:absolute sm:top-0 z-10 sm:translate-y-[-50%] left-1/2 sm:translate-x-[-50%] w-full sm:w-[90%] mx-auto rounded-full mb-4 sm:mb-0 sm:h-20 bg-transparent sm:bg-[#012b45]  sm:border-[1px] sm:border-white sm:border-opacity-20 border-0">
      <div className="p-2 flex sm:flex-row flex-col items-center sm:justify-evenly justify-between gap-3 w-full h-full">
        <SingleBtn
          title={"Biography"}
          numbers={1}
          isActive={activeButton === "Biography"}
          onClick={() => handleButtonClick("Biography")}
        />
        <SingleBtn
          title={"Skills"}
          numbers={2}
          isActive={activeButton === "Skills"}
          onClick={() => handleButtonClick("Skills")}
        />
        {/* <SingleBtn
          title={"Education"}
          numbers={3}
          isActive={activeButton === "Education"}
          onClick={() => handleButtonClick("Education")}
        /> */}
      </div>
    </div>
  );
};

export default Buttons;
