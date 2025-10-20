import TreatmentCard from "../components/TreatmentCard";
import { StateContext } from "../App";
import { useContext } from "react";
import { treatmentsData } from "../services/data";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Treatments() {
  const { language } = useContext(StateContext);
  const treatmentCards = treatmentsData[language].map((t, index) => {
    return (
      <TreatmentCard
        key={index}
        iconName={t.iconName}
        title={t.title}
        text={t.textSummary}
      />
    );
  });

  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <html lang={language.toLowerCase()} />

          <title>
            {language == "TR"
              ? "Tedaviler - Uzman Doktor Emre Metin - Ortodontist"
              : "Treatments - Specialist Doctor Emre Metin -  Orthodontist"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Emre Metin'in uyguladığı, yaptığı tedavi çeşitleri ve tedaviler hakkında bilgi alın."
                : "Learn about the treatment types and treatments that Emre Metin can do."
            }
          />
          <link
            rel="canonical"
            href={
              language == "TR"
                ? "https://dremremetin.com/tedavi-cesitleri"
                : "https://dremremetin.com/treatments"
            }
          />
          <meta
            property="og:url"
            content={
              language == "TR"
                ? "https://dremremetin.com/tedavi-cesitleri"
                : "https://dremremetin.com/treatments"
            }
          />
        </Helmet>
        <div className="container flex flex-col gap-8 xl:gap-16">
          <h1 className="xl:medium-title small-title text-sky-800">
            {treatmentsData.title[language]}
          </h1>
          <div className="">
            {treatmentsData.article1[language]}
            <div
              id="treatments"
              className="grid xl:grid-cols-3 md:grid-cols-2 py-8 grid-cols-1 gap-4 xl:gap-6 text-start order-none xl:-order-1 "
            >
              {treatmentCards}
            </div>
            {treatmentsData.article2[language]}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
