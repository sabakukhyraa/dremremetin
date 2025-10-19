import { Link } from "react-router-dom";
export default function BaseLink({
  className = "",
  content = "",
  to = null,
  isBlank = null,
}) {
  return (
    <Link className={`flex items-center justify-center h-full py-2 px-4 bg-sky-700 rounded-lg !text-sky-50 w-full text-center animation hover:scale-110 ${className}`} target={`${isBlank ? "_blank" : "_self"}`} to={to}>
      {content}
    </Link>
  );
}
