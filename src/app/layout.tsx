import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en" className="h-full antialiased font-sans">
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
