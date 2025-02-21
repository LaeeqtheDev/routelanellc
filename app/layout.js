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
  title: "Routelane - Your Ultimate Dispatch & Load Data Hub",
  description:
    "Routelane offers the most searched dispatch and load data for freight and trucking. Experience high ranking visibility and real-time load data insights to boost your business.",
  keywords:
    "dispatch, load, data, freight, trucking, high ranking, high visibility, most searched, real-time load data, dispatch services",
  openGraph: {
    title: "Routelane - Your Ultimate Dispatch & Load Data Hub",
    description:
      "Discover the most searched dispatch and load data with Routelane. Our platform provides high ranking and high visibility insights for all your freight needs.",
    url: "https://www.routelanellc.vercell.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Routelane - Your Ultimate Dispatch & Load Data Hub",
    description:
      "Discover real-time dispatch and load data insights that enhance visibility and ranking for freight and trucking solutions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
