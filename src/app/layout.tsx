import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer"; // Assuming this path is correct
import ClientLayout from "./components/ClientLayout"; // handles conditional Navbar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kai Foundry",
  description: "We build scalable and secure software solutions.",
  openGraph: {
    title: "Your IT Company - Best Software Solutions",
    description: "We build scalable and secure software solutions.",
    url: "https://kaifoundry.com/",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <div className="container max-w-[1920px] overflow-x-hidden mx-auto">
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </div>
      </body>
    </html>
  );
}
