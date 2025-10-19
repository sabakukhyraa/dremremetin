import { useContext } from "react";
import { StateContext } from "../App";
import Icons from "./Icons";
import { useLocation, useNavigate } from "react-router-dom";
import { languagePaths } from "../services/pathNames";


function translator(pathName, requestedLanguage, branch) {
  let currentLanguage = requestedLanguage == "TR" ? "EN" : "TR";
  for (const key of Object.keys(branch)) {
    if (branch[key][currentLanguage] == pathName) {
      return branch[key][requestedLanguage];
    } else {
      if (Object.keys(branch[key]).length != 2) {
        for (const key2 of Object.keys(branch[key])) {
          if (key2 !== "TR" && key2 !== "EN") {
            if (branch[key][key2][currentLanguage] == pathName) {
              return branch[key][key2][requestedLanguage];
            }
          }
        }
      }
    }
  }
}

export default function LanguageOption({ optionLanguage, image }) {
  const { language, setLanguage } = useContext(StateContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    navigate(translator(location.pathname, optionLanguage, languagePaths));
    setLanguage(optionLanguage);
  };
  return (
    <button
      className={`py-px px-2 lg:py-1 relative animation -rotate-90 lg:hover:mr-8 active:mr-0 ${
        language == optionLanguage && "scale-125"
      }`}
      onClick={handleClick}
    >
      <Icons
        className={"lg:hidden"}
        fillColor={"#fff"}
        iconName={"arrow-tooth"}
        size={36}
      />
      <Icons
        className={"hidden lg:block"}
        fillColor={"#fff"}
        iconName={"arrow-tooth"}
        size={48}
      />
      <img
        loading="lazy"
        className="absolute top-[7px] lg:top-[12px] right-[19px] lg:right-[24px] w-[13px] lg:w-4 object-cover aspect-square"
        src={image}
        alt={`${optionLanguage}-flag`}
      />
    </button>
  );
}
