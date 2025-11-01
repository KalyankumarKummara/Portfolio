import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePic from "../assets/profile.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const imageVariants = {
    hidden: {
      rotateY: 180,
      opacity: 0,
      scale: 0.5,
      x: -100
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col sm:flex-row items-center gap-10 text-white max-w-5xl mx-auto px-6 py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.div
        className="flex justify-center sm:w-1/2 perspective-1000"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.2
            }
          }
        }}
      >
        <motion.img
          src={profilePic}
          alt="Kalyankumar"
          className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-2xl shadow-lg border-4 border-cyan-400 cursor-pointer transform-style-preserve-3d"
          variants={imageVariants}
          whileHover={{
            scale: 1.05,
            rotateY: 10,
            boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.3)",
            transition: { duration: 0.4 }
          }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>

      <motion.div
        className="sm:w-1/2"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 0.3
            }
          }
        }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 text-cyan-400"
          variants={textVariants}
          custom={0}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 leading-relaxed mb-4"
          variants={textVariants}
          custom={1}
        >
          Hello! I'm <span className="font-semibold text-white">Kalyankumar</span>, a passionate Computer Science student at Jawaharlal Nehru Technological University Anantapur (JNTUA). I love turning complex problems into simple, beautiful, and intuitive solutions.
        </motion.p>

        <motion.p
          className="text-gray-400 leading-relaxed mb-4"
          variants={textVariants}
          custom={2}
        >

          My interests lie in full-stack web development and artificial intelligence. I enjoy learning new technologies and constantly challenge myself to improve. When I’m not coding, you’ll find me exploring new tools and designing UI concepts.
          
          </motion.p>

        <motion.p
          className="text-gray-400 leading-relaxed mb-4"
          variants={textVariants}
          custom={3}
        >
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto sm:mx-0">
            I am currently focused on sharpening my skills in full-stack development to build expertise in creating dynamic and scalable web applications. My goal is to develop seamless, user-centric solutions that are both functional and engaging.</p>
        </motion.p>
      </motion.div>
    </motion.section>
  );
}