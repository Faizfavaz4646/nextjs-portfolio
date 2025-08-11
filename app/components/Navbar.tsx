'use client';
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const textRefs = useRef<HTMLElement[]>([]);

  const addToRef = (el: HTMLElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRefs.current, {
      y: -30,
      opacity: 0,
      stagger: 0.2,
      ease: 'bounce.out',
      duration: 1
    });

   
    tl.to(textRefs.current, {
      rotateX: 90,
      duration: 0.5,
      ease: "power2.inOut",
      
    });

    tl.to(textRefs.current, {
      rotateX: 0,
      duration: 0.5,
      ease: "power2.inOut"
    });

    return () => {
      console.log("animation killed");
      tl.kill();
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-6 border bg-gray-900 border-gray-200 shadow-2xl sticky top-0 z-50">
      <Link href="/">
        <h1
          ref={addToRef}
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-400 text-4xl font-serif"
        >
          FAIZ FAVAZ
        </h1>
      </Link>
    </nav>
  );
}
