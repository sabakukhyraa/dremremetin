import { comingSoonData } from "../services/data";
import { StateContext } from "../App";
import { useContext } from "react";
import WhatsappContact from "./WhatsappContact";

export default function ComingSoon() {
  const { language } = useContext(StateContext);

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 rounded-lg gap-2 bg-sky-800 shadow-lg">
      <h1 className="text-5xl font-semibold text-sky-500">
        {comingSoonData.title[language]}
      </h1>
      <p className="text-2xl text-sky-300 font-light">
        {comingSoonData.article[language]}
      </p>
      <div className="grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 gap-2">
        <WhatsappContact className={"w-full xl:w-fit rounded-lg !py-0"} />
        <a
          className="block text-md xl:text-2xl bg-sky-100 px-4 py-2 rounded-lg text-center font-light text-sky-900"
          href="tel:+905326543082"
        >
          {comingSoonData.callUs[language]}
        </a>
      </div>
    </div>
  );
}
