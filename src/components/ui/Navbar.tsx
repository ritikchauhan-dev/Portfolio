
import FlipLink from "./text-effect-flipper"
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const lastScrollTop = useRef(0);
  const navbarHeight = 80; // approx height including your padding (py-5 + content)
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        // Scroll down -> hide navbar (slide up)
        gsap.to(navbarRef.current, {
          duration: 0.3,
          y: -(navbarHeight), // Move it up by its height
          ease: "power1.out",
        });
      } else {
        // Scroll up -> show navbar (slide down)
        gsap.to(navbarRef.current, {
          duration: 0.3,
          y: 0,
          ease: "power1.out",

          // Ensure it stays at the top
        });
      }

      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative ">
      < div
        ref={navbarRef}
        className='flex fixed justify-between box-border w-full bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#0ea5e9_100%)] items-center backdrop-blur-2xl border-white/30 z-50 h-20  px-4 sm:px-10 border-b-4 py-5'
        style={{ top: 0, left: 0, transition: "top 0.3s ease-in-out" }}
      >
        <div className='h-19 w-19 sm:h-18 sm:w-18  rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#0ea5e9_100%)] text-white text-4xl font-bold  text-center relative'><span className='h-full w-full justify-center flex items-center '>RC</span></div>
        <div onClick={() => setShow(true)} className="h-20 w-20  flex items-end-safe sm:hidden justify-center  flex-col gap-1">
          <div className="h-0.5 w-18 bg-black"></div>
          <div className="h-0.5 w-12 bg-black"></div>

        </div>
        <div className=' cursor-default hidden sm:flex gap-4  text-black '>
          <FlipLink href="#home">home</FlipLink>
          <FlipLink href="#about">about</FlipLink>
          <FlipLink href="#skills">skills</FlipLink>
          <FlipLink href="#projects">projects</FlipLink>
          <FlipLink href="#contact">contact</FlipLink>
        </div>
      </div >
      <div className={show ? "bg-[#1f1f1f] block w-full sm:hidden text-white h-[40vh] uppercase  fixed top-0 left-0  z-[999]" : "hidden"}>
        <div className=" h-[6vh]  w-full relative text-[9.5vw] font-semibold flex items-center justify-between px-4 ">
          <div><h1>menu</h1></div>
          <div onClick={() => setShow(false)} className="flex flex-col cross ">
            <div className="h-1.5 w-13 rotate-30  bg-rose-300"></div>
            <div className="h-1.5 w-13  -rotate-30  bg-rose-300"></div>
          </div>
        </div>
        <div className="flex-col w-full h-full  pb-10 items-center  flex">
          <div className="border-t-1 p-4 w-full text-center border-amber-50"><FlipLink href="#home" >home</FlipLink></div>
          <div className="border-t-1 p-4 w-full text-center  border-amber-50"><FlipLink href="#about" >about</FlipLink></div>
          <div className="border-t-1 p-4 w-full text-center border-amber-50"><FlipLink href="#skills" >skills</FlipLink></div>
          <div className="border-t-1 p-4 w-full text-center border-amber-50"><FlipLink href="#projects" >projects</FlipLink></div>
          <div className="border-t-1 border-b-1 p-4 w-full text-center border-amber-50"><FlipLink href="#contact" >contact</FlipLink></div>
        </div>
      </div>
    </div >
  )
}

export default Navbar
