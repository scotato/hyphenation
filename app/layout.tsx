import "./globals.css";
import { Chivo_Mono } from "next/font/google";

const chivomono = Chivo_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "hyphenation",
  description: "adopt a hyphenated friend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chivomono.className}>{children}</body>
    </html>
  );
}
