import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers, { ThemeProvider } from "./providers";
import Navbar from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "JWT | GSAP",
    description: "Learn JWT With GSAP Animation",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Navbar />
                    <Providers>
                        <main className="pt-12 min-h-screen">
                            {children}
                        </main>
                        <Footer />
                    </Providers>
                </ThemeProvider>
            </body>
        </html>
    );
}
