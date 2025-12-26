import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1Image from "../assets/profile3.jpg";
import project2Image from "../assets/profile4.png";




const projects = [
  {
    title: "Student Internship Management System",
    description:
      "A web-based platform that bridges the gap between companies and students by streamlining the internship process. Companies can post opportunities, and students can explore and apply based on skills and interests. It promotes career growth and industry-academia collaboration.",
    techStack: ["React", "Tailwind", "FastAPI", "MongoDB"],
    github: "https://github.com/KalyankumarKummara/SIMS-Project",
    demo: "https://studentinternshipmanagementsystem.netlify.app",
    image: project2Image,
  },
{
    title: "DataBridge",
    description:
      "This was my first project, developed to gain hands-on experience in building both the frontend and backend, integrating them seamlessly, and working with a database to store and retrieve data for displaying within the application.",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript", "FastAPI", "MongoDB"],
    github: "https://github.com/KalyankumarKummara/First-Web-Project",
    demo: "https://first-web-project-vdqu.onrender.com/",
    image: project1Image,
  },
];

const ProjectItem = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-10 py-16`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Image */}
      <motion.div
        className="relative w-full md:w-5/12 overflow-hidden rounded-2xl shadow-lg border border-white/10 bg-gray-900/40 backdrop-blur-lg flex justify-center"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="max-w-full max-h-full object-contain"
        />
      </motion.div>


      {/* Content */}
      <motion.div
        className="w-full md:w-7/12 space-y-6"
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          {project.title}
        </h3>
        <p className="text-gray-300 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-gray-800/50 backdrop-blur-sm rounded-full text-cyan-300 border border-cyan-400/20 hover:bg-cyan-500/10 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-gray-800/50 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 font-medium hover:opacity-90 transition"
          >
            <FaExternalLinkAlt />
             {project.title === "Currency Converter App" ? "Download APK" : "Live Demo"}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="projects"
      className="relative  px-4 md:px-8 bg-gradient-to-b from-gray-250 to-gray-250 overflow-hidden"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl -z-10" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5 -z-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8 mb-4 bg-gradient-to-r pb-4 from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
           My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mx-auto text-lg"
        >
          A showcase of my recent work — crafted with passion, precision, and a
          touch of creativity.
        </motion.p>
      </div>

      {/* Project Items */}
      <div className="max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
