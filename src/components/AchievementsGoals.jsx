import { motion } from "framer-motion";

export default function AchievementsGoalsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="bg-[#1e2a47] p-4 sm:p-6 lg:p-8 rounded-md w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-[#cbd5e1]">
      
      {/* Main Title */}
      <div className="col-span-1 md:col-span-2 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-6 sm:mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Achievements & Goals
        </motion.h2>
      </div>

      {/* Achievements */}
      <motion.div
        className="space-y-4 sm:space-y-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">
          Achievements
        </h3>

        {[
          ["🏆", "2 Months Internship - Fullstack Developer (Pictuscode)", "Gained hands-on experience in building and deploying full-stack web applications."],
          ["🏆", "NPTEL Cloud Computing", "Acquired skills in virtualization, cloud service models (IaaS, PaaS, SaaS), and scalable application deployment."],
          ["🏆", "Infosys Springboard - HTML5 Course", "Completed HTML5 fundamentals for modern and responsive web development."],
          ["🏆", "Infosys Springboard - CSS Course", "Learned core concepts of CSS for styling, layouts, and responsive design."],
          ["🏆", "121 State Rank - ECET 2023", "Secured an outstanding rank among thousands of participants in ECET 2023."],
          ["🏆", "6 Months Internship - Python Full Stack Trainee (Exafluence)", "Developed and deployed end-to-end applications integrating frontend, backend, and databases."],
          ["🏆", "Academic Excellence Award - Diploma", "Recognized for exceptional academic performance during Diploma studies."],
          ["🏆", "Autonomous Vehicle Project (IoT & C Language)", "Designed and implemented an IoT-powered autonomous vehicle as a final semester project."]
        ].map(([icon, title, desc], i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -5,
              scale: 1.03,
              boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.3)",
            }}
            className="bg-[#273659] rounded-md p-3 sm:p-4 w-full transition-transform duration-300"
          >
            <div className="flex items-start gap-3 font-semibold text-[#63a5f6] mb-1 sm:mb-2">
              <motion.span
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-lg sm:text-xl"
              >
                {icon}
              </motion.span>
              <h3 className="text-sm sm:text-base">{title}</h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Goals */}
      <motion.div
        className="space-y-4 sm:space-y-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">
          Goals
        </h3>

        {[
          ["🎯", "Get Placed in a Good Company", "Aim to join a growth-oriented and innovative organization."],
          ["🎯", "Stay Updated with Trending Technologies", "Continuously expand technical expertise in emerging tools and frameworks."],
          ["🎯", "Develop and Publish a Mobile App", "Create a functional, impactful application for real-world use."]
        ].map(([icon, title, desc], i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -5,
              scale: 1.03,
              boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.3)",
            }}
            className="bg-[#273659] rounded-md p-3 sm:p-4 flex items-start gap-3 w-full transition-transform duration-300"
          >
            <motion.span
              whileHover={{ scale: 1.3, rotate: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-lg sm:text-xl"
            >
              {icon}
            </motion.span>
            <div>
              <h3 className="font-semibold text-white text-sm sm:text-base">{title}</h3>
              <p className="text-xs sm:text-sm">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
