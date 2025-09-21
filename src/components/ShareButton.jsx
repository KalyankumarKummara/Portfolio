import React from "react";
import { FiShare2 } from "react-icons/fi";

const ShareButton = () => {
  const sharePortfolio = async () => {
    const shareData = {
      title: "Kalyankumar | Portfolio",
      url: "https://kalyankumarkummara.github.io/Portfolio/",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error(err);
      }
    } else {
      const url = encodeURIComponent(shareData.url);
      window.open(`https://api.whatsapp.com/send?text=${url}`, "_blank");
    }
  };

  return (
    <button
      onClick={sharePortfolio}
      className="block sm:hidden px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/30 transition flex items-center justify-center gap-2"
    >
      <FiShare2 className="w-5 h-5" />
      Share
    </button>
  );
};

export default ShareButton;
