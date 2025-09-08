import React, { useEffect, useRef } from 'react'
import FlipLink from "./text-effect-flipper"

const Home = () => {
  const nameRef = useRef<HTMLSpanElement>(null)
  const name = 'ritik chauhan'

  useEffect(() => {
    let i = 0
    let timeoutId: NodeJS.Timeout

    function typeWriter() {
      if (nameRef.current && i < name.length) {
        nameRef.current.textContent = name.substring(0, i + 1)
        i++
        timeoutId = setTimeout(typeWriter, 150)
      }
    }

    timeoutId = setTimeout(typeWriter, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div id='home' className='pt-50 sm:pt-30 box-border lg:pt-14 min-h-screen w-full shadow-2xl shadow-cyan-100 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#0ea5e9_100%)] text-center gap-5 sm:gap-10 text-white flex flex-col items-center capitalize justify-center'>
      <h1 className='text-[9vw] sm:text-7xl lg:text-8xl font-bold '> Hi, I'm <span className="typing-animation text-neutral-950" ref={nameRef}></span></h1>
      <h2 className=' text-pink-200 text-[7vw] sm:text-[4vw] lg:text-5xl font-bold '>Frontend Developer & UI/UX Enthusiast</h2>
      <h3 className='text-[5vw] sm:text-[1.8vw] lg:text-2xl font-bold px-4 break-words '>I create beautiful, responsive web experiences that users love. Passionate about clean code and pixel-perfect designs.</h3>
      <div className='flex  text-xl pb-20 font-bold pt-20 gap-4'>



        <button type="button" onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        }} className='bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-4xl text-[#1e293b] capitalize px-4 py-3 text-sm'>view my work</button>



        <button type="button" onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }} id='btn-con' className='bg-[#1B4562] border-cyan-500  border-2 hover:bg-cyan-500 hover:shadow-cyan-500/50 hover:shadow-2xl rounded-4xl text-cyan-500 hover:text-[#1e293b] capitalize px-8 py-3  text-sm '>get in touch</button>



      </div>
    </div>
  )
}

export default Home
