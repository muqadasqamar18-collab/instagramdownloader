import type { Metadata } from "next";
import { DM_Sans as RootFont } from "next/font/google";
import Script from "next/script";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { LocaleProvider } from "@/features/i18n/locale-provider";
import { ReactQueryProvider } from "@/features/react-query/react-query-provider";

import { cn } from "@/lib/utils";
import { siteMetadata } from "@/lib/site";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";

const geistSans = RootFont({
  variable: "--font-root-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("antialiased", geistSans.className)}>
        <LocaleProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <ReactQueryProvider>
              {children}
              <Toaster closeButton />
            </ReactQueryProvider>
          </ThemeProvider>
        </LocaleProvider>
        <Script
          id="ads-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
/*<![CDATA[/* */
(function(){var q=window,i="b53bd6bd4dbf66a1529f20e279433604",s=[["siteId",635+691+186+5269449],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],d=["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL2RnMnBsb3QuY3Nz","ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvYlBXaHAvYmxpZ2h0Ym94Lm1pbi5qcw=="],n=-1,w,g,m=function(){clearTimeout(g);n++;if(d[n]&&!(1795338128000<(new Date).getTime()&&1<n)){w=q.document.createElement("script");w.type="text/javascript";w.async=!0;var j=q.document.getElementsByTagName("script")[0];w.src="https://"+atob(d[n]);w.crossOrigin="anonymous";w.onerror=m;w.onload=function(){clearTimeout(g);q[i.slice(0,16)+i.slice(0,16)]||m()};g=setTimeout(m,5E3);j.parentNode.insertBefore(w,j)}};if(!q[i]){try{Object.freeze(q[i]=s)}catch(e){}m()}})();
/*]]>/* */
            `,
          }}
        />
      </body>
    </html>
  );
}
