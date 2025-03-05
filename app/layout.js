import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Routelane - Best Truck Dispatch & Load Board for USA Truckers & Brokers",
  description:
    "Find the highest-paying truck loads with Routelane. We offer top-tier dispatch services, real-time freight tracking, and the best solutions for truckers, brokers, and shippers in the USA.",
  keywords:
    "truck dispatch, freight dispatch, load board, dispatch services, trucking services, freight brokers, shippers, owner-operators, truckers, USA logistics, trucking business, real-time load data, best load boards, high-paying loads, truck dispatcher, freight dispatching, truckload freight, dry van, reefer, flatbed, LTL, FTL, spot market rates, load visibility, trucking marketplace, transportation logistics, best dispatch service, hotshot loads, power-only loads, carrier services, freight matching, DAT, Truckstop, freight marketplace, logistics solutions, cargo hauling, fleet management, 3PL services, load tracking, dispatch software, load planning, best dispatching company, truck load planner, load posting, freight matching platform, real-time truck dispatching, truck freight rates, truck load matching, logistics technology, transportation management, independent dispatching services, best freight brokers, truck driver jobs, freight load boards, USA trucking dispatch",
  openGraph: {
    title: "Routelane - The Ultimate Truck Dispatch & Load Data Hub",
    description:
      "Routelane provides real-time dispatch and load data insights to maximize visibility and ranking for truckers, brokers, and shippers.",
    url: "https://www.routelanellc.vercel.app",
    type: "website",
    images: [
      {
        url: "https://www.routelanellc.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Routelane - Truck Dispatch & Load Board",
      },
    ],
  },
  social: {
    instagram: "https://www.instagram.com/routelane",
    linkedin: "https://www.linkedin.com/company/routelane",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="instagram:site" content={metadata.social.instagram} />
        <meta name="linkedin:site" content={metadata.social.linkedin} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
