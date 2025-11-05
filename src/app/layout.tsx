// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

// 👇 CORRECTED IMPORTS BASED ON FILE LOCATION
import SidebarNav from '../SidebarNav'; 
import MobileNav from '../components/MobileNav'; // Assuming MobileNav is still in src/components/
import { TraitProvider } from '../components/context/TraitContext'; // Assuming context is in src/components/context/

// Metadata for the Prometheus Theme
export const metadata: Metadata = {
  title: 'Bentley Systems Division // Foundation Log',
  description: '// UNIT_ID: BENTLEY_01 // Full-Stack Architect Log',
};

// Main Layout Component
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // 👇 CRITICAL: MUST HAVE <html> TAG
    <html lang="en">
      {/* Set global theme styles: Dark background, light monospace font */}
      {/* 👇 CRITICAL: MUST HAVE <body> TAG */}
      <body className="bg-zinc-950 text-white font-mono antialiased"> 
        
        {/* TraitProvider wraps all components that use the 'useTrait' hook */}
        <TraitProvider> 
          
          {/* Fixed Navigation Components */}
          <SidebarNav /> 
          <MobileNav /> 
          
          {/* Main Content Area */}
          <main className="min-h-screen w-full md:ml-56 p-4">
            {children} 
          </main>

        </TraitProvider>
      </body>
    </html>
    // 👆 End of return statement
  );
}