import './globals.css';
import type { ReactNode } from 'react';
import SidebarNav from '../SidebarNav'; // ✅ SidebarNav is in src/
import About from '../About';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Bentley Systems Division</title>
        <meta
          name="description"
          content="Founder. Architect. Creator. Engineering trust at planetary scale."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-sans tracking-wide">
        <div className="flex min-h-screen w-full">
          {/* 🔹 SidebarNav is fixed, so main content shifts right */}
          <SidebarNav />
          <main className="ml-48 w-full px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}