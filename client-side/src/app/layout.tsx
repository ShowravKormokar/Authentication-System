import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Your App Name",
    template: "%s | Your App Name",
  },
  description: "Modern web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${epilogue.variable} bg-[#010B13] text-cyan-50`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}