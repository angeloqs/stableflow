import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StableFlow",
  description: "Fluxo de estudo de estabilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
