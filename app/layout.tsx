import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dreamplanner = localFont({
  src: "../public/font/dreamplanner.otf",
  variable: "--font-dreamplanner",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campfire-dp-generator.vercel.app"),
  title: "Campfire DP Generator | Official Game Hackathon",
  description:
    "Generate your official Campfire Game Hackathon DP. Join the heat in Lagos, Ogbomoso, Ilorin, Abeokuta, and Port Harcourt. Show your support and get ready to hack!",
  keywords: [
    "Campfire Hackathon",
    "Game Development",
    "DP Generator",
    "Profile Picture",
    "Hackathon 2024",
    "Lagos Gaming",
    "Ogbomoso Tech",
    "Ilorin Developers",
    "Abeokuta Hackathon",
    "Port Harcourt Gaming",
  ],
  authors: [{ name: "Campfire Team" }],
  openGraph: {
    title: "Campfire DP Generator | Official Game Hackathon",
    description:
      "Generate your official Campfire Game Hackathon DP. Show your support and get ready to hack!",
    url: "https://campfire-dp-generator.vercel.app/",
    siteName: "Campfire DP Generator",
    images: [
      {
        url: "/landing.svg",
        width: 1200,
        height: 630,
        alt: "Campfire DP Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campfire DP Generator | Official Game Hackathon",
    description:
      "Generate your official Campfire Game Hackathon DP. Show your support and get ready to hack!",
    images: ["/landing.svg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#AD684F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dreamplanner.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
