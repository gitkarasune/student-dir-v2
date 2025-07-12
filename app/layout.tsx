import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { SubscriptionProvider } from "@/context/subscription-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ND2 Student Directory - Kenule Benson Saro-Wiwa Polytechnic",
  description:
    "Connect with your ND2 classmates at Kenule Benson Saro-Wiwa Polytechnic. Explore student profiles, find study partners, and build lasting connections.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SubscriptionProvider>
            <Header />
              {children}
            <Footer />
          </SubscriptionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}