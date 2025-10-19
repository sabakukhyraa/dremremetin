import { StateContext } from "../App";
import Icons from "./Icons";
import { treatmentsData } from "../services/data";
import { useContext, useState } from "react";
import BaseModal from "./BaseModal";
export default function TreatmentCard({ iconName, title, text }) {
  const { language } = useContext(StateContext);
  const [isModal, setIsModal] = useState(false);

  function modalToggler() {
    setIsModal((prev) => !prev);
  }
  //TODO: add "more info" button
  return (
    <div className="w-full p-4 border border-opacity-40 border-sky-600 flex flex-col justify-between gap-3 text-sky-900 animation">
      <div className="flex group flex-col gap-3">
        <Icons
          className={"fill-sky-600 animation group-hover:fill-yellow-500"}
          iconName={iconName}
          size={60}
        />
        <h3 className="text-3xl pt-1 font-semibold">{title}</h3>
        <p className="text-lg font-light">{text}</p>
      </div>
      {/* <div className="self-end">
        <button onClick={modalToggler}>{treatmentsData.more[language]}</button>
      </div>
      <BaseModal
        state={isModal}
        title={title}
        text={text}
        closer={modalToggler}
      /> */}
    </div>
  );
}
