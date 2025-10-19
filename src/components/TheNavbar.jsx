import { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { StateContext } from "../App";
import siteLogo from "../assets/logo-tr/default2.png";
import "../css/navbar.css";
import Icons from "./Icons";
import { links } from "../services/data";
import BaseButton from "./BaseButton";

export default function TheNavbar({ languagePaths, mobileState, toggleState }) {
  const { language } = useContext(StateContext);
  const [height, setHeight] = useState(0);
  const [hoverStates, setHoverStates] = useState({
    st: false,
    nd: false,
    rd: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggle = () => {
    if (mobileState) {
      setHeight(0);
    } else {
      const element = document.getElementById("the-list");
      if (element) {
        const h = element.clientHeight;
        setHeight(h);
      }
    }
    toggleState(!mobileState);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const myRef = useRef(null);

  useEffect(() => {
    toggleState(false)
    setHeight(0)
  }, [location]);

  useEffect(() => {
    setHoverStates({
      st: false,
      nd: false,
      rd: false,
      fourth: false,
      fifth: false,
      sixth: false,
    });
  }, [mobileState]);

  return (
    <nav
      ref={myRef}
      className={`xl:block w-full bg-sky-200 xl:bg-sky-700 -top-px xl:h-auto sticky shadow-md xl:shadow-lg duration-[600ms] ${
        mobileState
          ? "pointer-events-auto xl:!h-auto"
          : "h-16 xl:!h-auto delay-300"
      } backdrop-blur xl:rotate-0 !bg-opacity-80 z-10 animation`}
      style={{ height: `${64 + height}px` }}
    >
      <div className="flex xl:hidden justify-between items-center w-full h-16">
        <Link className="w-full h-full flex items-center" to={"/"}>
          <img loading="lazy" 
            className="h-5/6 py-2 ml-3 iphone-se"
            src={siteLogo}
            alt="logo"
          />
        </Link>
        <button title="menu-button" className="w-16" onClick={toggle}>
          <svg
            className={`ham ham6 ${mobileState && "active2"}`}
            viewBox="0 0 100 100"
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
        </button>
      </div>
      <ul
        id="the-list"
        className={`w-full xl:container xl:h-full relative flex xl:flex-row flex-col xl:gap-0 gap-3 xl:justify-between 3xl:container xl:py-0 md:py-6 py-3 justify-between animation xl:items-center navbar ${
          mobileState
            ? "delay-300 opacity-100"
            : "xl:opacity-100 opacity-0 pointer-events-none xl:pointer-events-auto"
        } ${language == "EN" ? "english" : ""}`}
      >
        <li>
          <NavLink to={languagePaths.home[language]}>
            {links.home[language]}
          </NavLink>
        </li>
        <li
          className="text-center xl:block"
          onMouseEnter={() => {
            if (windowWidth > 1080) {
              setHoverStates((prev) => ({ ...prev, nd: true }));
            }
          }}
          onMouseLeave={() => {
            if (windowWidth > 1080) {
              setHoverStates((prev) => ({ ...prev, nd: false }));
            }
          }}
        >
          <NavLink
            className="text-center z-50 w-full h-full relative xl:inline hidden"
            to={languagePaths.about[language]}
          >
            {links.about[language]}
            <Icons
              className={`absolute pointer-events-none xl:top-[9px] top-[5px] fill-sky-50 -right-8 animation ${
                hoverStates.nd ? "-rotate-180" : "rotate-[360deg]"
              }`}
              iconName={"arrow-tooth"}
              size={18}
              fillColor={"#f0f9ff"}
            />
          </NavLink>
          <BaseButton
            className="w-fit xl:hidden inline hover:!scale-100 rounded-none bg-transparent !p-0 text-lg font-medium text-sky-700"
            onClick={() =>
              setHoverStates((prev) => ({ ...prev, nd: !prev.nd }))
            }
            content={language == "TR" ? "Hakkımızda" : "About Us"}
          />
          <Icons
            className={`absolute pointer-events-none top-[13px] right-[calc(50%-75px)] animation xl:hidden inline ${
              hoverStates.nd ? "-rotate-180" : "rotate-[360deg]"
            }`}
            iconName={"arrow-tooth"}
            size={18}
            fillColor={"#f0f9ff"}
          />
          <ul
            className={`navbar-dropdown text-3xl ${
              hoverStates.nd
                ? "3xl:h-[60px] xl:h-[50px] h-[100px]"
                : "h-0 destroyer pointer-events-none"
            } top-12 xl:top-20`}
          >
            <NavLink
              className="xl:hidden inline"
              to={languagePaths.about[language]}
            >
              <li>{links.about[language]}</li>
            </NavLink>
            <NavLink to={languagePaths.about.patientSatisfaction[language]}>
              <li>{links.about.patientSatisfaction[language]}</li>
            </NavLink>
          </ul>
        </li>
        <li>
          <NavLink to={languagePaths.treatments[language]}>
            {links.treatments[language]}
          </NavLink>
        </li>
        <li
          className="text-center"
          onMouseEnter={() => {
            if (windowWidth > 1080) {
              setHoverStates((prev) => ({ ...prev, sixth: true }));
            }
          }}
          onMouseLeave={() => {
            if (windowWidth > 1080) {
              setHoverStates((prev) => ({ ...prev, sixth: false }));
            }
          }}
        >
          <NavLink
            className="text-center z-50 w-full h-full relative xl:inline hidden"
            to={languagePaths.contact[language]}
          >
            {links.contact[language]}
            <Icons
              className={`absolute pointer-events-none xl:top-[9px] top-[5px] -right-8 animation ${
                hoverStates.sixth ? "-rotate-180" : "rotate-[360deg]"
              }`}
              iconName={"arrow-tooth"}
              size={18}
              fillColor={"#f0f9ff"}
            />
          </NavLink>
          <BaseButton
            className="w-fit xl:hidden inline hover:!scale-100 rounded-none bg-transparent !p-0 text-lg font-medium text-sky-700"
            onClick={() =>
              setHoverStates((prev) => ({ ...prev, sixth: !prev.sixth }))
            }
            content={
              language == "TR" ? "İletişim Bilgileri" : "Contact Information"
            }
          />
          <Icons
            className={`absolute pointer-events-none top-[13px] right-[calc(50%-8rem)] animation xl:hidden inline ${
              hoverStates.sixth ? "-rotate-180" : "rotate-[360deg]"
            } ${language == "TR" && "!right-[calc(50%-5.5rem)]"}`}
            iconName={"arrow-tooth"}
            size={18}
            fillColor={"#f0f9ff"}
          />
          <ul
            className={`navbar-dropdown ${
              hoverStates.sixth
                ? "3xl:h-[60px] xl:h-[50px] h-[100px]"
                : "h-0 destroyer pointer-events-none"
            } top-14 xl:top-20`}
          >
            <NavLink
              className="xl:hidden inline"
              to={languagePaths.contact[language]}
            >
              <li>{links.contact[language]}</li>
            </NavLink>
            <NavLink to={languagePaths.contact.appointmentRequest[language]}>
              <li>{links.contact.appointmentRequest[language]}</li>
            </NavLink>
          </ul>
        </li>
        <li>
          <NavLink to={languagePaths.faq[language]}>
            {links.faq[language]}
          </NavLink>
        </li>
        {/* <li>
        <NavLink to={languagePaths.process[language]}>
          {links.process[language]}
        </NavLink>
      </li> */}
      </ul>
    </nav>
  );
}
