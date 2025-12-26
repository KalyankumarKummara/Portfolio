import React from "react";
import { motion } from "framer-motion";
import exfLogo from "../assets/exf.jpg";
import pictuscodeLogo from "../assets/pictuscode.jpg";

// Container animation for stagger effect
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between each item
    },
  },
};

// Each timeline item animation
const itemVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  const experiences = [
    {
      role: "Fullstack Developer Intern",
      company: "Pictuscode",
      location: "Vellore",
      duration: "May 2025 – Jul 2025",
      points: [
        "Misafir – Airbnb-like website for Turkey users with responsive UI and secure booking system.",
        "Invoice Generation System – Automated invoice creation for office usage with FastAPI backend.",
        "New Cape Hotel Official Website – Designed and developed a modern, user-friendly hotel website.",
        "Technologies used: HTML, CSS, React, Tailwind CSS, Python.",
      ],
      links: [
        { name: "Misafir" },
        { name: "Invoice Generation System"  },
        { name: "New Cape Hotel Official Website"},
      ],
      logo: pictuscodeLogo,
    },
    {
      role: "Python Fullstack Intern",
      company: "Exafluence",
      location: "Tirupati",
      duration: "Jan 2023 – Jun 2023",
      points: [
        "Developed a web application using MongoDB, FastAPI, HTML, CSS, and JavaScript.",
        "Built and tested REST APIs with Postman and deployed on AWS EC2.",
        "Containerized applications using Docker and managed repositories on GitHub.",
      ],
      logo: exfLogo,
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-r from-[#0a192f] to-[#112240] text-white relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
                    className="pb-3 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
       
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <motion.div
          className="relative ml-4"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical line */}
          <motion.div
            className="absolute left-[-12px] top-0 w-px h-full bg-gray-700"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="mb-12 ml-6 relative group"
            >
              {/* Logo Circle */}
              <motion.div
                className="absolute -left-16 flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 overflow-hidden"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <motion.img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Role & Company */}
              <motion.h3
                className="text-xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {exp.role}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {exp.company} • {exp.location} • {exp.duration}
              </motion.p>

              {/* Description */}
              <motion.ul
                className="list-disc pl-5 mt-3 space-y-2 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {exp.points.map((point, idx) => {
                  const link =
                    exp.links && exp.links.find((l) => point.includes(l.name));
                  if (link) {
                    return (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {link.name}
                        </a>
                        {point.replace(link.name, "")}
                      </li>
                    );
                  }
                  return <li key={idx}>{point}</li>;
                })}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
