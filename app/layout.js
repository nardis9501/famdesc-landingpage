import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Build, Share, Preserve: Famdesc - Your Digital Haven for Family Moments",
  description:
    "Join Famdesc to build your family tree, share cherished memories and preserve the moments that matter most. Connect with loved ones in your digital space dedicated to family moments.",
  openGraph: {
    title: "Famdesc - Your Digital Haven for Family Moments",
    description:
      "Join Famdesc to build your family tree, share cherished memories and preserve the moments that matter most.",
    url: "https://famdesc.com",
    siteName: "Famdesc",
    type: "website",
    images: [
      {
        url: "https://famdesc.com/open-graph-meta-tags/isotype.avif",
        with: "1200",
        height: "630",
        alt: "Famdesc logo",
      },
    ],
  },
  keywords:
    "family, genealogy, family memories, social network, share photos, share videos, Famdesc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
