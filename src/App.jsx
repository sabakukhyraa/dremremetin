import { HashRouter, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { createContext, useEffect, useState } from "react";
import { languagePaths } from "./services/pathNames";

export const StateContext = createContext({
  language: null,
  toothState: null,
});

function currentLanguageFinder(currentRoute) {
  for (const section of Object.values(languagePaths)) {
    // Ana seviyede kontrol
    if (section.TR === currentRoute) return "TR";
    if (section.EN === currentRoute) return "EN";

    // Alt sayfalar varsa kontrol et
    for (const subKey in section) {
      const sub = section[subKey];
      if (sub?.TR === currentRoute) return "TR";
      if (sub?.EN === currentRoute) return "EN";
    }
  }
  return "TR"; // varsayılan
}

function AppWrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

function App() {
  const location = useLocation();
  const [language, setLanguage] = useState("TR");
  const [toothState, setToothState] = useState("Soldan Seçiniz");

  useEffect(() => {
    const path = location.hash
      ? location.hash.replace("#", "")
      : location.pathname;
    const foundLang = currentLanguageFinder(path);
    setLanguage(foundLang);
  }, [location]);

  return (
    <StateContext.Provider
      value={{ language, setLanguage, toothState, setToothState }}
    >
      <Layout />
    </StateContext.Provider>
  );
}

export default AppWrapper;
