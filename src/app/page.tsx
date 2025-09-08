'use client'
import Navbar from '@/components/ui/Navbar'
import Home from '@/components/ui/Home'
import React from 'react'
import AboutMe from '@/components/ui/AboutMe'
import Skills from '@/components/ui/Skills'
import Projects from '@/components/ui/Projects'
import Contact from '@/components/ui/Contact'
import Footer from '@/components/ui/Footer'
import useLenis from "../components/Hooks/UseLenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
// Removed unused imports and function signature for optimization
const page = () => {
  useLenis();

  const pathname = usePathname();
  // Scroll to top whenever route changes or page reloads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className='min-h-screen w-screen box-border  bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#0ea5e9_100%)]'>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
