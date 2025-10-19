export default function BaseButton({
  onClick,
  className = "",
  content = "button",
}) {
  return (
    <button
      className={`py-2 px-4 bg-sky-700 rounded-lg text-sky-50 w-full xl:w-fit animation hover:scale-110 ${className}`}
      onClick={onClick}
      aria-label="opens navbar"
    >
      {content}
    </button>
  );
}
