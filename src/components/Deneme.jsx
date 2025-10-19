import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
export default function Deneme() {
  const elementRefs = useRef([]);

  const startAnimation = () => {
    const element = elementRefs.current;
    const newAnimation = anime({
      targets: element,
      scale: [
        {value: 1.1, easing: 'easeInOutQuad', duration: 500},
        {value: .8, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 500},
      ],
      delay: anime.stagger(30, {grid: [40, 13], from: 'center'})
    });
  };

  const elements = new Array(520).fill(null).map((_, index) => {
    return (
      <div
        className="w-5 h-5 bg-sky-300"
        key={index}
        ref={(ref) => (elementRefs.current[index] = ref)}
      ></div>
    );
  });

  setInterval(() => {
    startAnimation()
  }, 2000);

  return (
    <div className="flex justify-center absolute bottom-0 z-0">
      <div className="pt-16 grid gap-1 banana w-full">{elements}</div>
    </div>
  );
}
