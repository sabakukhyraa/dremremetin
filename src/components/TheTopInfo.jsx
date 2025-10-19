import { Link } from "react-router-dom";
import siteLogo from "../assets/logo-tr/default2.png";
import { useContext } from "react";
import { StateContext } from "../App";

export default function TheTopInfo() {

  const { language } = useContext(StateContext)
  return (
    <div className="hidden xl:flex flex-col xl:flex-row xl:justify-between items-center large-title bg-sky-100 text-sky-900 gap-2 xl:gap-0 px-4 xl:px-12 w-full xl:h-32 z-40">
      <Link className="w-full md:w-2/3 xl:w-1/3" to={"/"}>
        <img loading="lazy" className="w-full" src={siteLogo} alt="logo" />
      </Link>
      <div className="xl:text-end text-center flex-col xl:items-end items-center flex">
        <p className="text-xl !font-extralight">
          <span className="font-semibold">
            {language == "TR" ? "Muayenehane" : "Clinic"} <br />
          </span>
          Üsküdar/İstanbul
        </p>
        <p className="text-xl font-extralight">
          <a href="tel:+905326543082">+90 532 654 30 82</a>
        </p>
      </div>
    </div>
  );
}