import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif } from "next/font/google"

const noto = Noto_Serif({
    subsets:['latin'],
    weight: ['400', '700']
})


export const metadata: Metadata = {
  title: "Physic resolve",
  description: "Create by @jmatzul7",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
