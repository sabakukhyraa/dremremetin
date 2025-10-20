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

            {/* Cases Section */}
            <section className="py-20">
              <div className="container mx-auto px-4 mb-12">
                <h2 className="text-4xl lg:text-5xl lg:leading-snug font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-snug">
                  {language === "TR"
                    ? "Başarı Hikayelerimiz"
                    : "Our Success Stories"}
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                  {language === "TR"
                    ? "Hastalarımızın tedavi öncesi ve sonrası dönüşümlerini keşfedin"
                    : "Discover our patients' before and after transformations"}
                </p>
              </div>

              <div className="">
                {beforeAfter.map((item, index) => (
                  <BeforeAfterCard
                    key={index}
                    video={item.video}
                    text={item[language]}
                    author={
                      language === "TR"
                        ? "Uzm. Dr. Emre Metin"
                        : "Dr. Med. Dent. Emre Metin"
                    }
                    caseNumber={index + 1}
                    index={index}
                  />
                ))}
              </div>
            </section>
            <Profile isShortened={false} />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
