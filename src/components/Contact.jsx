import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(Array(3).fill(false));
  const { scrollYProgress } = useScroll({ target: containerRef });
  const rotateX = useTransform(scrollYProgress, [0, 1], [3, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 30px rgba(56, 189, 248, 0.6)",
      transition: { 
        duration: 0.4,
        scale: { type: "spring", stiffness: 300, damping: 10 }
      }
    },
    tap: { scale: 0.97 }
  };

  // Icon animation variants
  const iconVariants = {
    rest: { 
      rotate: 0,
      x: 0,
      transition: { duration: 0.7, type: "spring" }
    },
    hover: {
      rotate: [0, 30, -20, 10, 0],
      x: [0, 15, -10, 5, 0],
      transition: { 
        duration: 1.2, 
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  // Spark animation variants
  const sparkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1.8, 0],
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        times: [0, 0.5, 1]
      }
    })
  };

  return (
    <motion.section 
      id="contact" 
      ref={containerRef}
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
      style={{ rotateX, scale }}
    >
      <motion.div 
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.4), transparent 40%)',
            'radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.4), transparent 40%)'
          ],
          backgroundSize: ["200% 200%", "300% 300%"]
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 sm:space-y-12 md:space-y-16 backdrop-blur-2xl rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12 bg-white/5 border border-white/10 shadow-2xl"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.2
                }
              }
            }}
            className="text-center space-y-4 sm:space-y-6 md:space-y-8"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight"
              animate={isHovered ? { letterSpacing: "2px" } : {}}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Let's Collaborate
             
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
              animate={isHovered ? { x: [0, 3, -3, 0] } : {}}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              Have a groundbreaking idea? Let's bring it to life with cutting-edge technology.
            </motion.p>
          </motion.div>

          <motion.form 
            action="https://formspree.io/f/mdkgjvnz"
            method="POST"
            className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {['Name', 'Email', 'Message'].map((field, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 120,
                      damping: 12
                    }
                  })
                }}
                custom={idx}
                className="relative"
                onFocus={() => {
                  const newState = [...isFocused];
                  newState[idx] = true;
                  setIsFocused(newState);
                }}
                onBlur={() => {
                  const newState = [...isFocused];
                  newState[idx] = false;
                  setIsFocused(newState);
                }}
              >
                <motion.label
                  className="absolute left-4 sm:left-6 -top-2 sm:-top-3 px-2 text-xs sm:text-sm font-medium text-cyan-400 bg-[#0a1f44] rounded-full z-10"
                  variants={{
                    inactive: { y: "50%", opacity: 0.5, scale: 0.95 },
                    active: { y: "-120%", opacity: 1, scale: 1 }
                  }}
                  animate={isFocused[idx] ? "active" : "inactive"}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {field}
                </motion.label>
                {field === 'Message' ? (
                  <textarea
                    name="message"
                    placeholder=" "
                    rows="4"
                    className="w-full px-4 py-3 sm:px-6 sm:py-5 bg-white/5 rounded-xl sm:rounded-2xl border-2 border-white/10 focus:border-cyan-400 focus:ring-2 sm:focus:ring-4 focus:ring-cyan-400/20 transition-all placeholder-transparent backdrop-blur-lg resize-none text-white caret-cyan-400 text-sm sm:text-base"
                  />
                ) : (
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    name={field.toLowerCase()}
                    placeholder=" "
                    className="w-full px-4 py-3 sm:px-6 sm:py-5 bg-white/5 rounded-xl sm:rounded-2xl border-2 border-white/10 focus:border-cyan-400 focus:ring-2 sm:focus:ring-4 focus:ring-cyan-400/20 transition-all placeholder-transparent backdrop-blur-lg text-white caret-cyan-400 text-sm sm:text-base"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg relative overflow-hidden mt-4 sm:mt-8 md:mt-12 lg:mt-16"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  variants={iconVariants}
                  animate={isHovered ? "hover" : "rest"}
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </motion.svg>
                Send Message
              </span>
              
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-100%" }}
                animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                transition={{ duration: 1.2, ease: "linear" }}
              />
              
              {/* Particle sparks */}
              {isHovered && [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                  variants={sparkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}
            </motion.button>
          </motion.form>

          <motion.div 
            className="flex justify-center gap-6 sm:gap-8 md:gap-12 mt-8 sm:mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { 
                name: 'GitHub',
                url: 'https://github.com/KalyankumarKummara',
                icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
              },
              { 
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/kalyankumar-kummara-2731b8377',
                icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
              }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles - reduced count on mobile */}
      {[...Array(window.innerWidth < 768 ? 15 : 30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20 hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.8, 1]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.section>
  );
}