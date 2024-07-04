import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/context/storeProvider";
import Menu from './menu'

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
         <StoreProvider>
          <body className={inter.className}>
          
            <div className="md:flex w-full p-2">
        {/*菜单*/}
        <Menu></Menu>

        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <div className=" w-full">
          {children}
          </div>
        </div>
      </div>
            
            </body>
         </StoreProvider>
    </html>
  );
}
