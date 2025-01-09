import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import Buttons from "./Buttons/Buttons";
import Biography from "./Sections/Biography";
import Skills from "./Sections/Skills";

const ResumeSection = () => {
  const [activeButtonData, setActiveButtonData] = useState("Biography");
  const [currentData, setCurrentData] = useState(null);
  const mainContainer = useRef(null);
  const iconRef = useRef(null);
  const buttonsRef = useRef(null);
  const [shouldBtnsAnimate, setShouldBtnsAnimate] = useState(true);

  useEffect(() => {
    if (activeButtonData === "Biography") {
      setCurrentData(<Biography />);
    } else if (activeButtonData === "Skills") {
      setCurrentData(<Skills />);
    }
    // } else if (activeButtonData === "Education") {
    //   setCurrentData(<Education />);
    // }
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 80%",
        end: "top 90%",
        // markers: true,
      },
    });
    tl.fromTo(
      mainContainer.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
    if (shouldBtnsAnimate) {
      tl.fromTo(
        iconRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.5 }
      );
      setShouldBtnsAnimate(false);
    }
  }, [activeButtonData, shouldBtnsAnimate]);
  return (
    <div className="w-full relative">
      <img
        ref={iconRef}
        src="/resume-icon.png"
        alt=""
        className="absolute lg:right-0 -top-14 lg:-top-32 w-14 right-0 lg:w-24"
      />
      <div ref={buttonsRef} className="relative z-50">
        <Buttons setActiveButtonData={setActiveButtonData} />
      </div>
      <div
       ref={mainContainer}
      className="w-full h-full relative mb-10 min-h-[350px] border-[1px] border-white border-opacity-20 flex items-center justify-center bg-[#012B45] lg:bg-[#00000021]">
        <div className="w-[90%] lg:w-[90%] mx-auto py-0 lg:py-20">
          {currentData}
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
