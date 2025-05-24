import React from 'react';
import { motion } from 'framer-motion';
import profile from "../assets/ashok-image.jpg"
function Hero() {
  return (
    <section id="hero" className= "min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Hi, I'm <span className="text-yellow-300">Ashok Chavala</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl mb-8"
        >
          Front-End Developer | React & TypeScript Enthusiast
        </motion.p>

        <div className="mb-8">
          <motion.img
            src={profile}
            alt="Ashok Chavala"
            className="rounded-full w-32 h-32 mx-auto object-cover shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </div>

        {/* Button Animation */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition duration-300 hover:bg-yellow-300"
        >
          See My Work
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
