import Script from "next/script";
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
    <html lang="en" style={crimsonPro.style}>
      <body className={!WEBSITE_IS_ACTIVE ? "bg-orange-100" : ""}>
        {WEBSITE_IS_ACTIVE ? children : <WebsiteUnderConstruction />}
      </body>

      {process.env.environment === "production" && (
        <>
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.googleAnalyticsId}`}
          />
          <Script id="ga-script" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', '${process.env.googleAnalyticsId}');
                `}
          </Script>
        </>
      )}
    </html>
  );
}
