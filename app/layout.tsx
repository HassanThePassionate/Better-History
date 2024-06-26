"use client";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen dark:bg-[#1C1D21] font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Provider store={store}>
            <div className='flex'>
              <div className='h-[100vh] sticky top-0 '>
                <Sidebar />
              </div>
              <div className='md:w-[898px] px-6 '>{children}</div>
            </div>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
