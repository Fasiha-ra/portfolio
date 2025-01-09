import React from "react";
import SideNavbar from "./Components/Side Navbar/SideNavbar";
import Hero from "./Components/Hero/Hero";
import ServicesSection from "./Components/Services Section/ServicesSection";
import PortfolioSection from "./Components/Portfolio Section/PortfolioSection";
import AboutSection from "./Components/About Section/AboutSection";
import ResumeSection from "./Components/Resume Section/ResumeSection";
import TestimonialSection from "./Components/Testimonial Section/TestimonialSection";
import WorkAvailableSection from "./Components/Work Available Section/WorkAvailableSection";
import ContactSection from "./Components/Contact Section/ContactSection";
import NavMobile from "./Components/Side Navbar/NavMobile";
import Footer from "./Components/Footer/Footer";
import  { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div
    id="app"
    className="block lg:h-full h-fit lg:flex items-start lg:flex-row justify-between">
      <div className="w-full lg:bg-dark-blue lg:w-[10%] lg:h-screen lg:sticky lg:top-0 ">
        <SideNavbar />
        <NavMobile />
      </div>
      <Toaster/>
      <div id="main" className="h-full overflow-y-hidden">
        <section id="Home" className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section id="Services" className=" min-h-screen">
          <ServicesSection />
        </section>
        <section id="Portfolio" className="min-h-screen ">
          <PortfolioSection />
        </section>
        <section id="About" className="min-h-screen ">
          <AboutSection />
        </section>
        <section id="Resume" className="min-h-screen relative  pt-14 lg:pt-40 ">
          <ResumeSection />
        </section>
        <section className="min-h-screen relative pt-8">
          <span className="inline-block w-[90%] lg:w-[80%] absolute top-0 lg:left-[40%] lg:translate-x-[-40%]  mx-auto bg-line-gradient h-[1px]"></span>
          <TestimonialSection />
        </section>
        <section className="lg:min-h-screen relative ">
          <WorkAvailableSection />
        </section>
        <section id="Contact" className="min-h-screen  relative py-20 ">
          <ContactSection />
        </section>
       <Footer/>
      </div>
    </div>
  );
};

export default App;
