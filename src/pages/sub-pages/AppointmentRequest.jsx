import ComingSoon from "../../components/ComingSoon";
import { StateContext } from "../../App";
import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function AppointmentRequest() {
  const { language } = useContext(StateContext);

  return (
    <HelmetProvider>
      <div className="w-full">
        <Helmet>
          <html lang={language.toLowerCase()} />

          <title>
            {language == "TR"
              ? "Randevu Talebi - Uzman Doktor Emre Metin - Ortodontist"
              : "Appointment Request - Specialist Doctor Emre Metin -  Orthodontist"}
          </title>
          <meta
            name="description"
            content={
              language == "TR"
                ? "Emre Metin'den randevu alın!"
                : "Make an appointment with Emre Metin!"
            }
          />
          <link
            rel="canonical"
            href={
              language == "TR"
                ? "https://dremremetin.com/iletisim/randevu-talebi"
                : "https://dremremetin.com/contact/appointment-request"
            }
          />
          <meta
            property="og:url"
            content={
              language == "TR"
                ? "https://dremremetin.com/iletisim/randevu-talebi"
                : "https://dremremetin.com/contact/appointment-request"
            }
          />
        </Helmet>
        <div className="container">
          <ComingSoon />
        </div>
      </div>
    </HelmetProvider>
  );
}
