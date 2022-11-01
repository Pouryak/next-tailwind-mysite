import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  // Hydration fix
  // https://stackoverflow.com/questions/71706064/react-18-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
