import type { Metadata } from "next";
import "./styles/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Suspense } from "react";
import Loading from "./loading";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Jeongeun Lee",
  description: "Generated by outoro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-Pretendard text-[#101010] dark:text-[#ededed] dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
