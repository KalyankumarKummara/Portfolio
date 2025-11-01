import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import fastapilogo from "../assets/FastAPI.png";
import mongodbLogo from "../assets/mongodb.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import bootstrapLogo from "../assets/Bootstrap.png";
import tailwindLogo from "../assets/Tailwind Css.png";
import MySQLLogo from "../assets/MySQL.png";
import Sasslogo from "../assets/Sass.png";
export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const skills = [
    { img: htmlLogo, name: "HTML5" },
    { img: cssLogo, name: "CSS3" },
    { img: jsLogo, name: "JavaScript" },
    { img: bootstrapLogo, name: "Bootstrap" },
    { img: reactLogo, name: "React" },
    { img: fastapilogo, name: "FastAPI" },
    { img: tailwindLogo, name: "Tailwind CSS" },
    { img: MySQLLogo, name: "MySQL" },
    { img: mongodbLogo, name: "MongoDB" },
    { img: Sasslogo, name: "Sass" },
    { img: gitLogo, name: "Git" },
    { img: githubLogo, name: "GitHub" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50 scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.05
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(34 211 238 / 0.2)"
              }}
              className="group flex flex-col items-center justify-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-20 h-20 mb-3">
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  className="w-full h-full object-contain rounded-md"
                  loading="lazy"
                  whileHover={{
                    rotate: -10,
                    scale: 1.1,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10
                    }
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15
                  }}
                />
              </div>
              <motion.span
                className="text-base font-medium text-gray-300 group-hover:text-cyan-400 transition-colors text-center"
                whileHover={{ scale: 1.1 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}