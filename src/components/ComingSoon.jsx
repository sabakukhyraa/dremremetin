import { comingSoonData } from "../services/data";
import { StateContext } from "../App";
import { useContext } from "react";
import WhatsappContact from "./WhatsappContact";
import { Phone } from "lucide-react";

export default function ComingSoon() {
  const { language } = useContext(StateContext);

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 rounded-lg gap-2 bg-sky-800 shadow-lg">
      <h1 className="text-5xl font-semibold text-sky-500">
        {comingSoonData.title[language]}
      </h1>
      <p className="text-xl text-sky-300 font-light -mt-2">
        {comingSoonData.article[language]}
      </p>
      <div className="grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 gap-4">
        <WhatsappContact className={"w-full rounded-lg !py-0"} />
        <button
          onClick={handlePhoneClick}
          className="w-full bg-sky-500 hover:bg-sky-600 not-italic font-normal text-white py-2 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <Phone className="w-6 h-6" />
          <span className="text-md xl:text-xl">
            {comingSoonData.callUs[language]}
          </span>
        </button>
      </div>
    </div>
  );
}
