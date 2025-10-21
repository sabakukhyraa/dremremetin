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
import ClinicPreview from "../components/ClinicPreview";
import { Navigation, Clock } from "lucide-react";

const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

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
            <div className="flex flex-col justify-center lg:justify-start lg:flex-row gap-6 xl:gap-12 container py-12">
              <ClinicPreview
                image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop"
                title="Ümraniye"
                description={
                  language == "TR"
                    ? "Modern tıbbi ekipmanlar ile donatılmış yeni kliniğim."
                    : "My new clinic, equipped with modern medical equipment."
                }
                phone="+905326543082"
                latitude={41.027976}
                longitude={29.097352}
                googleMapsApiKey={API_KEY} // Add your Google Maps API key here if you have one
                locationNotes={[
                  {
                    icon: <Clock className="w-4 h-4" />,
                    text:
                      language == "TR"
                        ? "Çarşı metro istasyonuna yakın - 2 dakika yürüme mesafesi"
                        : "Close to Çarşı metro station - 2 minutes walking distance.",
                  },
                  {
                    icon: <Navigation className="w-4 h-4" />,
                    text:
                      language == "TR"
                        ? 'Şile Otoyolu\'nda "Ümraniye Belediyesi" tabelalarını görünce sağa dönün.'
                        : 'Turn right when you see the "Ümraniye Belediyesi" signs on the Şile Highway.',
                  },
                ]}
              />
              <ClinicPreview
                image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop"
                title="Üsküdar"
                description={
                  language == "TR"
                    ? "Babam ile birlikte çalıştığımız köklü geçmişe sahip klinik."
                    : "A well-established clinic where I work together with my father."
                }
                phone="+905326543082"
                latitude={41.021261}
                longitude={29.015405}
                googleMapsApiKey={API_KEY} // Add your Google Maps API key here if you have one
                locationNotes={[
                  {
                    icon: <Clock className="w-4 h-4" />,
                    text:
                      language == "TR"
                        ? "Üsküdar Marmaray istasyonuna yakın - 5 dakika yürüme mesafesi"
                        : "Close to Üsküdar Marmaray station - 5 minutes walking distance.",
                  },
                ]}
              />
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
