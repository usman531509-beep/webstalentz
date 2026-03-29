import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL('https://webstalentz.com'),
  title: {
    default: "WebsTalentz | Custom Software House",
    template: "%s | WebsTalentz"
  },
  description: "WebsTalentz helps startups, brands, and enterprises launch modern websites, ecommerce stores, mobile applications, and custom software solutions. Partner with a premier software house.",
  keywords: ["Software House", "Custom Software Development", "Web Development", "Mobile App Development", "Ecommerce Solutions", "WebsTalentz", "Enterprise Web Apps"],
  authors: [{ name: "WebsTalentz" }],
  creator: "WebsTalentz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webstalentz.com",
    title: "WebsTalentz | Custom Software House",
    description: "WebsTalentz helps startups, brands, and enterprises launch modern websites, ecommerce stores, mobile applications, and custom software solutions.",
    siteName: "WebsTalentz",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "WebsTalentz Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebsTalentz | Custom Software House",
    description: "Launch modern websites, ecommerce stores, mobile applications, and custom software solutions with WebsTalentz.",
    creator: "@webstalentz",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: '/favicon.ico?v=1',
    shortcut: '/favicon.ico?v=1',
    apple: '/icon.png?v=1',
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "WebsTalentz",
              "url": "https://webstalentz.com",
              "logo": "https://webstalentz.com/images/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/webstalentz",
                "https://twitter.com/webstalentz",
                "https://instagram.com/webstalentz"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-339-6222327",
                "contactType": "customer service",
                "email": "support@webstalentz.com",
                "areaServed": "Global",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Topbar />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
