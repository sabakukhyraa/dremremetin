import { HashRouter } from "react-router-dom";
import Layout from "./Layout";
import { createContext, useEffect, useState } from "react";
import { languagePaths } from "./services/pathNames";

export const StateContext = createContext({
  language: null,
  toothState: null,
});

function currentLanguageFinder(currentRoute) {
  for (const key of Object.keys(languagePaths)) {
    if (languagePaths[key]["TR"] == currentRoute) {
      return "TR";
    } else if (languagePaths[key]["EN"] == currentRoute) {
      return "EN";
    } else {
      if (Object.keys(languagePaths[key]).length != 2) {
        for (const key2 of Object.keys(languagePaths[key])) {
          if (key2 !== "TR" && key2 !== "EN") {
            if (languagePaths[key][key2]["TR"] == currentRoute) {
              return "TR";
            } else if (languagePaths[key][key2]["EN"] == currentRoute) {
              return "EN";
            }
          }
        }
      }
    }
  }
}

function App() {
  useEffect(() => {
    setLanguage(currentLanguageFinder(location.pathname));
  }, []);

  const [language, setLanguage] = useState("TR");
  const [toothState, setToothState] = useState("Soldan Seçiniz");

  return (
    <HashRouter>
      <StateContext.Provider
        value={{ language, toothState, setToothState, setLanguage }}
      >
        <Layout />
      </StateContext.Provider>
    </HashRouter>
  );
}

export default App;

// TODO: https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/?utm_source=lighthouse&utm_medium=devtools
// TODO: https://loadable-components.com/docs/getting-started/
