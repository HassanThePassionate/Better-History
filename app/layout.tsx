import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Better History",
  description: "The Better History",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
          <div className='flex'>
            <div className='h-[100vh] sticky top-0 '>
              <Sidebar />
            </div>
            <div className='md:w-[898px] px-6 '>{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
