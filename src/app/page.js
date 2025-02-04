"use static"
import ValuePart from "./value_part/ValuePart";
import Prices from "./Prices/Prices";
import Testimonials from "./components/Testimonials/testimonials";
import AboutUsComponet from "./AboutUsPart/AboutUs";
import Script from "next/script";


export default function Home() {
  return (
    <div className="flex items-center bg-gradient-to-br from-violet-800 to-blue-950 justify-center flex-col">
       <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4770078592564960"
        crossOrigin="anonymous"
      />
      <ValuePart/> 
      <AboutUsComponet/>
      <Prices/>
      <Testimonials/>
    </div>
  );
}
