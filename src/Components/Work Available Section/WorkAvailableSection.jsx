// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const WorkAvailableSection = () => {
  const mainContainer = useRef(null);
  const heading1 = useRef(null);
  const buttonRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 60%",
        end: "top 70%",
        // markers: true,
      },
      stagger: 0.3,
    });
    tl.fromTo(
      mainContainer.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
    tl.fromTo(
      img2Ref.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
    tl.fromTo(
      heading1.current,
      { opacity: 0, scale: 2 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.inOut" }
    );
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.inOut" }
    );
    tl.fromTo(
      img1Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div
      ref={mainContainer}
      className="h-full w-full py-14 lg:py-32 bg-[#00000021]"
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          ref={heading1}
          className="text-white font-bold text-3xl lg:text-6xl leading-tight lg:w-1/2 w-[80%] text-center my-10"
        >
          I&apos;m{" "}
          <span className="text-white font-bold text-3xl lg:text-6xl before:bg-light-pink before:absolute before:bottom-4 before:z-[-1] z-10  before:left-0 relative before:w-full before:h-2 before:opacity-60">
            Available
          </span>{" "}
          For Freelance Work
        </h1>
        <button
          ref={buttonRef}
          className="bg-light-pink text-lg text-white font-bold lg:px-14 lg:py-4 px-8 py-3 rounded-full before:w-72 before:scale-0 hover:before:scale-100 before:duration-300 before:h-32 before:bg-[#00c0ff] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] relative before:z-[-1] z-10 overflow-hidden before:skew-x-[20deg]"
       onClick={()=>(window.open('https://linkedin.com/in/fasiha-rehmat-ali-715037279', '_blank'))}
       >
        Hire Me Now
        </button>
      </div>
      <img
        ref={img1Ref}
        src="/worksec-img.png"
        alt=""
        className="absolute w-[150px] lg:w-[300px] sm:left-5 sm:w-[200px] left-0 lg:left-10 -bottom-14 lg:bottom-0"
      />
      <img
      ref={img2Ref}
        src="/worksec-img2.png"
        alt=""
        className="absolute right-3 lg:w-fit w-[80px] lg:right-10 -top-5"
      />
    </div>
  );
};

export default WorkAvailableSection;
