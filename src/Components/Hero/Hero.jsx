import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const left = useRef(null);
  const heading1 = useRef(null);
  const heading2 = useRef(null);
  const button = useRef(null);
  const rightImg2 = useRef(null);
  const rightImg = useRef(null);
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      left.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: 0.2,
        delay: 1.5,
      }
    )
      .fromTo(
        [heading1.current, heading2.current, button.current],
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2 }
      )
      .fromTo(
        rightImg2.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5 }
      )
      .fromTo(
        rightImg.current,
        { opacity: 0, scale: 1.5 },
        { opacity: 1, scale: 1, duration: 0.4 }
      )
      .fromTo(
        [icon1.current, icon2.current, icon3.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.2, ease: "power1.in" }
      );
  }, []);

  return (
    <div className="w-full h-full pt-8 sm:pt-32 flex lg:flex-row flex-col relative items-center justify-between gap-10 lg:gap-0 mb-5">
      {/* Left */}
      <div
        ref={left}
        className="flex flex-col lg:items-start justify-center lg:justify-start items-center w-full lg:w-1/2"
      >
        <h1
          ref={heading1}
          className="flex items-center text-4xl md:text-5xl lg:text-6xl font-bold text-white "
        >
          Hi
          <span id="hand-img">
            <img
              src="/hand.png"
              alt=""
              className="h-8 lg:h-12 mx-4 origin-center "
            />
          </span>
          I'm Fasiha
        </h1>
        <h3
          ref={heading2}
          className="text-2xl sm:text-3xl text-white font-bold before:absolute before:min-w-[98%] w-fit my-4 sm:my-8 before:bg-light-pink before:h-[6px] relative before:left-0 before:bottom-1 z-10 before:-z-10"
        >
          {/* App Developer */}
          <Typewriter
            options={{
              strings: [
                "ReactJs Developer",
                "NextJs Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 20,
              wrapperClassName: "font-bold",
              pauseFor: 500,
            }}
          />
        </h3>

        <a ref={button} href="/resume.pdf" download={true}>
          <button className="py-4 mt-8 px-12 bg-dark-blue text-white rounded-full before:bg-light-pink before:w-full before:h-full before:absolute relative before:top-0 before:left-0 hover:before:scale-x-100 before:origin-left before:scale-x-0 before:duration-300 overflow-hidden">
            <span className="z-10 relative text-lg font-bold">My Resume</span>
          </button>
        </a>
      </div>

      {/* Right */}
      <div className=" relative ">
        {/* <div className="w-full flex items-center justify-center">
          <img
            src="/hero-3.png"
            alt=""
            className="w-full h-full object-contain hover:scale-105 hover:cursor-pointer duration-500"
          />
        </div> */}
        <div className="w-auto lg:mt-0 mt-8 xs:w-[340px] xs:min-h-[350px]  sm:w-[450px]  relative">
          <img
            src="/hero-bg.png"
            ref={rightImg2}
            alt=""
            className="w-full h-full"
          />
          <img
            ref={rightImg}
            src="/hero.jpg"
            alt="f"
            className="absolute sm:h-[420px] -top-10 rounded-full"
            style={
              {
                // transform:"translate(-50%,-50%)"
              }
            }
          />
        </div>

        <span className="text-white flex flex-col items-start justify-start gap-5 text-2xl absolute lg:-right-5 right-0 top-[30%] lg:top-1/2 font-bold">
          <a ref={icon1} href="" className="hover:-translate-y-1 duration-500">
            <i class="ri-facebook-line"></i>
          </a>
          <a ref={icon2} href="" className="hover:-translate-y-1 duration-500">
            <i class="ri-instagram-line"></i>
          </a>
          <a ref={icon3} href="" className="hover:-translate-y-1 duration-500">
            <i class="ri-youtube-line"></i>
          </a>
        </span>
      </div>

      {/* Right side social icons */}
    </div>
  );
};

export default Hero;
