import { Inter } from "next/font/google";
import "./globals.css";
import {
  AppSidebar,
  SidebarProvider,
  ThemeProvider,
  BrowserTabs,
  TopBar,
} from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-dvh flex flex-col max-h-dvh overflow-hidden bg-zinc-50/95">
            <SidebarProvider>
              <AppSidebar />
              <div className="flex flex-col flex-1 h-full overflow-hidden">
                <TopBar />
                <BrowserTabs />
                <div className="overflow-y-auto flex-1 p-3 sm:p-2">{children}</div>
              </div>
            </SidebarProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
