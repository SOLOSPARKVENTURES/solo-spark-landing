import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const motterTektura = localFont({
  src: "../public/fonts/motter-tektura-normal.ttf",
  variable: "--font-motter-tektura",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solospark.mn"),
  title: {
    default: "Solo Spark Ventures LLC | Захиалгат хөгжүүлэлт ба Стартап хөрөнгө оруулалт",
    template: "%s | Solo Spark Ventures LLC",
  },
  description: "Захиалгат вэбсайт болон мобайл апп хөгжүүлэлт. Стартап хөрөнгө оруулалт ба техникийн мэргэжил. Тогтмол үнэтэй гэрээ. Үүсгэн байгуулагчдад ээлтэй нөхцөл.",
  keywords: [
    "хөгжүүлэлт",
    "стартап",
    "хөрөнгө оруулалт",
    "вэбсайт",
    "мобайл апп",
    "MVP",
    "хаккатон",
    "Mongolia startup",
    "software development Mongolia"
  ],
  authors: [{ name: "Solo Spark Ventures LLC" }],
  creator: "Solo Spark Ventures LLC",
  publisher: "Solo Spark Ventures LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    url: "https://solospark.mn",
    siteName: "Solo Spark Ventures LLC",
    title: "Solo Spark Ventures LLC | Захиалгат хөгжүүлэлт ба Стартап хөрөнгө оруулалт",
    description: "Захиалгат вэбсайт болон мобайл апп хөгжүүлэлт. Стартап хөрөнгө оруулалт ба техникийн мэргэжил.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solo Spark Ventures LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo Spark Ventures LLC",
    description: "Захиалгат хөгжүүлэлт ба Стартап хөрөнгө оруулалт",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://solospark.mn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${motterTektura.variable} antialiased`}
      >
        <StructuredData />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
