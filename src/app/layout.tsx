// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import SidebarNav from '@/SidebarNav';
import MobileNav from '../components/MobileNav';
import { TraitProvider } from '../components/context/TraitContext'; // 👈 Add this

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Bentley Systems Division</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <TraitProvider> {/*Wrap everything inside */}
          <SidebarNav />
          <MobileNav />
          <main className="w-full px-4 py-8 md:ml-48">{children}</main>
        </TraitProvider>
      </body>
    </html>
  );
}