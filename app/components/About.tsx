'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        lineRef.current,
        { width: '0%' },
        { width: '50%', duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.4'
      );
  }, []);

  return (
    <section
      id="about"
      className="h-auto px-6 sm:px-10 md:px-20 lg:px-32 py-16 rounded-lg shadow-2xl bg-white dark:bg-zinc-900"
    >
      <h2 ref={headingRef} className="text-4xl font-mono text-center text-zinc-800 dark:text-white">
        About Me
      </h2>

      <hr
        ref={lineRef}
        className="h-1 mx-auto mt-4 mb-6 bg-violet-400 border-none rounded-full w-0"
      />

      <p
        ref={paraRef}
        className="text-lg max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        I&apos;m Faiz Favaz, a passionate front-end developer with a strong eye for clean design, responsive layouts, and performance optimization. I love bringing ideas to life through sleek, interactive user interfaces that are fast, accessible, and user-friendly.
        <br /><br />
        I&apos;m constantly learning and exploring modern tools like React, Tailwind CSS, and GSAP to stay ahead in the ever-evolving web development world. My goal is to craft digital experiences that not only look good but also feel smooth and intuitive.
        <br /><br />
        Whether it&apos;s improving user engagement or optimizing for performance, I enjoy solving real-world problems through code — one pixel at a time.
      </p>
    </section>
  );
}
