import type { Metadata } from "next";
import { Alegreya_SC, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya_SC({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin'],
 });

const bodoniModa = Bodoni_Moda({
  weight: ['400', '500', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Ken Papaleo",
  description: "A tribute site: Ken Papaleo is a renowned landscape and nature photographer based in Colorado. With a passion for capturing the beauty of the Rocky Mountains and surrounding wilderness, Papaleo's photography showcases the stunning landscapes and natural wonders of Colorado. With over [X] years of experience behind the lens, Papaleo's work has been featured in numerous publications and exhibitions, earning him recognition for his skill and artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alegreya.className} ${bodoniModa.className}`}>{children}</body>
    </html>
  );
}
