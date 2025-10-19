import VideoLazyLoad from "./VideoLazyLoad";
import "../css/fancy-backgrounds.css"
import { useLocation } from "react-router-dom";

export default function BeforeAfterCard({
  video,
  text,
  caseNumber,
  theme,
  author,
}) {
  const location = useLocation();

  return (
    <div
      className={`flex relative flex-col gap-4 xl:gap-8 h-full text-md xl:text-lg z-0 xl:!py-16 py-8 fancy-${caseNumber} ${(caseNumber == 1 & location.pathname == "/") && "pt-24 -mt-24 xl:!pt-44 xl:-mt-40"} ${
        theme == "dark" && "dark"
      }`}
    >
      {/* <h2 className="text-2xl">{caseNumber}</h2> */}
      <div className="grid w-full grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-24 container">
        <VideoLazyLoad src={video} type={"video/mp4"} />
        <article className="flex flex-col justify-between h-full items-center xl:items-start gap-4 xl:gap-8 article-treatment">
          <p className={`${caseNumber % 2 == 1 ? "!text-sky-900" : "!text-white"} xl:w-2/3`}>{text}</p>
          <p className={`self-end text-xs ${caseNumber % 2 == 1 ? "!text-sky-900" : "!text-white"} 2x:text-md italic`}>{author}</p>
        </article>
      </div>
    </div>
  );
}
