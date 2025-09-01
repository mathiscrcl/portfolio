import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from 'next-themes';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mathis Courcoul - Développeur Data - Alternant ",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100 dark:bg-gray-900"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Sidebar />
          <div className="lg:pl-2 lg:pt-2 bg-gray-100 dark:bg-gray-900 flex-1 overflow-y-auto">
            <div className="flex-1 bg-white dark:bg-gray-800 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 dark:lg:border-gray-700 overflow-y-auto">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
