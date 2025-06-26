import { Geist, Oswald, Unna} from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["200","300","400","500","600","700"],
  subsets: ["latin"],
});

const unna = Unna({
  variable: "--font-unna",
  weight: "400",
  subsets: ["latin"],
});


export const metadata = {
  title: "Elijah's Fire Faith Ministry & Yes4Save Foundation",
  description:
    "Join Elijah's Fire Faith Ministry & Yes4Save Foundation in spreading the Gospel and serving communities through evangelism, humanitarian outreach & events.",
  authors: [
    { name: "Jaishanth" },
    { name: "Samrith" },
    { name: "Raghavi" },
  ],
  keywords:
    "Yes4save, yes4save foundation, elijah fire faith ministry, Christian ministry, evangelism, faith, outreach, nonprofit, Jesus, missions, gospel",
  openGraph: {
    title: "Elijah's Fire Faith Ministry & Yes4Save Foundation",
    description:
      "Be part of our mission transforming lives through faith & compassion.",
    url: "https://yes4save.org",
    images: ["https://www.yes4save.org/1.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah's Fire Faith Ministry & Yes4Save Foundation",
    description:
      "Igniting revival and serving communities through Christ-centered missions and outreach.",
    images: ["https://www.yes4save.org/1.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${oswald.variable} ${unna.variable} antialiased`}
      >
        <Suspense>
        <Navbar/>
        {children}
        <Footer/>
        </Suspense>
      </body>
    </html>
  );
}
