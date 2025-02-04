
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComp from "./components/header/HeaderComp";
import ContactForm from "./components/ContactForm/ContactForm";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CoderKid",
  description: "Official web page of Coderkid",
};
export default function RootLayout({ children }) {

  return (
    <html lang="en" id="HTML_item" className="general">
    <head>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4770078592564960"
     crossorigin="anonymous"></script>
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
    <HeaderComp />
       <main>
        {children}
        </main>
        <ContactForm/>
      </body>
    </html>
  );
}
