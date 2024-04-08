import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppings = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Michal Kopijka | Technical Support",
  description: "Michal Kopijka portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppings.className}>{children}</body>
    </html>
  );
}
