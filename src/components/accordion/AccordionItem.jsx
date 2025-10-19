import { useState } from "react";
import Icons from "../Icons";

export default function AccordionItem({question, answer, index}) {

  const [isOpen, setIsOpen] = useState(false);
  const [heightVar, setHeight] = useState(0);

  const toggle = () => {
    if (isOpen) {
      setHeight(0)
    } else {
      const element = document.getElementById(`paragraph-${index}`);
      if (element) {
        const h = element.clientHeight;
        setHeight(h)
      }
    }
    setIsOpen(prev => !prev)
  }
  

  return (
    <div className="w-full accordion overflow-hidden rounded-md">
      <button onClick={toggle} className="w-full z-20">
        <div className="w-full bg-sky-600 xl:p-8 p-4 text-start flex items-center relative">
          <p className="text-sky-50 xl:text-lg text-sm pr-7">{question}</p>
          <Icons iconName={"arrow"} className={`animation absolute right-4 ${!isOpen ? "rotate-[720deg]" : "rotate-180"}`} fillColor={"white"} size={24}/> 
        </div>
      </button>
      <div style={{height: `${heightVar}px`}} className={`bg-sky-100 animation duration-500 ease-out xl:px-8 px-4 -z-10`}> {/*${!isOpen && "!h-0"} */}
        <p id={`paragraph-${index}`} className="xl:text-lg text-sm text-start text-sky-900 xl:py-8 py-4">{answer}</p>
      </div>
    </div>
  )
}
