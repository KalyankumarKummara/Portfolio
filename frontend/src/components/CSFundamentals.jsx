import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from 'react';
import dsalogo from "../assets/dsa-icon.png";
import oslogo from "../assets/os-icon.png";
import cpplogo from "../assets/CPP-icon.png";
import javalogo from "../assets/java.png";
import cnlogo from "../assets/CN.png";
import dbmslogo from "../assets/dbms.png"
import selogo from "../assets/SE.png";

export default function CSFundamentals() {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const csTopics = [
    {
      title: 'Data Structures & Algorithms',
      icon: dsalogo,
      topics: [
        'Arrays ',
        'Linked Lists',
        'Stack & Queues',
        'Sorting',
        'Searching',
      ],
    },
    {
      title: 'Operating Systems',
      icon: oslogo,
      topics: [
        'Processes & Threads',
        'CPU Scheduling',
        'Memory Management',
        'Deadlocks',
        'File System',
      ],
    },
    {
      title: 'CPP PROGRAMMING',
      icon: cpplogo,
      topics: [
        'Functions',
        'OOPS Concepts',
        'Standard Template Libray (STL)',
        'Function Overloading',
        'File Handling',
      ],
    },
    {
      title: 'JAVA',
      icon: javalogo,
      topics: [
        'Classes & Objects',
        'Polymorphism',
        'Inheritance',
        'Encapsulation',
        'Threads',
      ],
    },
    {
      title: 'Computer Networks',
      icon: cnlogo,
      topics: [
        'OSI & TCP/IP Models',
        'Network Protocols',
        'Routing & Switching',
        'Network Security',
        'Wireless Networks',
      ],
    },
    {
      title: 'DBMS',
      icon: dbmslogo,
      topics: [
        'Data Modeling',
        'Database Design',
        'SQL Queries',
        'Transaction Management',
        'DBMS Architecture',
      ],
    },
    {
      title: 'Software Engineering',
      icon: selogo,
      topics: [
        'Software Process Models',
        'Requirements Engineering',
        'Software Requirements Specification (SRS)',
        'Software Project Management',
        'Software Metrics',
      ],
    },
  ];
  const isMobile = window.innerWidth < 640;

  return (
    <div className="bg-[#0a1d3b] py-12 px-4 md:px-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Motion Section Title */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={
            isMobile || isInView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          CS Fundamentals
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
          {csTopics.map((card, index) => (
            <div
              key={index}
              className="w-[290px] sm:w-[320px] md:w-[380.2px] h-[385px] bg-[#0d2a52] border border-blue-400 rounded-2xl shadow-md p-6 text-white flex flex-col justify-start"
            >
              <div className="flex justify-center mb-4">
                <img src={card.icon} alt="icon" className="h-20" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-center text-blue-400 mb-4 uppercase min-h-[56px]
">
                {card.title}
              </h3>
              <ul className="space-y-2 px-2 text-sm">
                {card.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-400 text-lg">▸</span> {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
