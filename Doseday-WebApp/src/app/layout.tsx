import { Inter, Maven_Pro, Public_Sans, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import ThemeProvider from "../components/theme/ThemeProvider";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

const sfProText = localFont({
  src: "../../public/fonts/SF-Pro-Text-Regular.otf",
  variable: "--font-sf-pro-text",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  display: "swap",
});

const kombin = localFont({
  src: "../../public/fonts/Kombin.woff2",
  variable: "--font-kombin",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  display: "swap",
});

const gacor = localFont({
  src: "../../public/fonts/Gacor.ttf",
  variable: "--font-gacor",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  display: "swap",
});

const sfProDisplay = localFont({
  src: "../../public/fonts/SF-ProDisplay.otf",
  variable: "--font-sf-pro-display",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  display: "swap",
});

export const metadata = {
  title: "DoseDay - O primeiro café da beleza do Brasil",
  description:
    "Sua skincare agora tem gosto de cappuccino. O café funcional mais completo do Brasil está chegando.",
  icons: {
    icon: "favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 0.75,
  maximumScale: 0.75,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  console.log(process.env.NEXT_PUBLIC_FB_PIXEL_ID);

  return (
    <html
      lang="pt-BR"
      className={`${inter.className} ${publicSans.variable} ${spaceGrotesk.className} ${kombin.className} ${sfProDisplay.variable} ${mavenPro.className} ${gacor.className} ${sfProText.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${
              process.env.NEXT_PUBLIC_FB_PIXEL_ID || ""
            }&ev=PageView&noscript=1`}
            alt="facebook pixel"
          />
        </noscript>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
