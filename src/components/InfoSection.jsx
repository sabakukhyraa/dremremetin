export default function InfoSection({
  title,
  articleArray,
  image,
  additional,
  theme,
}) {
  const articles = articleArray.map((article, i) => (
    <p
      key={i}
      className="leading-relaxed opacity-90 transition-opacity hover:opacity-100"
    >
      {article}
    </p>
  ));

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${
        theme === "dark" ? "bg-sky-800" : "bg-white"
      } transition-all duration-500 hover:shadow-2xl`}
    >
      <div className="grid w-full xl:grid-cols-2 gap-0">
        {/* Image Container */}
        <div className="relative h-64 xl:h-[550px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-transparent to-transparent"></div>
          <img
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={image}
            alt="clinic"
          />
          {/* Decorative corner accent */}
          <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-sky-300/50"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-sky-300/50"></div>
        </div>

        {/* Content Container */}
        <div
          className={`relative flex flex-col gap-6 p-8 xl:p-12 ${
            theme === "dark" ? "text-sky-50" : "text-sky-900"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M39.5,-65.3C52.3,-59.5,64.9,-51.7,71.8,-40.3C78.7,-28.9,79.9,-14.5,79.2,-0.4C78.5,13.7,75.9,27.3,69.4,39.5C62.9,51.6,52.4,62.2,39.5,68.3C26.6,74.3,11.3,75.8,-3.4,80.4C-18.1,85,-36.2,92.7,-50.4,87.8C-64.6,82.9,-74.9,65.4,-80.8,47.1C-86.7,28.8,-88.2,9.6,-85.3,-8.3C-82.4,-26.2,-75.1,-42.8,-63.3,-49.9C-51.5,-57,-35.2,-54.6,-21.3,-60C-7.5,-65.4,-3.7,-78.6,4.7,-85.3C13.1,-92,26.7,-92.1,39.5,-65.3Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          {/* Title with accent */}
          <div className="relative">
            <h3 className="text-3xl xl:text-5xl font-bold relative z-10 flex items-center gap-3">
              <span className="inline-block w-1 h-8 xl:h-12 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full"></span>
              {title}
            </h3>
          </div>

          {/* Articles with improved spacing */}
          <div className="flex flex-col justify-start gap-4 text-base xl:text-lg relative z-10">
            {articles}
          </div>

          {/* Additional content */}
          {additional && (
            <div className="mt-auto pt-4 relative z-10">{additional}</div>
          )}

          {/* Subtle bottom decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
