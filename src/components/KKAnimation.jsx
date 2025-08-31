import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function KKAnimation({ onComplete }) {
  const [shrinkLogo, setShrinkLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrinkLogo(true);
    }, 3500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-full relative">
      <motion.div
        className="absolute flex items-center justify-center pointer-events-auto"
        initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 1 }}
        animate={
          shrinkLogo
            ? { top: "2rem", left: "2rem", x: "0", y: "0", scale: 0.5 }
            : {}
        }
        transition={{ duration: 1.5, ease: "easeInOut" }}
        whileHover={{ scale: 0.55 }}
      >
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="absolute"
          initial={{ strokeDasharray: 300, strokeDashoffset: -300, opacity: 1 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          whileHover={{ filter: "drop-shadow(0px 0px 8px cyan)" }}
        >
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            stroke="cyan"
            strokeWidth="3"
            fill="transparent"
          />
        </motion.svg>

        <motion.div
          className="absolute text-[55px] font-extrabold text-cyan-400 drop-shadow-lg"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          style={{ textShadow: "0px 0px 10px cyan" }}
          whileHover={{ rotateX: 15, rotateY: 15 }}
        >
          K
        </motion.div>

        <motion.div
          className="absolute text-[35px] font-extrabold text-white"
          initial={{ scale: 0, opacity: 0, rotate: 180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
          whileHover={{ rotateX: -15, rotateY: -15 }}
        >
          K
        </motion.div>
      </motion.div>
    </div>
  );
}