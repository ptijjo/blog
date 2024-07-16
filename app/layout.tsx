import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "../lib/QueryProvider";
import { ClerkProvider} from '@clerk/nextjs';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog de partage des moments de notre vie",
  description: "Partage entre amis des moments de notre vie !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={inter.className}>
          <QueryProvider>
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
