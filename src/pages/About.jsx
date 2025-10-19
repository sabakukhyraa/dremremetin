import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext } from "react";
import { StateContext } from "../App";
import { beforeAfter, aboutUs } from "../services/data";
import BeforeAfterCard from "../components/BeforeAfterCard";
import Profile from "../components/Profile";
export default function About() {
  const { language } = useContext(StateContext);
  const BeforeAfterCards = beforeAfter.map((i, key) => (
    <li className="h-full" key={key}>
      <BeforeAfterCard
        video={i.video}
        text={i[language]}
        author={
          language == "TR" ? `Uzm. Dr. Emre Metin` : `Dr. Med. Dent. Emre Metin`
        }
        caseNumber={key + 1}
      />
    </li>
  ));

  return (
    <HelmetProvider>
      <div className="w-full pb-4 xl:pb-12">
        <Helmet>
          <html lang={language.toLowerCase()} />

          <html lang={language.toLowerCase()} />
          <title>
            {language == "TR"
              ? "Hakkımızda - Uzman Doktor Emre Metin - Ortodontist"
              : "About - Specialist Doctor Emre Metin -  Orthodontist"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Emre Metin'in klinikleri ile alakalı bilgi edinin."
                : "Get information about Emre Metin's clinics."
            }
          />
          <link
            rel="canonical"
            href={
              language == "TR"
                ? "https://dremremetin.com/hakkimizda"
                : "https://dremremetin.com/about"
            }
          />
          <meta
            property="og:url"
            content={
              language == "TR"
                ? "https://dremremetin.com/hakkimizda"
                : "https://dremremetin.com/about"
            }
          />
        </Helmet>
        <div className="flex flex-col gap-8 xl:gap-16">
          <div className="container">
            <h1 className="xl:medium-title small-title text-sky-800">
              {language == "TR" ? "Hakkımızda" : "About us"}
            </h1>
          </div>
          <div className="xl:space-y-16 space-y-8 xl:-mb-16">
            {aboutUs.article[language]}
            <section>
              <h2 className="xl:small-title relative text-lg z-[5] container font-semibold text-sky-800 mb-4 xl:mb-12">
                {language == "TR" ? "Örnek Vakalar" : "Example Cases"}
              </h2>
              <ul id="before-after" className="grid xl:grid-cols-1 w-full">
                {BeforeAfterCards}
              </ul>
            </section>
            <Profile isShortened={false} />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
