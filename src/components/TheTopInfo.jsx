import { useState, useEffect, useContext } from "react";
import { StateContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import { translator } from "./LanguageOption";
import { languagePaths } from "../services/pathNames";

export default function TheTopInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { language, setLanguage } = useContext(StateContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    const optionLanguage = language === "TR" ? "EN" : "TR";
    navigate(translator(location.pathname, optionLanguage, languagePaths));
    setLanguage(optionLanguage);
  };

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const header = document.querySelector(".header-container");
    if (header) {
      header.addEventListener("mousemove", handleMouseMove);
      return () => header.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      className={`w-full header-container hidden xl:flex relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            transparent 50%),
          linear-gradient(135deg, 
            rgba(15, 23, 42, 0.97) 0%, 
            rgba(30, 41, 59, 0.95) 50%, 
            rgba(51, 65, 85, 0.93) 100%)
        `,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full flex justify-between items-center px-12 py-8">
        {/* Logo Section */}
        <a
          href="/"
          className="group flex items-center space-x-4 transform transition-all duration-500 hover:scale-105"
        >
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white tracking-tight">
              Uzm. Dr. Emre Metin
            </span>
            <span className="text-xs text-blue-200 tracking-widest uppercase">
              Ortodonti Uzmanı
            </span>
          </div>
        </a>

        {/* Contact Information */}
        <div className="flex items-center space-x-8">
          {/* Location */}
          <div className="group flex items-center space-x-3 transform transition-all duration-300 hover:translate-x-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <svg
                  className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xs text-blue-200 uppercase tracking-wider">
                {language == "TR" ? "Muayenehane" : "Clınıc"}
              </p>
              <p className="text-white font-semibold">Üsküdar, İstanbul</p>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:+905326543082"
            className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-white/80 uppercase tracking-wider">
                {language === "TR" ? "Hemen Ara" : "Call Now"}
              </p>
              <p className="text-white font-bold text-lg">+90 532 654 30 82</p>
            </div>
          </a>

          {/* Language Toggle */}
          <button
            onClick={handleClick}
            className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transform transition-all duration-300 hover:scale-110"
          >
            <span className="text-white font-semibold text-sm">{language}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx="hallelujah">{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
