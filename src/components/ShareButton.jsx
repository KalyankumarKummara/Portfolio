import { FaShareAlt } from "react-icons/fa";

const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this portfolio!",
          text: "Here’s my portfolio website:",
          url: window.location.href,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition"
    >
      <FaShareAlt />
      Share
    </button>
  );
};

export default ShareButton;
