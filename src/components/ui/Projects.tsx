import React from 'react'
import { CardSwipe } from "./card-swipe"
import { CardCarousel } from "@/components/ui/card-carousel"

const Projects = () => {
    const images = [
        { src: "/4.png", alt: "Image 1" },
        { src: "/5.png", alt: "Image 2" },
        { src: "/6.png", alt: "Image 3" },
        { src: "/7.png", alt: "Image 4" },
        { src: "/en1.png", alt: "Image 5" },
        { src: "/1.png", alt: "Image 6" },
        { src: "/2.png", alt: "Image 7" },
        { src: "/3.png", alt: "Image 8" },
        { src: "/pic.png", alt: "Image 9" },
        { src: "/post2.png", alt: "Image 10" },
        { src: "/post3.png", alt: "Image 11" },
        { src: "/tic2.png", alt: "Image 12" },
        { src: "/tic3.png", alt: "Image 13" },
    ]

    const projects = [
        {
            src: "/4.png",
            alt: "Image 1",
            title: "K72 Project",
            description: "a fully responsive React website using React + Vite + TailwindCSS with smooth GSAP animations and Lenis scrolling effects.",
            badges: ["ReactJS", "Tailwind CSS", "javaScript", "Lenis", "Gsap"],
            add: "https://k72-website-jkki.onrender.com/",
        },
        {
            src: "/card1.png",
            alt: "Image 1",
            title: "Personal Portfolio",
            description: "A responsive, animated portfolio website designed to showcase skills and projects with modern UI/UX principles.",
            badges: ["NextJS", "Tailwind CSS", "TypeScript"],
            add: "https://k72-website-jkki.onrender.com/",
        },
        {
            src: "/card2.png",
            alt: "Image 2",
            title: "Ochi design Studio",
            description: "A high-fidelity clone of the Ochi Design agency website with smooth animations and a fully responsive layout.",
            badges: ["React.js", "Tailwind CSS", "JavaScript"],
            add: "https://k72-website-jkki.onrender.com/",
        },
        {
            src: "/card3.png",
            alt: "Image 3",
            title: "Tic Tac Toe Game",
            description: "A simple and fun browser-based two-player Tic Tac Toe game, Interactive win detection logic, Lightweight modular JavaScript code.",
            badges: ["HTML", "CSS", "JavaScript"],
            add: "https://lnkd.in/gqX_7N47",
        },
        {
            src: "/card4.png",
            alt: "Image 4",
            title: "todo App",
            description: "A feature-rich task management app built to practice state management and server-side rendering (SSR), Add, edit, and delete tasks.",
            badges: ["NEXTJS", "TAILWIND CSS", "JAVASCRIPT"],
            add: "https://k72-website-jkki.onrender.com/",
        },
    ]

    return (
        <div id='projects' className='w-full box-border bg-blue-100 px-4 md:px-20 py-12  capitalize relative'>
            <h1 className='text-[10vw] sm:text-5xl xl:text-7xl text-center font-bold text-[#1A2537]'>Featured Projects</h1>
            <p className="text-[5vw] md:text-[3vw] xl:text-[1.9vw] leading-tight text-center font-bold pb-20 text-gray-600 py-7">
                Here are some of my recent projects that showcase my skills and creativity
            </p>
            <CardSwipe projects={projects} autoplayDelay={2000} slideShadows={false} />
            <CardCarousel
                images={images}
                autoplayDelay={2000}
                showPagination={true}
                showNavigation={true}
            />
        </div>
    )
}

export default Projects
