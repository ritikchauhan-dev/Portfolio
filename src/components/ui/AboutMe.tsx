import React from 'react'
import WrapButton from "./wrap-button"

const AboutMe = () => {
    return (
        <div id='about' className='min-h-screen box-border w-[100%] bg-blue-100 pt-20  relative'>
            <h1 className='text-5xl px-2 font-bold sm:px-10 pb-15 text-[#1A2537] '>About Me</h1>
            <div className=' flex  lg:mt-8 items-center gap-5 xl:justify-around px-2 xl:px-0 text-gray-700 text-xl '>
                <div className='xl:h-50 w-full xl:w-[50%] text-xl  font-semibold lg:tracking-widest'><p >{`I'm a self-motivated Front-End Developer who has been practicing and improving my skills for the last 2 years. I specialize in creating responsive, user-friendly websites using HTML, CSS, JavaScript, React.JS, Next.JS and Tailwind CSS. I enjoy solving problems, learning new tools, and building projects that look great on all devices. As a fresher, I'm eager to join a team where I can contribute, learn from experienced developers, and grow into a full-stack developer in the future.`}</p></div>
                <div className='xl:h-70 xl:w-[30%] hidden rounded-2xl lg:flex justify-center items-center bg-[#1A2537]'>
                    <div className='h-50 w-50 rounded-full bg-gradient-to-br from-slate-700 to-cyan-500 shadow-lg shadow-cyan-400/25 text-9xl pt-7 text-center text-white aling-center'>RC</div>
                </div>
            </div>
            <h2 className="text-3xl px-2 sm:px-10 text-[#1A2537] font-bold pt-10 sm:pt-20 mb-2">Grab My Resume-</h2>
            <WrapButton className='mx-2  sm:mx-10  mb-20' href="" >
                Resume
            </WrapButton>

        </div>
    )
}

export default AboutMe
