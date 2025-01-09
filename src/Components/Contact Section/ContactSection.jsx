import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactDetails } from "../../Constants/contact_details";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const mainContainer = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publickKey = import.meta.env.VITE_PUBLIC_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      console.log("Name:", formData);

      await emailjs.send(serviceId, templateId, formData);

      toast.success("Email successfully sent.");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    emailjs.init(publickKey);
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top 40%",
        end: "top 50%",
      },
    });

    tl.fromTo(
      leftRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
    tl.fromTo(
      rightRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, []);

  return (
    <div
      ref={mainContainer}
      className="w-full h-full flex flex-col lg:flex-row gap-20 lg:gap-32 items-center"
    >
      <form action="" onSubmit={handleSubmit} className="lg:w-[60%]">
        <div
          ref={leftRef}
          className="w-full h-full text-white gap-4 bg-[#012B45] lg:bg-[#00000031] flex flex-col text-base p-[10px] py-8 xs:p-5 sm:p-8 lg:p-16 items-start"
        >
          <h1 className="text-4xl font-bold">Let's talk?</h1>
          <p className="w-full">
            It's all about the humans behind a brand and those experiencing it,
            but we're right there. In the middle, performance is quick.
          </p>
          <input
            type="text"
            className="w-full bg-[#00000031] border-[#ffffff31] border-[1px] px-3 placeholder:opacity-80 py-4 duration-300 focus:shadow-input-focus outline-none rounded-sm placeholder:text-white"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <div className="flex justify-between w-full gap-5">
            <input
              type="email"
              className="w-full bg-[#00000031] border-[#ffffff31] border-[1px] px-3 placeholder:opacity-80 py-4 duration-300 focus:shadow-input-focus outline-none rounded-sm placeholder:text-white"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              type="number"
              className="w-full bg-[#00000031] border-[#ffffff31] border-[1px] px-3 placeholder:opacity-80 py-4 duration-300 focus:shadow-input-focus outline-none rounded-sm placeholder:text-white"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
          <textarea
            className="w-full bg-[#00000031] border-[#ffffff31] border-[1px] p-4 placeholder:opacity-80 duration-300 focus:shadow-input-focus outline-none rounded-sm placeholder:text-white max-h-[180px]"
            placeholder="Tell Us About Your Project*"
            cols={30}
            rows={10}
            name="message"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <button
            disabled={loading}
            className="bg-light-pink text-base lg:text-lg text-white font-bold px-8 lg:px-12 py-4 rounded-full before:w-72 before:scale-0 hover:before:scale-100 before:duration-300 before:h-32 before:bg-[#00c0ff] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] relative before:z-[-1] z-10 overflow-hidden before:skew-x-[20deg] mt-4"
            type="submit"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <div
        ref={rightRef}
        className="flex flex-col items-center lg:items-start gap-12 lg:gap-20"
      >
        {contactDetails.map((data, i) => (
          <div
            key={i}
            className="flex items-center text-center lg:text-start lg:items-start flex-col lg:flex-row gap-5"
          >
            <div
              className={`${data.bg_color} w-16 rounded-md h-16 flex items-center justify-center text-white`}
            >
              <i className={`${data.icon} text-3xl`}></i>
            </div>
            <div className="text-white">
              <a
                href={`mailto:${data.details}`}
                className="text-base uppercase opacity-70 hover:cursor-pointer"
              >
                {data.title}
              </a>
              <h3 className="text-lg mt-1 lg:mt-3 font-bold ">
                {data.details}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
