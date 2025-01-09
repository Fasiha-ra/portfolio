import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
const Footer = () => {
  const mainContainer = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 100%",
        end: "top 100%",
        // markers: true,
      },
    });
    tl.fromTo(
      mainContainer.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.3 }
    )
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 1.5 },
      { opacity: 1, scale: 1, duration: 0.6, }
    );
  }, []);

  return (
    <footer
      ref={mainContainer}
      id="footer"
      className=" w-full text-center lg:py-8 py-4  text-white bg-[#003D63] "
    >
      <h1 ref={textRef} className="text-sm lg:text-lg">
        © Copyright 2024{" "}
        <a href="#" className=" text-[#ff014f] font-bold ">
          Fasiha
        </a>
        . All Rights Reserved by Fasiha
      </h1>
    </footer>
  );
};

export default Footer;
