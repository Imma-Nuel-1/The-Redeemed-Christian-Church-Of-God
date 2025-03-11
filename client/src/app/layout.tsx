// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Import global styles
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "The Redeemed Christian Church of God - City of Champions",
  description: "Experience the presence of God with RCCG City of Champions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
