import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/app/providers/layout_provider";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bike shop",
  description: "small next web",
};

var pageState = ["opening", "error"]

export default function RootLayout({ children }) {
  var currentPageState = pageState[0]

  if (currentPageState == null) return;
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {currentPageState == pageState[0] ? (
          <LayoutProvider>{children}</LayoutProvider>
        ) : children}
      </body>
    </html>
  );
}
