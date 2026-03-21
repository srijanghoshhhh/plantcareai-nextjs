import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Home | PlantCare AI",
  description: "Detect Plant Diseases Instantly With AI. Expert Verified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${poppins.variable} ${sourceSans.variable} font-sans antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}
      >
        <ModalProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 flex flex-col w-full">
              {children}
            </div>
            <Footer />
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
