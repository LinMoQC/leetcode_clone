'use client'

import { RecoilRoot } from "recoil";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>LeetCode</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="icon" href="../public/favicon.png" />
        <meta name="description" content="web application"/>
      </head>
      <body>
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
