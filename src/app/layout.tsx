import type { Metadata } from "next";
import "./globals.css"; // Keep your global styles if needed

// Metadata for the entire app
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"> {/* Remove font class here */}
        {children}
      </body>
    </html>
  );
}
