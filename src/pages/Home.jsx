import HomeSlider from "../components/HomeSlider";
import InfoSection from "../components/InfoSection";
import photo from "../assets/ex-clinic.webp";
import { useContext } from "react";
import { StateContext } from "../App";
import { Helmet, HelmetProvider } from "react-helmet-async";
import siteIcon from "../assets/site-icon.png";

import { articlesUskudar, buttonsUskudar, beforeAfter } from "../services/data";

import BeforeAfterCard from "../components/BeforeAfterCard";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";
import RatingStars from "../components/RatingStars";
import BusinessContact from "../components/BusinessContact";

export default function Home() {
  const { language } = useContext(StateContext);
  const BeforeAfterCards = beforeAfter.slice(0, 2).map((i, key) => (
    <li className="h-full" key={key}>
      <BeforeAfterCard
        video={i.video}
        text={i[language]}
        caseNumber={key + 1}
        author={
          language == "TR" ? `Uzm. Dr. Emre Metin` : `Dr. Med. Dent. Emre Metin`
        }
      />
    </li>
  ));
  return (
    <HelmetProvider>
      <div className="pt-8 xl:pt-0 -mb-8 xl:-mb-16">
        <Helmet>
          <html lang={language.toLowerCase()} />

          <title>
            {language == "TR"
              ? "Ana Sayfa - Uzman Doktor Emre Metin - Ortodontist"
              : "Homepage - Specialist Doctor Emre Metin -  Orthodontist"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Diş ağrılarınız için Uzm. Dr. Emre Metin'den randevu alın. Diş hastalıkları ve ortodonti hakkında bilgiler edinin."
                : "Make an appointment with Dr. Med. Dent. Emre Metin for your toothaches. Learn about dental diseases and orthodontics."
            }
          />
          <meta
            name="keyword"
            content="emre metin diş, ortodonti, diş tedavileri, ortodonti pahalı mıdır?"
          />
          <meta property="og:url" content="https://dremremetin.com/" />
          <link rel="canonical" href="https://dremremetin.com/" />
          <link rel="manifest" href="https://dremremetin.com/manifest.json" />
          <link rel="shortcut icon" href={siteIcon} type="image/x-icon" />
          <link rel="apple-touch-icon" href={siteIcon} />
        </Helmet>
        <HomeSlider />
        {/* <MainSection /> */}
        <div className="flex-col items-center flex pt-8 xl:pt-12 gap-8 xl:gap-12">
          {/* <TeethNumber /> */}

          <Profile theme={"dark"} isShortened={true} />
          <BusinessContact />
          <section className="3xl:py-32 2xl:py-20 py-8">
            <div className="flex flex-col items-center justify-center container">
              <h2 className="xl:small-title text-lg font-semibold text-sky-800">
                {language == "TR" ? "Ortalama Değerlendirme" : "Average Rating"}
              </h2>
              <div className="flex items-center gap-2 xl:gap-4">
                <RatingStars rate={5} />
                <p className="text-3xl xl:text-5xl font-bold text-sky-900">
                  5.0
                </p>
              </div>
              <Link
                className="hover:underline text-sky-700 font-light text-lg"
                to={
                  language == "TR"
                    ? "/hakkimizda/hasta-memnuniyeti"
                    : "/about/patient-satisfaction"
                }
              >
                {language == "TR" ? "Yorumları oku >" : "Read reviews >"}
              </Link>
            </div>
          </section>
          <section className="bg-sky-200 w-full">
            <div className="grid grid-cols-1 xl:gap-12 gap-8 container py-8 xl:py-16">
              <h2 className="xl:medium-title small-title xl:pb-4 text-sky-600">
                {language == "TR" ? "Klinikler" : "Clinics"}
              </h2>
              <InfoSection
                title={"Üsküdar"}
                image={photo}
                articleArray={articlesUskudar[language]}
                additional={buttonsUskudar[language]}
                theme={"dark"}
              />
              {/* <InfoSection
                title={"Ümraniye"}
                image={photo2}
                articleArray={articlesUmraniye[language]}
                theme={"dark"}
              /> */}
            </div>
          </section>
          <div className="relative w-full h-full xl:-mt-12 -mt-8 xl:pt-12 pt-8">
            <section className="w-full h-full">
              <div className="grid grid-cols-1 xl:gap-12 gap-8">
                <h2 className="xl:medium-title z-[5] small-title container text-sky-900">
                  {language == "TR" ? "Örnek Vakalar" : "Example Cases"}
                </h2>
                <ul className="grid xl:grid-cols-1">{BeforeAfterCards}</ul>
                <Link
                  className="hover:underline container xl:-mt-6 mb-8 xl:justify-self-end text-sky-900 font-light text-end text-lg"
                  to={
                    language == "TR"
                      ? "/hakkimizda#before-after"
                      : "/about#before-after"
                  }
                >
                  {language == "TR"
                    ? "Daha fazla örnek vaka için >"
                    : "View More Case >"}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
