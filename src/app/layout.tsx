import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lato, Montserrat, Oswald, Slabo_27px, Merriweather, Space_Grotesk, Nunito, Playfair_Display, DM_Sans } from "next/font/google";
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


export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // or as needed
  variable: '--font-lato',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

export const slabo = Slabo_27px({
  subsets: ['latin'],
  weight: ['400'], // Only 400 available
  variable: '--font-slabo',
  display: 'swap',
});

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // You can customize this
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});



export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
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

const scrollToTopSlowly = () => {
  const duration = 1000; 
  const start = window.scrollY;
  const startTime = performance.now();

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start * (1 - easedProgress));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
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
          {/* <button
            onClick={scrollToTopSlowly}
            className="fixed bottom-6 right-6 bg-[#BA24D5] cursor-pointer text-white p-3 rounded-full shadow-md transition"
          >
            <ImArrowUp />
          </button> */}
        </div>
      </body>
    </html>
  );
}
