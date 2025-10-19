import { useContext } from "react";
import AccordionItem from "../components/accordion/AccordionItem";
import { StateContext } from "../App";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { faqs } from "../services/data";

export default function FAQ() {
  const { language } = useContext(StateContext);
  const accordionList = faqs[language].map((item, index) => {
    return (
      <AccordionItem
        question={item.question}
        answer={item.answer}
        index={index}
        key={index}
      />
    );
  });
  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <html lang={language.toLowerCase()} />
          <meta name="robots" content="index, follow" />
          <title>
            {language == "TR"
              ? "Sık Sorulan Sorular - Uzman Doktor Emre Metin - Ortodontist"
              : "Frequently asked Questions - Specialist Doctor Emre Metin"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Diş hastalıklarına sahip insanların diş doktorlarına en sık sorduğu soruları ve cevaplarını öğrenin."
                : "Find out the most common questions and answers that people with dental diseases ask their dentists."
            }
          />
          <link
            rel="canonical"
            href={
              language == "TR"
                ? "https://dremremetin.com/sss"
                : "https://dremremetin.com/faq"
            }
          />
          <meta
            property="og:url"
            content={
              language == "TR"
                ? "https://dremremetin.com/sss"
                : "https://dremremetin.com/faq"
            }
          />
        </Helmet>
        <div className="container flex flex-col gap-8 xl:gap-16">
          <h1 className="xl:medium-title small-title text-sky-800">
            {language == "TR"
              ? "Sık Sorulan Sorular"
              : "Frequently Asked Questions"}
          </h1>
          <div className="rounded-lg">{accordionList}</div>
        </div>
      </div>
    </HelmetProvider>
  );
}
