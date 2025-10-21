import InfoSection from "../components/InfoSection";
import photo from "../assets/ex-clinic.webp";
import photo2 from "../assets/example-clinic.webp";
import photo3 from "../assets/booking.webp";
import {
  articlesUmraniye,
  articlesUskudar,
  buttonsUskudar,
  contactInformation,
} from "../services/data";
import { useContext } from "react";
import { StateContext } from "../App";
import { Helmet, HelmetProvider } from "react-helmet-async";
import WhatsappContact from "../components/WhatsappContact";
import ClinicPreview from "../components/ClinicPreview";
import { Navigation, Clock } from "lucide-react";

const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

export default function Contact() {
  const { language } = useContext(StateContext);
  const phoneNumbers = (
    <address className="flex flex-col gap-4 text-center xl:text-start">
      <WhatsappContact width={"w-full xl:w-fit rounded-lg"} />
      <div>
        <span className="font-semibold not-italic">
          {language == "TR" ? "Adres" : "Address"}:{" "}
        </span>
        Aziz Mahmut Hüdayi, Türbekapı Sk. No:5 D:2, 34672 Üsküdar/İstanbul
      </div>
      <a className="block !break-all" href="mailto:uskudarortodonti@gmail.com">
        <span className="font-semibold not-italic !whitespace-nowrap">
          Mail:{" "}
        </span>
        uskudarortodonti@gmail.com
      </a>
      {contactInformation.phoneNumbers.map((n, i) => (
        <a className="block" key={i} href={`tel:${n}`}>
          <span className="font-semibold not-italic">Tel {i + 1}: </span>
          {n}
        </a>
      ))}
    </address>
  );

  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <html lang={language.toLowerCase()} />

          <title>
            {language == "TR"
              ? "İletişim - Uzman Doktor Emre Metin - Ortodontist"
              : "Contact - Specialist Doctor Emre Metin -  Orthodontist"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Emre Metin'in iletişim bilgileri ile hemen bir randevu alın!"
                : "Make an appointment now with Emre Metin's contact information!"
            }
          />
          <link
            rel="canonical"
            href={
              language == "TR"
                ? "https://dremremetin.com/iletisim"
                : "https://dremremetin.com/contact"
            }
          />
          <meta
            property="og:url"
            content={
              language == "TR"
                ? "https://dremremetin.com/iletisim"
                : "https://dremremetin.com/contact"
            }
          />
        </Helmet>
        <div className="container">
          <div className="flex-col flex gap-8 xl:gap-16">
            <h1 className="medium-title text-sky-900">
              {contactInformation.titles.contact[language]}
            </h1>
            <InfoSection
              title={contactInformation.title[language]}
              image={photo3}
              articleArray={contactInformation.article[language]}
              additional={phoneNumbers}
              theme={"dark"}
            />
            <h2 className="medium-title text-sky-900">
              {contactInformation.titles.clinics[language]}
            </h2>
            <div className="flex flex-col justify-center lg:justify-start lg:flex-row gap-6 xl:gap-12">
              <ClinicPreview
                image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop"
                title="Ümraniye"
                description="Modern tıbbi ekipmanlar ile donatılmış yeni kliniğim."
                phone="+905326543082"
                latitude={41.027976}
                longitude={29.097352}
                googleMapsApiKey={API_KEY} // Add your Google Maps API key here if you have one
                locationNotes={[
                  {
                    icon: <Clock className="w-4 h-4" />,
                    text: "Çarşı metro istasyonuna yakın - 2 dakika yürüme mesafesi",
                  },
                  {
                    icon: <Navigation className="w-4 h-4" />,
                    text: 'Şile Otoyolu\'nda "Ümraniye Belediyesi" tabelalarını görünce sağa dönün',
                  },
                ]}
              />
              <ClinicPreview
                image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=500&fit=crop"
                title="Üsküdar"
                description="Babam ile birlikte çalıştığımız köklü geçmişe sahip klinik."
                phone="+905326543082"
                latitude={41.021261}
                longitude={29.015405}
                googleMapsApiKey={API_KEY} // Add your Google Maps API key here if you have one
                locationNotes={[
                  {
                    icon: <Clock className="w-4 h-4" />,
                    text: "Üsküdar Marmaray istasyonuna yakın - 5 dakika yürüme mesafesi",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
