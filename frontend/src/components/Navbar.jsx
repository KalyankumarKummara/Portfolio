import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = ({ animationComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
  if (isOpen) setIsOpen(false);

  requestAnimationFrame(() => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setActiveSection(id);
      window.history.pushState(null, "", id);
    }
  });
};



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 128 && rect.bottom >= 128) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "CS Fundamentals", path: "#csfundamentals" },
    { name: "Projects", path: "#projects" },
    { name: "Experiences", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <AnimatePresence>
      {animationComplete && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`fixed w-full z-50 ${scrolled ? "bg-gray-900/90 shadow-lg" : "bg-gray-900/70"
            } backdrop-blur-md`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo Placeholder */}
              <div className="flex-shrink-0 w-20"></div>

              {/* Desktop Menu */}
              <div className="hidden md:block">
                <motion.div
                  className="flex space-x-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.path)}
                      className={`relative px-3 py-2 text-sm font-medium cursor-pointer ${activeSection === item.path
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                        }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      {activeSection === item.path && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400"
                          transition={{ type: "spring", bounce: 0.2 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Hamburger */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-300 hover:text-white cursor-pointer"
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="space-y-1.5">
                    <motion.span
                      animate={isOpen ? "open" : "closed"}
                      className="block w-6 h-0.5 bg-white"
                      variants={{
                        open: { rotate: 45, y: 5 },
                        closed: { rotate: 0 },
                      }}
                    />
                    <motion.span
                      animate={isOpen ? "open" : "closed"}
                      className="block w-6 h-0.5 bg-white"
                      variants={{
                        open: { opacity: 0 },
                        closed: { opacity: 1 },
                      }}
                    />
                    <motion.span
                      animate={isOpen ? "open" : "closed"}
                      className="block w-6 h-0.5 bg-white"
                      variants={{
                        open: { rotate: -45, y: -5 },
                        closed: { rotate: 0 },
                      }}
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-gray-900/95 backdrop-blur-sm"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.path)}
                      whileHover={{ x: 5 }}
                      className={`w-full px-3 py-2 text-left rounded-md text-base cursor-pointer ${activeSection === item.path
                        ? "text-cyan-400 bg-gray-800"
                        : "text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
