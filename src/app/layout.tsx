import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JJ Industries - Complete Hotel Supply Solutions",
  description: "Premium quality products bridging local manufacturing with global opportunities. We provide everything you need to deliver exceptional guest experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased transition-colors duration-300 min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
