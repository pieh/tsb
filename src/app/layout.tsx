import Script from "next/script";
import { WebsiteUnderConstruction } from "components/WebsiteUnderConstrution/WebsiteUnderConstruction";
import { crimsonPro } from "utils/fonts";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | The Scrapbookers",
    default: "The Scrapbookers",
  },
  description: "Travel Blog of The Scrapbookers",
  generator: "Next.js",
  keywords: ["Travel", "South East Asia", "JavaScript"],
  authors: [
    { name: "Davide Crestini", url: "https://dcrestini.me" },
    { name: "Beatrice Cox", url: "https://beatricecox.com" },
  ],
  creator: "Davide Crestini",
  publisher: "Beatrice Cox",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Scrapbookers',
    description: 'Travel Blog of The Scrapbookers',
    // siteId: '1467726470533754880',
    // creator: '@nextjs',
    // creatorId: '1467726470533754880',
    // images: ['https://nextjs.org/og.png'],
  },
  // images: [
  //   {
  //     url: 'https://nextjs.org/og.png',
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     url: 'https://nextjs.org/og-alt.png',
  //     width: 1800,
  //     height: 1600,
  //     alt: 'My custom alt',
  //   },
  // ],
  locale: 'en-GB',
  type: 'website',
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
