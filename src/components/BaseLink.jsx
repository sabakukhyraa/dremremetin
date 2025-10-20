import { Link } from "react-router-dom";

// Redesigned BaseLink Component
export default function BaseLink({
  className = "",
  content = "",
  to = null,
  isBlank = null,
  variant = "default", // new prop for different styles
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 rounded-xl overflow-hidden group";

  const variants = {
    default:
      "bg-sky-600 text-white hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105",
    outline:
      "border-2 border-sky-400/50 text-sky-400 hover:border-sky-400 hover:bg-sky-400/10",
    ghost:
      "text-sky-400 hover:bg-sky-50/50 dark:text-sky-400 dark:hover:bg-sky-900/30",
  };

  return (
    <Link
      className={`${baseStyles} ${variants[variant]} ${className} md:text-md text-xs`}
      target={`${isBlank ? "_blank" : "_self"}`}
      to={to}
    >
      {/* Content */}
      <span className="relative z-10 flex items-center md:gap-2 gap-1">
        {content}
        {isBlank && (
          <svg
            className="w-4 h-4 opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </span>
    </Link>
  );
}
