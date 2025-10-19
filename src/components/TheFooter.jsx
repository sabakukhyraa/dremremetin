import { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../App";
import { languagePaths } from "../services/pathNames";
import { footerData, links } from "../services/data";
import Icons from "./Icons";

export default function TheFooter() {
  const { language } = useContext(StateContext);

  return (
    <div className="bg-sky-900 w-full">
      <div className="container w-full pb-2">
        <div className="grid xl:grid-cols-3 xl:grid-rows-1 grid-cols-1 grid-rows-3 xl:items-start pt-6 pb-4 xl:py-12 gap-8 xl:gap-12">
          <ul className="flex flex-col items-center xl:items-start justify-center font-extralight text-sky-100 text-xl xl:text-2xl gap-2">
            <h2 className="text-sky-500 font-extralight text-3xl xl:text-5xl mb-2 xl:mb-6">
              {footerData.titles.info[language]}
            </h2>
            <li>
              <Link to={languagePaths.about[language]}>
                {links.about[language]}
              </Link>
            </li>
            <li>
              <Link to={languagePaths.treatments[language]}>
                {links.treatments[language]}
              </Link>
            </li>
            <li>
              <Link to={languagePaths.faq[language]}>
                {links.faq[language]}
              </Link>
            </li>
            <li>
              <Link to={languagePaths.contact[language]}>
                {links.contact[language]}
              </Link>
            </li>
            <li>
              <Link to={languagePaths.contact.appointmentRequest[language]}>
                {links.contact.appointmentRequest[language]}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center xl:items-center justify-center xl:!text-center font-extralight text-sky-100 text-xl xl:text-2xl gap-2">
            <h2 className="text-sky-500 font-extralight w-full xl:!text-center text-3xl xl:text-5xl mb-2 xl:mb-6">
              {footerData.titles.clinics[language]}
            </h2>
            <li className="my-2 xl:!text-center">
              <address>
                Aziz Mahmut Hüdayi,
                <br />
                Türbekapı Sk. No:5 D:2,
                <br />
                34672 Üsküdar/İstanbul
              </address>
            </li>
            <li className="mt-2 mb-4 xl:!text-center">
              <address>
                Atatürk Mahallesi,
                <br />
                Ayazma Sk. 2-4 / 4,
                <br />
                Ümraniye/İstanbul
              </address>
            </li>
            <li className="w-full xl:!text-center">
              <a href="tel:+905326543082">+90 532 654 30 82</a>
            </li>
            <li className="w-full xl:!text-center">
              <a href="tel:+905326543082">+90 532 654 30 82</a>
            </li>
            <li className="w-full xl:!text-center">
              <a href="mailto:iletisim@dremremetin.com">
                iletisim@dremremetin.com
              </a>
            </li>
          </ul>
          <ul className="flex flex-col items-center xl:items-end justify-center font-extralight text-sky-100 text-xl xl:text-2xl gap-2">
            <h2 className="text-sky-500 font-extralight text-3xl xl:text-5xl mb-2 w-full xl:text-end xl:mb-6">
              {footerData.titles.map[language]}
            </h2>
            {/* <Map /> */}
          </ul>
        </div>
        <div className="flex items-center xl:flex-row flex-col-reverse xl:gap-0 gap-4 justify-between xl:p-0 pb-2 text-sky-50 font-extralight">
          <div className="text-center xl:text-start">
            <div className="font-medium">
              {footerData.bottomInfo.rights[language]}
            </div>
            <div className="text-xs">Developed & Designed by Ali Kerem Ata</div>
          </div>
          <div className="flex items-center justify-center gap-3 text-center xl:text-end">
            {footerData.socialMedia.map((e, i) => (
              <a href={e.url} key={i} target="_blank" aria-label={e.description}>
                <Icons iconName={e.icon} size={30} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
