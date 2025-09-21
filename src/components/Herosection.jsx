import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import profileImage from "../assets/profile1.jpg";
import ShareButton from "./ShareButton";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(true);
  const roles = [
    "Full-Stack Developer",
    "Mobile Application Developer",
    "AI Enthusiast",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col sm:flex-row items-center text-white max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="sm:w-1/2 flex justify-center mb-10 sm:mb-0"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-cyan-500 p-1">
          {imageLoaded ? (
            <img
              src={profileImage}
              alt="Kalyankumar"
              className="w-full h-full object-cover rounded-full transition-all duration-500"
              onError={() => setImageLoaded(false)}
            />
          ) : (
            <div className="w-full h-full bg-cyan-400/10 rounded-full flex items-center justify-center">
              <span className="text-2xl text-cyan-400 font-bold">KK</span>
            </div>
          )}
          <div className="absolute inset-0 rounded-full border-2 border-sky-400 animate-pulse" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="sm:w-1/2 text-center sm:text-left"
      >
        <p className="text-cyan-400 text-lg mb-4 font-mono animate-pulse">
          Hello ! I'm
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Kalyankumar
        </h1>

        <motion.h2
          key={currentRoleIndex}
          className="text-2xl sm:text-3xl text-gray-300 font-semibold mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {roles[currentRoleIndex]}
        </motion.h2>

        <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto sm:mx-0">
          I specialize in building user-friendly websites and mobile applications using modern technologies. With a strong passion for full-stack development, mobile app development, and AI, I bring hands-on experience across both frontend and backend. I am continuously exploring new tools and frameworks to enhance my expertise and deliver seamless, scalable, and innovative digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all whitespace-nowrap "
          >
            Explore My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`${import.meta.env.BASE_URL}Kalyankumar.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all whitespace-nowrap"
          >
            View Resume
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-400/50 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all "
          >
            Let's Connect
          </motion.a>

          <ShareButton />
        </div>
      </motion.div>
    </section>
  );
}
