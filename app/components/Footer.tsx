'use client';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin,FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-10 border-b border-gray-700 pb-6">
       
        <div>
          <h1 className="text-3xl font-extrabold mb-3 text-white">FAIZ FAVAZ</h1>
          <p className="text-gray-400">React Front-End Developer crafting engaging UIs and animations.</p>
        </div>

      
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/project" className="hover:text-white">Projects</Link></li>
            <li><Link href="/skills" className="hover:text-white">Skills</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-xl font-bold mb-3">Get in Touch</h2>
          <p className="text-gray-300 mb-2"><span className='text-xl'>📨</span> Email: faizfavaz7@gmail.com</p>
          <p className="text-gray-300 mb-4">Phone: +91 7034514646</p>
          
      
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.linkedin.com/in/faiz-favaz-7aa75b323/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform"> <FaLinkedin /></a>
            <a href="https://github.com/Faizfavaz4646" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform"> <FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform"><FaInstagram /></a>
            <a href="https://wa.me/917034514646" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition-transform"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

     
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Faiz Favaz. All rights reserved.
      </div>
    </footer>
  );
}
