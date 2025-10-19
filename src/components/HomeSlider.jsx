import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { homeSliderData } from "../services/data";
import { StateContext } from "../App";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";


export default function HomeSlider() {

  const { language } = useContext(StateContext);

  const slideMapper = homeSliderData[language].map((slider, index) => (
    <SwiperSlide className="relative slider-image" key={index}>
      <img loading="lazy"  className="" src={slider.image} alt={`slider${index}`} />
      <div className="absolute text-start text-sky-50 flex flex-col justify-center items-start container w-full h-full z-[2] slider">
        <h2 className="xl:large-title w-1/2 xl:w-full font-semibold text-2xl pb-6 xl:pb-12 mix-blend-difference">{slider.title}</h2>
        <p className="font-light text-lg w-1/2 xl:w-full xl:text-2xl mix-blend-difference">
          {slider.article}
        </p>
      </div>
    </SwiperSlide>
  ));

  return (
    <div 
    className="overflow-hidden !box-border relative h-[50vh] xl:h-[80vh] -mt-16 shadow-md xl:shadow-xl"
    >
      <Swiper
        // className="!overflow-hidden h-full w-full text-xl xl:text-7xl"
        slidesPerView={1}
        modules={[Navigation, Autoplay]} //autoplay eklenecek
        navigation={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {slideMapper}
      </Swiper>
    </div>
  );
}
