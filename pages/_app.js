import "tailwindcss/tailwind.css";
import "@fontsource/plus-jakarta-sans";
import "../styles/App.css";

import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="moodly.site">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
