import React from "react";
import Icons from "./Icons";
import { StateContext } from "../App";
import { useContext } from "react";

export default function WhatsappContact({width, className}) {
  const { language } = useContext(StateContext)
  return (
    <a
      className={`flex gradient-animation justify-center items-center not-italic font-normal text-md xl:text-xl text-white ${width} ${className} px-3 py-1 scale-100 animation`}
      href="https://api.whatsapp.com/send/?phone=905326543082&text=Merhaba,%20randevu%20almak%20istiyorum."
    >
      <Icons iconName={"wp"} size={32} fillColor={"#fff"} />
      {language == "TR" ? "Whatsapp Randevu Hattı" : "Whatsapp Appointment Line"}
    </a>
  );
}
