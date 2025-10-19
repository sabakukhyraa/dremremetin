import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import stylesheet from "./css/index.css";

const PreloadStylesheet = ({ href }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = href;
    link.onload = () => {
      setLoaded(true);
    };
    document.head.appendChild(link);

    return () => {
      // Clean up the dynamically added link element if the component unmounts.
      document.head.removeChild(link);
    };
  }, [href]);

  return loaded ? <link rel="stylesheet" href={href} /> : null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreloadStylesheet href={stylesheet} />
    <App />
  </React.StrictMode>
);
