'use client'
import { useEffect, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiGreensock, SiRedux } from 'react-icons/si'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "HTML", percent: 90, icon: <FaHtml5 className="text-orange-600 text-xl" /> },
  { name: "CSS", percent: 90, icon: <FaCss3Alt className="text-blue-600 text-xl" /> },
  { name: "JavaScript", percent: 85, icon: <FaJs className="text-yellow-400 text-xl" /> },
  { name: "React", percent: 85, icon: <FaReact className="text-cyan-400 text-xl" /> },
  { name: "Redux", percent: 90, icon: <SiRedux className="text-purple-600 text-xl" /> },
  { name: "TypeScript", percent: 70, icon: <SiTypescript className="text-blue-500 text-xl" /> },
  { name: "Next.js", percent: 75, icon: <SiNextdotjs className="text-black dark:text-white text-xl" /> },
  { name: "GSAP", percent: 85, icon: <SiGreensock className="text-green-500 text-xl" /> },
]

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const items = gsap.utils.toArray('.skill-item')

    gsap.from(items, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 50%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 2,
      stagger: 0.4,
      ease: 'power3.out',
    })
  }, [])

  return (
    <main
      ref={containerRef}
      className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-[1100px] mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-mono text-center mt-1 text-gray-800 dark:text-white">
        My Skills
      </h2>
      <hr className="w-40 mx-auto mt-2 mb-6 border-violet-400" />

      <div className="flex flex-col gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item flex items-center gap-4 flex-wrap">
            <div className="w-48 flex items-center gap-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform">
              {skill.icon}
              {skill.name}
            </div>
            <div className="flex-1 min-w-[200px] h-6 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
              <div
                style={{ width: `${skill.percent}%` }}
                className="h-full bg-clip bg-gradient-to-r from-pink-300 to-violet-600 rounded transition-all duration-1000 ease-out"
              />
            </div>
            <span className="w-12 text-sm text-gray-500 dark:text-gray-400 text-right">
              {skill.percent}%
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
