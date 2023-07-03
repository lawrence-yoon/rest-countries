import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
