import { Crimson_Pro } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
});

import "./globals.css";

export const metadata = {
  title: "The Scrapbookers",
  description: "Travel Blog of The Scrapbookers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={crimsonPro.className}>
      <body>{children}</body>
    </html>
  );
}
