import type { Metadata } from "next";
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shah Cleaning Service",
  description: "All Cleaning Services",
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
        {children}
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
