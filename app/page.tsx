'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profile from '@/app/assets/profile.jpeg';
import developer from '@/app/assets/developer.png'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
export default function Home() {
  return (
   <>
   <Navbar />
   <main className="min-h-screen flex flex-col items-center justify-center px-6 gap-10">


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl p-6 shadow-2xl rounded-lg mt-25"
      >
       
        <div className="w-full md:w-1/2 flex justify-center mb-20 md:mb-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="border border-gray-100 rounded-full p-2 shadow-xl bg-gradient-to-r from-pink-200 to-violet-400 bg-white"
          >
            <Image
              src={profile}
              alt="Faiz Favaz"
              width={200}
              height={200}
              className="rounded-full"
            />
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="w-full md:w-1/2 border border-gray-50 shadow-2xl p-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Hi, I am<br></br> <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400">FAIZ FAVAZ</span></h1>
          <div className="flex ">
            <Image
            src={developer}
            alt="image"
            width={50}
            height={50}
            className=''
            ></Image>
           <p className='mt-5 mx-2 text-2xl font-mono'>Front-End Developer</p>
          </div>
        </motion.div>
      </motion.div>
    <About />
    <Hero />
    <Projects />
    <Contact />
    
    </main>
      
    <Footer />
    </>
  );
}
