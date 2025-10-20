import VideoLazyLoad from "./VideoLazyLoad";
import "../css/fancy-backgrounds.css";
import { useEffect, useRef, useState } from "react";

export default function BeforeAfterCard({
  video,
  text,
  caseNumber,
  theme,
  author,
  index,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const isEven = true;

  return (
    <div
      ref={cardRef}
      className={`relative group transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background gradient effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          isEven
            ? "from-blue-50 via-cyan-50 to-sky-50"
            : "from-slate-50 via-gray-50 to-zinc-50"
        } opacity-50 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div
        className={`relative container mx-auto py-20 px-4 ${
          isEven ? "lg:pr-12" : "lg:pl-12"
        }`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
            !isEven ? "lg:flex lg:flex-row-reverse" : ""
          }`}
        >
          {/* Video Section */}
          <div className="relative group/video">
            {/* Animated background blob */}
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${
                isEven
                  ? "from-blue-400 via-cyan-400 to-sky-400"
                  : "from-slate-400 via-gray-400 to-zinc-400"
              } rounded-3xl blur-2xl opacity-20 group-hover/video:opacity-30 transition-all duration-700 animate-pulse`}
            />

            {/* Case number badge */}
            <div
              className={`absolute -top-4 -left-4 z-20 w-16 h-16 rounded-2xl bg-gradient-to-br ${
                isEven
                  ? "from-blue-500 to-cyan-500"
                  : "from-slate-600 to-gray-600"
              } flex items-center justify-center shadow-2xl transform rotate-3 group-hover/video:rotate-6 transition-transform duration-300`}
            >
              <span className="text-white font-bold text-xl">
                {String(caseNumber).padStart(2, "0")}
              </span>
            </div>

            {/* Video container with glassmorphism */}
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 ${
                isHovered ? "scale-[1.02] shadow-3xl" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />

              <VideoLazyLoad
                src={video || "/api/placeholder/800/600"}
                type="video/mp4"
                className="aspect-[4/3] lg:aspect-[16/10] w-full"
                onHover={setIsHovered}
              />

              {/* Hover overlay with "Play" icon effect */}
              <div
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                } pointer-events-none z-20`}
              >
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`relative space-y-6 ${isEven ? "lg:pl-8" : "lg:pr-8"}`}
          >
            {/* Decorative element */}
            <div
              className={`absolute -top-10 ${
                isEven ? "left-0" : "right-0"
              } w-32 h-32 bg-gradient-to-br ${
                isEven
                  ? "from-blue-200 to-cyan-200"
                  : "from-slate-200 to-gray-200"
              } rounded-full blur-3xl opacity-30`}
            />

            {/* Quote mark */}
            <div
              className={`text-6xl ${
                isEven ? "text-blue-200" : "text-slate-300"
              } font-serif leading-none select-none`}
            >
              "
            </div>

            {/* Testimonial text */}
            <div
              className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 transform transition-all duration-500 ${
                isHovered ? "translate-x-2" : ""
              }`}
            >
              <p
                className={`text-lg lg:text-xl leading-relaxed text-start ${
                  isEven ? "text-gray-700" : "text-gray-600"
                }`}
              >
                {text ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
            </div>

            {/* Author section */}
            <div
              className={`flex items-center gap-4 ${
                isEven ? "" : "justify-end"
              }`}
            >
              <div
                className={`w-1 h-12 bg-gradient-to-b ${
                  isEven
                    ? "from-blue-400 to-cyan-400"
                    : "from-slate-400 to-gray-400"
                } rounded-full`}
              />
              <div>
                <p
                  className={`font-bold text-lg ${
                    isEven ? "text-blue-900" : "text-slate-800"
                  }`}
                >
                  {author}
                </p>
                <p
                  className={`text-sm ${
                    isEven ? "text-blue-600" : "text-slate-600"
                  } italic`}
                >
                  Ortodonti Uzmanı
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
