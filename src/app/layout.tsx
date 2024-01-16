import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/lib/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "반장창고",
  description: "반장창고에서 다양한 품목, 브랜드의 제품을 한 번에 주문하세요.",
  icons: {
    icon: "https://image.bjchango.com/img/pabicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true} className="App">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
