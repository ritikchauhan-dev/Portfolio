"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import { Badge } from "@/components/ui/badge"

interface Project {
  src: string
  alt: string
  title: string
  description: string
  badges: string[]
}

interface CarouselProps {
  projects: Project[]
  autoplayDelay?: number
  slideShadows?: boolean
}

export const CardSwipe: React.FC<CarouselProps> = ({
  projects,
  autoplayDelay = 1500,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
    }
  `

  // Remove direct DOM manipulation and use React state for hover effect
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex w-full  items-center rounded-3xl justify-center gap-4">
      <style>{css}</style>
      <div className="w-full rounded-3xl ">
        <Swiper
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={40}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="mr-0">
              <div
                className="w-full ring-4 mt-9  ring-[#C8D5E4] bg-[#D2E0F3] max-w-md shadow-4xl shadow-[#0a192e] rounded-3xl group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden  border-b-2 rounded-3xl">
                  <a
                    href={project.add}
                    target="_blank"
                    className={`ring-4  ring-cyan-300  p-2 rounded-full shadow-2xl absolute top-40 left-36 text-cyan-100 bg-black/35 font-bold transition-opacity duration-200 ${hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                  >
                    View Project
                  </a>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={320}
                    height={200}
                    className="w-full h-80  object-cover  shadow-4xl"
                  />
                </div>
                <div className="p-4 bg-[#D2E0F3] rounded-b-3xl">
                  <h1 className="text-3xl font-bold text-[#1A2533] pt-4">{project.title}</h1>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="pt-4 flex gap-2 flex-wrap">
                    {project.badges.map((badge, i) => (
                      <Badge key={i} className="bg-cyan-100 text-cyan-800">{badge}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
