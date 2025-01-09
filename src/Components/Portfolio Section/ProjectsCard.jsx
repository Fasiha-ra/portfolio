import React, { forwardRef } from "react";
import "./ProjectsCard.css";
// eslint-disable-next-line react/display-name
const ProjectsCard = forwardRef(({ image, title, sub_title, link }, ref) => {
  const handleRedirect = () => {
    window.open(link, "_blank");
  };
  return (
    <div
      ref={ref}
      onClick={handleRedirect}
      className="h-full relative overflow-hidden hover:cursor-pointer"
      id="card"
    >
      <img src={image} alt="" className="object-cover h-[200px]" />
      <div
        className="static sm:absolute left-0 bottom-[-50px] opacity-100 sm:opacity-0 w-full min-h-20 bg-dark-blue flex items-center justify-between px-6 py-2 text-white duration-300"
        id="titles"
      >
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <h1 href="" className="font-bold ">
            {sub_title}
          </h1>
        </div>
        <div
          className="w-10 h-10 bg-light-pink rounded-full flex items-center justify-center -translate-x-10 duration-500 ease-in hover:cursor-pointer"
          id="arrow-icon"
        >
          <i class="ri-arrow-right-line text-dark-blue text-lg"></i>
        </div>
      </div>
    </div>
  );
});

export default ProjectsCard;
