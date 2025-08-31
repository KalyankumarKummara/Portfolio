import { useState } from "react";
import { HashRouter } from "react-router-dom";
import KKAnimation from "./components/KKAnimation";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import SkillsSection from "./components/Skills";
import CSFundamentals from "./components/CSFundamentals";
import Experience from "./components/Experience";
import AchievementsGoalsSection from "./components/AchievementsGoals";
import { motion } from "framer-motion";

export default function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <HashRouter>
      <div className="bg-[#0a1f44] min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 z-[60] pointer-events-none">
          <KKAnimation onComplete={() => setAnimationComplete(true)} />
        </div>

        {animationComplete && (
          <>
            <Navbar animationComplete={animationComplete} />
            <motion.div
              className="pt-0 relative z-40 scroll-smooth"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <section id="home" className="scroll-mt-20"><HeroSection /></section>
              <section id="about" className="scroll-mt-20"><AboutSection /></section>
              <section id="skills" className="scroll-mt-20"><SkillsSection /></section>
              <section id="csfundamentals" className="scroll-mt-20"><CSFundamentals /></section>
              <section id="projects" className="scroll-mt-20"><ProjectsSection /></section>
              <section id="experience" className="scroll-mt-20"><Experience /></section>
              <section id="achievements" className="scroll-mt-20"><AchievementsGoalsSection /></section>
              <section id="contact" className="scroll-mt-20"><ContactSection /></section>
            </motion.div>
          </>
        )}
      </div>
    </HashRouter>
  );
}