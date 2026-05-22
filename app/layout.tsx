import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MotionProvider } from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethan Peterson — AI-first marketing systems",
  description:
    "I build AI-first marketing systems that actually ship — and the agents that run them. Currently at Vibrant Wellness and Pickled Court.",
  metadataBase: new URL("https://ethanpeterson.com"),
  openGraph: {
    title: "Ethan Peterson — AI-first marketing systems",
    description:
      "I build AI-first marketing systems that actually ship — and the agents that run them.",
    url: "https://ethanpeterson.com",
    siteName: "Ethan Peterson",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <MotionProvider>
          <SmoothScroll />
          <CustomCursor />
          <Nav />
          {children}
          <div className="noise-overlay" aria-hidden />
        </MotionProvider>
      </body>
    </html>
  );
}
