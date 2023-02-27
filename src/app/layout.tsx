import { crimsonPro } from "utils/fonts";
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
