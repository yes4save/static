import { Geist, Oswald, Unna} from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { Suspense } from "react";
import Head from 'next/head';

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
  description: "Join Elijah's Fire Faith Ministry and Yes4Save Foundation in spreading the Gospel and serving communities through evangelism, humanitarian outreach, and revival events.",
  authors: [ 
    {
    name: "Jaishanth"},
    {
    name: "Samrith"},
    {
    name: "Raghavi"},
  ],
  keywords: "Yes4save, yes4save foundation, elijah fire faith ministry, Christian ministry, evangelism, faith, outreach, nonprofit, Jesus, missions, gospel",
  openGraph: {
    title: "Elijah's Fire Faith Ministry & Yes4Save Foundation",
    description:
      "Be part of a Spirit-led mission transforming lives through faith, compassion, and service.",
    url: "https://yes4save.com",
    images: "/1.jpg",
    type: "website",
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "Elijah's Fire Faith Ministry & Yes4Save Foundation",
    description:
      "Igniting revival and serving communities through Christ-centered missions and outreach.",
    images: "/1.jpg",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors.map((author) => author.name).join(", ")} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images} />

        <link rel="icon" href="/favicon.png" />
      </Head>
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
