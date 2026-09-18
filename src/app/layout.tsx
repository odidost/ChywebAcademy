import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Chyweb Academy | Learn Digital Skills. Build Real Careers.",
  description: "Gain practical, job-ready digital marketing and SEO skills in Nigeria. Learn from Oko David with hands-on projects, modern AI tools integration, and mentorship. Enroll now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-full flex flex-col bg-brand-bg text-text-primary antialiased relative bg-noise">
        {/* Modern Fixed Backdrop Orbs */}
        <div className="fixed-orb-emerald"></div>
        <div className="fixed-orb-gold"></div>
        
        <Header />
        <main className="flex-grow pt-20 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
