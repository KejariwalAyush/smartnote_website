import type { Metadata } from "next";
import "./globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

export const metadata: Metadata = {
  title: "Smartnote | Premium School Stationery | A GPW Offset Brand",
  description: "Odisha's trusted manufacturer for Answer Booklets, OMR Sheets, and Custom Notebooks. Secure your supply for upcoming academic sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
