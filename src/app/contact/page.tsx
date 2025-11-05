// src/app/contact/page.tsx

'use client';

import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  // Simple state management for form inputs (replace with a proper form library later)
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    // Simulate API call delay
    setTimeout(() => {
      setStatus('SENT');
    }, 2000);
    // TODO: Integrate actual form submission logic (e.g., using a server action or API route)
  };

  const statusColor = status === 'SENT' ? 'text-green-500' : status === 'SENDING' ? 'text-orange-500' : 'text-cyan-400';

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-zinc-950 text-white font-mono px-4 py-20 overflow-hidden"
    >
      
      {/* Content Container - Styled as a system terminal */}
      <div className="relative z-10 max-w-3xl mx-auto p-8 border-4 border-cyan-900 bg-zinc-900/60 shadow-2xl shadow-cyan-900/20 w-full">
        
        {/* Title Header */}
        <h1 className="text-3xl font-light mb-2 tracking-wider uppercase text-cyan-400">
          // EXTERNAL_COMMS_PORTAL //
        </h1>
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6 border-b border-zinc-800 pb-2">
          <FaEnvelope className="inline mr-2 text-base" /> STATUS: <span className={statusColor}>SYSTEM {status}</span>
        </p>

        {/* Form Area - Data Input Terminal */}
        <div className="mb-8 p-4 border border-zinc-700 bg-zinc-900/80">
          <p className="text-sm uppercase tracking-widest text-orange-400 mb-4">
            {'>'} INITIATE_DATA_TRANSFER:
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name/Sender ID */}
            <input 
              type="text" 
              placeholder="SENDER_ID (Your Name/Alias)"
              className="w-full bg-zinc-800/50 border border-zinc-700 p-3 text-sm text-cyan-200 placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
              required
              disabled={status === 'SENDING' || status === 'SENT'}
            />
            {/* Subject/Protocol */}
            <input 
              type="text" 
              placeholder="PROTOCOL (Subject Line)"
              className="w-full bg-zinc-800/50 border border-zinc-700 p-3 text-sm text-cyan-200 placeholder-zinc-500 focus:border-cyan-500 focus:outline-none"
              required
              disabled={status === 'SENDING' || status === 'SENT'}
            />
            {/* Message/Payload */}
            <textarea
              placeholder="PAYLOAD (Your Message)"
              rows={5}
              className="w-full bg-zinc-800/50 border border-zinc-700 p-3 text-sm text-cyan-200 placeholder-zinc-500 focus:border-cyan-500 focus:outline-none resize-none"
              required
              disabled={status === 'SENDING' || status === 'SENT'}
            />

            {/* Submission Button */}
            <button
              type="submit"
              className={`w-full py-3 uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-3 ${
                status === 'SENT' 
                  ? 'bg-green-600 text-white' 
                  : status === 'SENDING' 
                  ? 'bg-orange-600 text-white animate-pulse' 
                  : 'bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/40 border border-cyan-600'
              }`}
              disabled={status === 'SENDING' || status === 'SENT'}
            >
              <FaPaperPlane /> 
              {status === 'SENDING' ? 'TRANSMITTING...' : status === 'SENT' ? 'TRANSMISSION COMPLETE' : 'EXECUTE_TRANSFER'}
            </button>
          </form>
        </div>
        
        {/* Direct Comms Links */}
        <div className="pt-4 border-t border-zinc-800">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
            {'>'} DIRECT_ACCESS_POINTS:
          </p>
          <div className="flex justify-around">
            <Link 
              href="https://github.com/lgg6bentley" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <FaGithub className="text-lg" /> {'<GITHUB>'}
            </Link>
            <Link 
              href="https://www.linkedin.com/in/bentley-bond-89b39a375/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <FaLinkedin className="text-lg" /> {'<LINKEDIN>'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
