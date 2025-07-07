import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kodoka - Transform Your Data Into Actionable Insights",
  description:
    "Expert analytics implementation and optimization services for Google Analytics, Matomo, and custom solutions. We also build modern websites and e-commerce platforms.",
  keywords:
    "analytics, Google Analytics, Matomo, data analysis, business intelligence, conversion optimization, web development, e-commerce",
  authors: [{ name: "Kodoka" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Kodoka - Transform Your Data Into Actionable Insights",
    description:
      "Expert analytics implementation and optimization services for Google Analytics, Matomo, and custom solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodoka - Transform Your Data Into Actionable Insights",
    description:
      "Expert analytics implementation and optimization services for Google Analytics, Matomo, and custom solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
