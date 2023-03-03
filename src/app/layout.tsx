import { WebsiteUnderConstruction } from "components/WebsiteUnderConstrution/WebsiteUnderConstruction";
import { crimsonPro } from "utils/fonts";
import "./globals.css";

export const metadata = {
  title: "The Scrapbookers",
  description: "Travel Blog of The Scrapbookers",
};

const WEBSITE_IS_ACTIVE = process.env.WEBSITE_IS_ACTIVE === "true" || false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={crimsonPro.className}>
      <body className={!WEBSITE_IS_ACTIVE ? "bg-orange-100" : ''}>{WEBSITE_IS_ACTIVE ? children : <WebsiteUnderConstruction />}</body>
    </html>
  );
}
