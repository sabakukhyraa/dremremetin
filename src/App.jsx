import { HashRouter, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { createContext, useEffect, useState } from "react";
import { languagePaths } from "./services/pathNames";

export const StateContext = createContext({
  language: null,
  toothState: null,
});

function currentLanguageFinder(currentRoute, previousLanguage = "TR") {
  // For homepage, maintain the previous language since both EN and TR use "/"
  if (currentRoute === "/" || currentRoute === "") {
    return previousLanguage;
  }

  for (const section of Object.values(languagePaths)) {
    // Check if it's a Turkish route (more specific check first)
    if (section.TR === currentRoute) return "TR";

    // Check sub-pages for Turkish
    for (const subKey in section) {
      const sub = section[subKey];
      if (typeof sub === "object" && sub?.TR === currentRoute) return "TR";
    }

    // Check if it's an English route
    if (section.EN === currentRoute) return "EN";

    // Check sub-pages for English
    for (const subKey in section) {
      const sub = section[subKey];
      if (typeof sub === "object" && sub?.EN === currentRoute) return "EN";
    }
  }

  return previousLanguage; // Return previous language as fallback
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
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved language preference
    return localStorage.getItem("preferredLanguage") || "TR";
  });
  const [toothState, setToothState] = useState("Soldan Seçiniz");

  useEffect(() => {
    const path = location.hash
      ? location.hash.replace("#", "")
      : location.pathname;

    const foundLang = currentLanguageFinder(path, language);

    if (foundLang !== language) {
      setLanguage(foundLang);
    }
  }, [location, language]);

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  return (
    <StateContext.Provider
      value={{ language, setLanguage, toothState, setToothState }}
    >
      <Layout />
    </StateContext.Provider>
  );
}

export default AppWrapper;
