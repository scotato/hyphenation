import "./globals.css";
import { Martian_Mono } from "next/font/google";

const martianMono = Martian_Mono({ subsets: ["latin"] });

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
      <body className={martianMono.className}>{children}</body>
    </html>
  );
}
