import type { Metadata } from "next";
import { Suspense } from 'react'
import Loading from "./loading"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/_main.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoCall } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Shah Cleaning Service — We provide cleaning services all around NSW.",
  description: "All Cleaning Services in Sydney",
  icons: {
    icon: ["./images/favicon.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Header/>
        <Suspense fallback={<Loading/>}>
        <main className="main">
          {children}
          <a className="call_container" href="tel:0452412683"><IoCall className="call_icon"/></a>
        </main>
        </Suspense>
        <Footer/>
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
          crossOrigin="anonymous" 
        />
      </body>
    </html>
  );
}
