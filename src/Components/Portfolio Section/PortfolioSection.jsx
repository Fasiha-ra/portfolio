import React, { createRef, useEffect, useRef, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { projectCardData } from "../../Constants/projects_card_data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const PortfolioSection = () => {
  const [number, setNumber] = useState(1);
  const [percentage, setPercentage] = useState(1);
  const mainContainer = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const cardsRefs = useRef(
    Array.from({ length: projectCardData.length }).map(() => createRef())
  );
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 40%",
        end: "top 60%",
        // markers: true,
        onEnter: () => {
          const count = setInterval(() => {
            setNumber((prev) => {
              if (prev < 10) {
                return prev + 1;
              } else {
                clearInterval(count);
                return prev;
              }
            });
            setPercentage((prev) => {
              if (prev < 96) {
                return prev + 1;
              } else {
                return prev;
              }
            });
          }, 10);

          // Clear interval when the component is unmounted or when the trigger leaves the viewport
          return () => clearInterval(count);
        },
      },
    });

    tl.fromTo(
      [mainContainer.current, heading1.current, heading2.current],
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.4 }
    );
    tl.fromTo(
      cardsRefs.current.map((cardRef) => cardRef.current),
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.2 },
      "-=0.3" // Delay by the duration of the previous animation
    );
  }, []);
  return (
    <div
      ref={mainContainer}
      className="relative flex flex-col lg:items-start items-center  w-full h-full sm:pt-32 pt-[5rem] pb-14 sm:pb-20"
    >
      <img
        src="/port-img.png"
        alt=""
        className="h-8 absolute left-0 lg:-left-10 top-24"
      />
      <h2
        ref={heading1}
        className="bg-text-gradient bg-clip-text inline-block font-bold uppercase text-transparent text-center lg:text-start text-lg "
      >
        Recent Work
      </h2>
      {/* Heading */}
      <div className="w-full lg:w-4/5 flex-col lg:flex-row flex  items-center lg:justify-between justify-center">
        <h1
          ref={heading2}
          className="text-white text-2xl sm:text-3xl lg:text-4xl lg:whitespace-normal lg:w-1/2 w-full sm:whitespace-nowrap whitespace-normal lg:text-start text-center my-5 font-bold"
        >
          Look at my portfolio and give me your feedback
        </h1>
       
      </div>

      {/* Projects */}
      <div className="pt-10  gap-x-8 gap-y-8 grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {projectCardData.map((projects, i) => (
          <ProjectsCard
            key={i}
            image={projects.image}
            title={projects.title}
            sub_title={projects.sub_title}
            ref={cardsRefs.current[i]}
            link={projects.link}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
