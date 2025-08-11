'use client';

import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_iur0c4i',
        'template_6wvvqxx',
        formRef.current,
        'OeNnIPi9lHVN1dl3f'
      )
      .then(
        (result) => {
          console.log('Message Sent:', result.text);
          alert('✅ Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('Message failed:', error);
          alert('❌ Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-100 px-4 py-16 flex items-center justify-center shadow-2xl"
    >
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 font-mono">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full mt-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
