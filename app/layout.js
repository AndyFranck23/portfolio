// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Andy PortFolio",
  description: "Découvrez mon portfolio Andy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <meta name="google-adsense-account" content="ca-pub-3065520205265426" />
        <meta name="google-site-verification" content="SmhbBbx8E73PiiMC2VoGXxVnFl5XQp9Qhz9pNpKabT8" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3065520205265426"
          crossOrigin="anonymous"></script>
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
