import EmreMetinPortre from "../assets/himself.jpg";
import { aboutMe } from "../services/data";
import { StateContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Profile({ isShortened, theme }) {
  const { language } = useContext(StateContext);

  return (
    <section
      className={`w-full relative overflow-hidden ${
        theme == "dark" &&
        "dark bg-sky-700 py-8 xl:py-16 xl:-mt-12 -mt-8 z-0"
      }`}
    >
      <div
        id="emre-metin"
        className="flex flex-col gap-8 xl:gap-16 container z-[2]"
      >
        {isShortened && (
          <h1 className="xl:medium-title small-title text-sky-800">
            {aboutMe.title[language]}
          </h1>
        )}
        <div
          className={`relative xl:block overflow-hidden flex flex-col items-center w-full info ${
            isShortened
              ? "h-96 blurred-text"
              : "bg-sky-100 p-4 xl:p-8 rounded-lg shadow-lg"
          }`}
        >
          {!isShortened && (
            <h2 className="xl:small-title xl:mb-6 mb-4 text-lg font-semibold text-sky-900">
              {aboutMe.title[language]}
            </h2>
          )}
          <img loading="lazy" 
            className="w-40 h-40 xl:w-64 xl:h-64 xl:m-4 mb-4 !aspect-square xl:object-right rounded-full xl:float-right"
            src={EmreMetinPortre}
            alt="emre metin"
          />
          {aboutMe.article[language]}
          {isShortened && (
            <Link
              className="read-more"
              to={
                language == "TR"
                  ? "/hakkimizda#emre-metin"
                  : "/about#emre-metin"
              }
            >
              {language == "TR"
                ? "Biyografinin devamını oku"
                : "Read more autobiography"}
            </Link>
          )}
        </div>
      </div>
      {isShortened && (
        <div className="custom-shape-divider-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0C4A6E"
              fillOpacity="1"
              d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,106.7C840,64,960,32,1080,37.3C1200,43,1320,85,1380,106.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
}
