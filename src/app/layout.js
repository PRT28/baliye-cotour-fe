import localFont from "next/font/local";
import "./globals.css";

import SessionWrapper from "./SessionWrapper";

import 'core-js'
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <SessionWrapper>{children}</SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}
