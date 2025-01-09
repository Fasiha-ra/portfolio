import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const AboutSection = () => {
  const mainContainer = useRef(null);
  const imgRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 40%",
        end: "top 50%",
        // markers: true,
      },
      stagger: 0.2,
    });
    tl.fromTo(
      mainContainer.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.4 }
    );
    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 2 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.inOut", delay: 0.1 }
    );
    tl.fromTo(
      rightRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.4, delay: 0.1 }
    );
  }, []);

  return (
    <div className="py-3 lg:py-16 h-full flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-10 w-full">
      {/* Left */}

      <div
        ref={mainContainer}
        className="w-full lg:w-1/2 relative z-[1] before:bg-about-img before:bg-contain before:bg-no-repeat before:rounded-full before:w-full before:h-full lg:before:w-[450px] before:z-[-1]  lg:before:h-[450px] before:inline-block before:absolute  before:left-1/2 before:top-[55%] sm:before:top-1/2 lg:before:translate-x-[-50%] before:translate-x-[-50%] before:translate-y-[-50%] "
      >
        <img
          ref={imgRef}
          src="/hero.jpg"
          alt=""
          className="lg:w-[80%] mb-20  lg:ml-12 rounded-full"
        />
      </div>

      {/* Right */}
      <div
        ref={rightRef}
        className="lg:w-1/2 gap-6 flex flex-col items-center justify-center w-full text-center lg:text-start lg:justify-start lg:items-start"
      >
        <h2 className="bg-text-gradient bg-clip-text inline-block font-bold uppercase text-transparent text-xl ">
          About Me
        </h2>
        <h1 className="text-2xl sm:text-4xl text-white font-bold">
          I can develop
          <br className="xs:block hidden" /> that help people
        </h1>
        <p className="inline-block w-full  lg:w-[90%] opacity-80 text-sm lg:text-base leading-6 text-white">
          Hi, my name is Fasiha and Experienced in building user-friendly and
          responsive web interfaces. Eager and results-oriented developer with
          strong foundation in HTML, CSS, JavaScript, React JS, Next JS,Tailwind MUI and
          Styled-Components. Passionate about learning new technologies and
          contributing to a collaborative development environment.
        </p>
        <div className=" flex items-center flex-col lg:flex-row gap-5 mt-2 border-b-[1px] border-b-zinc-400 border-opacity-50 w-full pb-4">
          <div className="w-16 h-16 rounded-full inline-block bg-dark-blue">
            <img src="/react.png" alt="" className="p-2" />
          </div>
          <div className="text-white">
            <h1 className="text-xl lg:text-2xl inline-flex gap-x-2 font-bold mb-1 h-fit">
              <span className="text-lg xs:text-xl sm:text-2xl  font-bold">
                React{" "}
              </span>
              <span className="text-lg xs:text-xl sm:text-2xl  font-bold">
                Developer
              </span>
            </h1>
          </div>
        </div>
        <div className=" flex items-center gap-5 lg:flex-row flex-col  w-full pb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white overflow-hidden">
            {/* <i class="ri-stack-fill text-4xl text-white"></i> */}
            <img src="/nextjs.png" alt="" className="w-full h-full" />
          </div>
          <div className="text-white">
            <h1 className="text-2xl font-bold inline-flex gap-x-2">
              <span className="text-lg xs:text-xl sm:text-2xl font-bold">
                NextJs
              </span>
              <span className="text-lg xs:text-xl sm:text-2xl font-bold">
                Developer
              </span>
            </h1>
            {/* <h3 className="text-base lg:text-lg opacity-70">
              Level Two Seller - Fiverr
            </h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
