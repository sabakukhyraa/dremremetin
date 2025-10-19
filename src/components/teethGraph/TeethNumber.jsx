import Tooth from "./Tooth.jsx";
import { teethAttributes } from "../../services/teethData.js";
import { StateContext } from "../../App.jsx";
import { useContext } from "react";
import { teethNumber } from "../../services/data.jsx";
import { useState } from "react";
import BaseButton from "../BaseButton.jsx";
import ToothInfo from "./ToothInfo.jsx";
export default function TeethNumber() {
  const { toothState, language } = useContext(StateContext);

  const [isAdult, setIsAdult] = useState(true);
  const [haveWisdomTeeth, setHaveWisdomTeeth] = useState(false);

  const teeth = teethAttributes.map((tooth, index) => (
    <Tooth key={index} d={tooth.path} toothIndex={tooth.parentIndex} />
  ));

  const teethWithoutWisdom = teeth.slice(0, 182);

  teethWithoutWisdom.splice(39, 7);
  teethWithoutWisdom.splice(85 - 7, 7);
  teethWithoutWisdom.splice(130 - 14, 7);
  teethWithoutWisdom.splice(175 - 21, 7);

  return (
    <div className="flex flex-col items-center gap-12 w-full xl:p-24 bg-sky-100 section-container">
      <h1 className="small-title text-sky-900">
        {teethNumber.title[language]}
      </h1>

      <div className="relative w-full grid grid-cols-2 gap-4 xl:gap-8">
        <div className="w-full flex justify-center items-center">
          <svg
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="289.61084"
            height="370.54398"
          >
            {isAdult
              ? haveWisdomTeeth
                ? teeth.slice(0, 182)
                : teethWithoutWisdom
              : teeth.slice(182)}
          </svg>
        </div>
        <div className="w-full h-full flex flex-col text-center row-span-2 justify-center items-center text-7xl text-sky-900 font-semibold">
          {toothState || "error"}
          <div>
            <ToothInfo />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 items-center w-full">
          <div className="flex justify-center xl:flex-row flex-col gap-6 w-full">
            <BaseButton
              className={`${isAdult && "!bg-sky-300 !text-sky-700"}`}
              onClick={() => setIsAdult(true)}
              content={"Yetişkin"}
            />
            <BaseButton
              className={`${!isAdult && "!bg-sky-300 !text-sky-700"}`}
              onClick={() => setIsAdult(false)}
              content={"Çocuk"}
            />
          </div>
          <div
            className={`flex items-center text-sky-900 gap-1 text-lg ${
              !isAdult && "opacity-0 pointer-events-none"
            }`}
          >
            <input
              type="checkbox"
              name="20"
              id="20"
              value={haveWisdomTeeth}
              onChange={(e) => setHaveWisdomTeeth(e.target.checked)}
            />
            <label htmlFor="20">20'lik dişlerin var mı?</label>
          </div>
        </div>
      </div>
    </div>
  );
}
