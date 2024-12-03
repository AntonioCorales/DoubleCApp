import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo/ApolloWrapper";
import { QueryProvider } from "@/lib/query/QueryProvider";
import { Suspense } from "react";
import Layout from "@/components/elements/GeneralLayout";
import { SessionProvider } from "next-auth/react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DoubleCReacts | App",
  description: "Anime app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <QueryProvider>
            <ApolloWrapper>
              <Suspense fallback={<div className="text-white">Loading...</div>}>
                <Layout> {children} </Layout>
              </Suspense>
            </ApolloWrapper>
          </QueryProvider>
      </body>
    </html>
  );
}