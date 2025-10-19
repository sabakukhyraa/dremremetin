import { Helmet, HelmetProvider } from "react-helmet-async";
import { useContext } from "react";
import { StateContext } from "../../App";
import { comments } from "../../services/dataComments";
import dateConverter from "../../services/dateConverter";
import RatingStars from "../../components/RatingStars";

export default function PatientSatisfaction() {
  const { language } = useContext(StateContext);
  const mapComments = comments[language].map((comment, index) => (
    <li
      key={index}
      className="flex flex-col gap-4 xl:gap-6 p-4 rounded-lg bg-sky-600 w-full text-white"
    >
      <div className="flex items-center justify-between">
        <a className="flex items-center gap-2" href={comment.author_url}>
          {comment.profile_photo_url && (
            <img
              loading="lazy"
              className="rounded-full object-cover w-8 h-8 xl:w-12 xl:h-12"
              src={comment.profile_photo_url}
            />
          )}
          <h2 className="text-lg xl:text-2xl font-medium text-start">
            {comment.author_name}
          </h2>
        </a>
        <RatingStars rate={comment.rating} />
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-light pr-4 text-start">{comment.text}</p>
        <span className="text-end text-xs pt-4 font-light italic">
          {dateConverter(comment.time, language == "TR" ? "tr-TR" : "en-US")}
        </span>
      </div>
    </li>
  ));
  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <html lang={language.toLowerCase()} />

          <title>
            {language == "TR"
              ? "Hasta Memnuniyeti - Uzman Doktor Emre Metin - Ortodontist"
              : "Patient Satisfaction - Specialist Doctor Emre Metin -  Orthodontist"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Emre Metin'in hastalarının yaptıkları yorumları okuyun."
                : "Read the comments made by patients who received treatment from Emre Metin."
            }
          />
          <link
            rel="canonical"
            href={
              language == "TR"
                ? "https://dremremetin.com/hakkimizda/hasta-memnuniyeti"
                : "https://dremremetin.com/about/patient-satisfaction"
            }
          />
          <meta
            property="og:url"
            content={
              language == "TR"
                ? "https://dremremetin.com/hakkimizda/hasta-memnuniyeti"
                : "https://dremremetin.com/about/patient-satisfaction"
            }
          />
        </Helmet>
        <div className="container flex flex-col gap-8 xl:gap-16">
          <h1 className="xl:medium-title small-title text-sky-800">
            {language == "TR" ? "Hasta Memnuniyeti" : "Patient Satisfaction"}
          </h1>
          <section className="xl:space-y-12 space-y-4">
            <div className="flex flex-col xl:items-end items-center justify-center">
              <h2 className="xl:small-title text-lg font-semibold text-sky-800">
                {language == "TR" ? "Ortalama Değerlendirme" : "Average Rating"}
              </h2>
              <div className="flex items-center gap-2 xl:gap-4">
                <RatingStars rate={5} />
                <p className="text-3xl xl:text-5xl font-bold text-sky-900">
                  5.0
                </p>
              </div>
            </div>
            <h2 className="xl:small-title text-lg font-semibold text-sky-800">
              {language == "TR" ? "Hasta Değerlendirmeleri" : "Patient Reviews"}
            </h2>
            <ul className="grid xl:grid-cols-2 grid-cols-1 gap-4 xl:gap-8">
              {mapComments}
            </ul>
            <a
              target="_blank"
              className="text-sky-800 hover:underline underline-offset-2 font-light italic block text-center xl:text-end"
              href="https://search.google.com/local/reviews?placeid=ChIJO0vErme5yhQRTKyu9D3Ajtw"
            >
              {language == "TR"
                ? "Daha fazla yorum oku >"
                : "Read more reviews >"}
            </a>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
}
