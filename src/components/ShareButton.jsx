import React, { useState, useEffect } from "react";

const ShareButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sharePortfolio = async () => {
    const shareData = {
      title: "Kalyankumar | Portfolio",
      text: "Check out my portfolio website!",
      url: "https://kalyankumarkummara.github.io/Portfolio/",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!isMobile) return null;

  return (
    <button
      onClick={sharePortfolio}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Share
    </button>
  );
};

export default ShareButton;
