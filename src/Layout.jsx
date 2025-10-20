import { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { StateContext } from "./App";
import TheFooter from "./components/TheFooter";
import TheNavbar from "./components/TheNavbar";
import TheTopInfo from "./components/TheTopInfo";
import Home from "./pages/Home";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PatientSatisfaction from "./pages/sub-pages/PatientSatisfaction";
import AppointmentRequest from "./pages/sub-pages/AppointmentRequest";
import { languagePaths } from "./services/pathNames";
import turkishFlag from "./assets/tr-flag.png";
import englishFlag from "./assets/en-flag.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LanguageOption from "./components/LanguageOption";
import siteIcon from "./assets/site-icon.png";
import WhatsappContact from "./components/WhatsappContact";

export default function Layout() {
  const { language } = useContext(StateContext);
  const [mobileState, setMobileState] = useState(false);
  const location = useLocation();

  // TODO: Site tamamlandığında açılacak!
  useEffect(() => {
    const hash = location.hash;
    window.scrollTo({
      top: 0,
    });
    if (location.hash == hash) {
      const targetElement = document.getElementById(hash.slice(1));

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Müşteri istekleri.
  // TODO: "Randevu için arayınız" yazan mobilde tıklanınca otomatik olarak numarayı çeviren buton.
  // TODO: "Randevu için arayınız" butonunun altına sade bir tasarıma sahip çalışma saatleri.

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="shortcut icon" href={siteIcon} type="image/x-icon" />
        <meta name="theme-color" content="#0ea5e9" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0ea5e9" />
        <meta
          name="apple-mobile-web-app-title"
          content={languagePaths.home[language]}
        />
        <meta name="msapplication-TileImage" content={siteIcon} />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
      </Helmet>
      <div className="flex flex-col items-center relative">
        <WhatsappContact width={"w-full"} />

        <TheTopInfo />
        <div className="relative w-full flex flex-col items-center">
          <TheNavbar
            languagePaths={languagePaths}
            mobileState={mobileState}
            toggleState={(state) => setMobileState(state)}
          />

          <div className="w-full py-8 xl:py-16">
            <Routes>
              <Route
                exact
                path={languagePaths.home[language]}
                element={<Home />}
              />
              <Route path={languagePaths.about[language]}>
                <Route index element={<About />} />
                <Route
                  path={languagePaths.about.patientSatisfaction[language]}
                  element={<PatientSatisfaction />}
                />
              </Route>
              <Route
                path={languagePaths.treatments[language]}
                element={<Treatments />}
              />
              <Route path={languagePaths.faq[language]} element={<FAQ />} />
              <Route path={languagePaths.contact[language]}>
                <Route index element={<Contact />} />
                <Route
                  path={languagePaths.contact.appointmentRequest[language]}
                  element={<AppointmentRequest />}
                />
              </Route>
            </Routes>
          </div>
        </div>
        <WhatsappContact width={"w-full"} />
        <TheFooter />
        <div className="fixed bottom-1/2 -right-6 lg:-right-10 rounded-lg shadow-lg z-[99999] flex items-center justify-center px-0 py-1 lg:p-1 bg-sky-800">
          {language == "TR" ? (
            <LanguageOption optionLanguage={"EN"} image={englishFlag} />
          ) : (
            <LanguageOption optionLanguage={"TR"} image={turkishFlag} />
          )}
        </div>
      </div>
    </HelmetProvider>
  );
}
