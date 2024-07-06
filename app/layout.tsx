import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import StoreProvider from "@/context/storeProvider";
import { cn } from "@/lib/utils"
import Mainnav from '@/components/main-nav'
import Pageheader from '@/components/page-header'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AI 招聘助手",
  description: "简历信息分析、识别、评估归档",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
         <StoreProvider>
          <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>
          
    
          <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Mainnav></Mainnav>
      <div className="flex flex-col">
        <Pageheader></Pageheader>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
        </main>
      </div>
    </div>
          </body>
         </StoreProvider>
    </html>
  );
}
