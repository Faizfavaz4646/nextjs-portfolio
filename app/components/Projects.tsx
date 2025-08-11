'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "@/app/assets/logo.png";
import inter from "@/app/assets/inter.png";
import product from "@/app/assets/product.png";
import cart from "@/app/assets/cart.png";
import details from "@/app/assets/details.png";
import admin from "@/app/assets/admin.png";
import manage from "@/app/assets/manage.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Elite Eleven', description: 'A football e-commerce platform with cart, wishlist, and orders.', image: logo },
  { id: 2, title: 'Elite Eleven', description: 'Interface of Elite Eleven', image: inter },
  { id: 3, title: 'Elite Eleven', description: 'React-based product list with search engine.', image: product },
  { id: 4, title: 'Elite Eleven', description: 'Cart page of Elite Eleven.', image: cart },
  { id: 5, title: 'Elite Eleven', description: 'Product details page.', image: details },
  { id: 6, title: 'Elite Eleven', description: 'Admin dashboard of Elite Eleven.', image: admin },
  { id: 7, title: 'Elite Eleven', description: 'Admin Product Manage Page.', image: manage },
];

export default function Projects() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            once: false,
            // markers: true, // enable this to debug
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-12 bg-white text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-black font-mono mb-10 text-center">⚽ My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-250 transition duration-500 opacity-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
