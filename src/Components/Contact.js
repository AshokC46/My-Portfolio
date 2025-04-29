import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10" >Contact</h2>
      
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <p className="text-gray-700 mb-6">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="flex justify-center gap-6 text-xl text-indigo-600 mb-8">
          <a href="mailto:ashokchavala46@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/AshokC46" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ashokchavala" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        
        <form
          action="https://formspree.io/f/xqaqeegj"  
          method="POST"
          className="space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
