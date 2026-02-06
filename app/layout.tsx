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
      <head>
        <title>Campfire DP Generator | Official Game Hackathon</title>
        <meta
          name="description"
          content="Generate your official Campfire Game Hackathon DP. Show your support and get ready to hack!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#AD684F" />
        <meta name="author" content="Campfire Team" />
        <meta
          name="keywords"
          content="Campfire Hackathon, Game Development, DP Generator, Profile Picture, Hackathon 2024, Lagos Gaming, Ogbomoso Tech, Ilorin Developers, Abeokuta Hackathon, Port Harcourt Gaming"
        />
        <meta
          name="og:title"
          content="Campfire DP Generator | Official Game Hackathon"
        />
        <meta
          name="og:description"
          content="Generate your official Campfire Game Hackathon DP. Show your support and get ready to hack!"
        />
        <meta
          name="og:url"
          content="https://campfire-dp-generator.vercel.app/"
        />
        <meta name="og:site_name" content="Campfire DP Generator" />
        <meta name="og:image" content="/landing.svg" />
        <meta name="og:image:width" content="1200" />
        <meta name="og:image:height" content="630" />
        <meta name="og:image:alt" content="Campfire DP Generator Preview" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Campfire DP Generator | Official Game Hackathon"
        />
        <meta
          name="twitter:description"
          content="Generate your official Campfire Game Hackathon DP. Show your support and get ready to hack!"
        />
        <meta name="twitter:image" content="/landing.svg" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview: -1, max-image-preview: large, max-snippet: -1"
        />
        <meta name="icon" content="/favicon.ico" />
        <meta name="apple-touch-icon" content="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dreamplanner.variable} antialiased`}
      >
        {children}
        <footer>built with ❤️ by HC 🇳🇬</footer>
      </body>
    </html>
  );
}
